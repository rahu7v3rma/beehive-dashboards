import React, {
    FunctionComponent,
    useState,
    useEffect,
    useCallback
} from 'react';
import { FormControl, ClickAwayListener } from '@mui/material';
import Popper from '@mui/material/Popper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    DetailsWrapper,
    MenuTitle,
    StyledButton,
    StyledIconButton,
    StyledMenuItem,
    StyledPopperBox
} from './styled';
import { useSelector } from 'react-redux';
import { getAllProjectsFromState } from 'src/redux/projects/selectors';
import { IProject } from 'src/types/projects';
import { ClientSelectors } from 'src/redux/client/selectors';
import { useAppDispatch } from 'src/hooks';
import {
    fetchProjectRepositories,
    selectProject
} from 'src/redux/client/service';
import { getAllProjects } from 'src/redux/projects/service';

const ProjectDetailsBar: FunctionComponent = () => {
    const projects = useSelector(getAllProjectsFromState);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useAppDispatch();
    const { selectedProjectId, isLoading } = ClientSelectors();

    const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProjectSelect = (projectId: string) => {
        fetchProjectData(projectId);
        handleClose();
    };

    const fetchProjectData = useCallback(
        (projectId: string) => {
            dispatch(selectProject(projectId));
            dispatch(fetchProjectRepositories(projectId));
        },
        [dispatch]
    );

    useEffect(() => {
        dispatch(getAllProjects())
            .unwrap()
            .then((res: unknown) => {
                const projectsRes = res as { projects: IProject[] };
                if (projectsRes.projects.length === 1) {
                    fetchProjectData(projectsRes.projects[0].id);
                }
            });
    }, [dispatch, fetchProjectData]);

    const open = Boolean(anchorEl);
    const id = open ? 'project-popper' : undefined;

    const selectedProject = projects.find(
        (el: IProject) => el.id === selectedProjectId
    );

    if (projects.length === 1) {
        return (
            <DetailsWrapper>
                <StyledButton disabled={true}>
                    {projects[0].projectName}
                </StyledButton>
            </DetailsWrapper>
        );
    } else {
        return (
            <DetailsWrapper>
                <FormControl variant="standard">
                    <StyledButton
                        disabled={isLoading}
                        onClick={handleIconClick}
                    >
                        {isLoading
                            ? 'Loading...'
                            : selectedProject
                              ? selectedProject.projectName
                              : 'Select Project'}
                        <StyledIconButton>
                            <ExpandMoreIcon />
                        </StyledIconButton>
                    </StyledButton>
                    <Popper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        placement="bottom"
                        modifiers={[
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 10]
                                }
                            },
                            {
                                name: 'preventOverflow',
                                options: {
                                    boundary: 'window'
                                }
                            }
                        ]}
                        style={{ zIndex: 10 }}
                    >
                        <ClickAwayListener onClickAway={handleClose}>
                            <StyledPopperBox>
                                <MenuTitle>Projects:</MenuTitle>
                                {isLoading ? (
                                    <StyledMenuItem>Loading...</StyledMenuItem>
                                ) : (
                                    projects.map((el: IProject) => (
                                        <StyledMenuItem
                                            key={el.id}
                                            value={el.id}
                                            onClick={() =>
                                                handleProjectSelect(el.id)
                                            }
                                            selected={
                                                el.id === selectedProjectId
                                            }
                                        >
                                            {el.projectName}
                                        </StyledMenuItem>
                                    ))
                                )}
                            </StyledPopperBox>
                        </ClickAwayListener>
                    </Popper>
                </FormControl>
            </DetailsWrapper>
        );
    }
};

export default ProjectDetailsBar;
