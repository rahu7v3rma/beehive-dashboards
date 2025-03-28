import { FunctionComponent, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useAppDispatch from '../../hooks/useAppDispatch';
// import { Navbar, Loader, Label, TimeRange } from 'src/shared';
import { Navbar, Loader, Label } from 'src/shared';
import ProjectContributors from './components/ProjectContributors';
import TaskQueue from './components/TaskQueue';
import ProjectActivity from './components/ProjectActivity';
import ProjectDetails from './components/ProjectDetail';
import { getIsLoading } from '../../redux/project-contributors/selectors';
import {
    ProjectActivityCard,
    HistoryText,
    HistoryTextAlign,
    ProjectActivityBox,
    BudgetReviewBox,
    labelStyle
} from './styled';
import BudgetReview from './components/BudgetReview';
import { Lables } from 'src/constants/labels';
import { getActivityStat, getProjectData } from 'src/redux/projects/service';
import { getProjectDataFromState } from 'src/redux/projects/selectors';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signedIn } from 'src/redux/auth/service';
import { IActivityRange } from 'src/constants/activityStat';
import DelayedTask from 'src/shared/DelayedTask';
import Modal from 'src/shared/Modal';
import { ITaskTrelloLink } from 'src/types/projects';
import { ClientSelectors } from 'src/redux/client/selectors';

type Props = Record<string, never>;

const ProjectDashboard: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { selectedProjectId } = ClientSelectors();
    const [trelloLinks, setTrelloLinks] = React.useState<
        ITaskTrelloLink[] | null
    >(null);
    const projectData = useSelector((state) =>
        selectedProjectId
            ? getProjectDataFromState(selectedProjectId)(state)
            : null
    );
    const isLoading = useSelector(getIsLoading);
    useEffect(() => {
        if (!signedIn()) {
            navigate('/login');
        }
    }, [navigate]);

    const lazyFetchProjectData = useCallback(async () => {
        if (selectedProjectId) {
            await dispatch(getProjectData({ id: selectedProjectId }));
        }
    }, [dispatch, selectedProjectId]);

    useEffect(() => {
        dispatch(lazyFetchProjectData);
    }, [dispatch, lazyFetchProjectData]);

    const fetchActivityStat = useCallback(
        async (params: IActivityRange) => {
            await dispatch(getActivityStat(params));
        },
        [dispatch]
    );

    useEffect(() => {
        fetchActivityStat({
            from: null,
            to: null
        });
    }, [dispatch, fetchActivityStat]);

    const handleSort = (_sortBy: string) => {};

    return (
        <Navbar>
            <Modal
                open={trelloLinks != null}
                onClose={() => {
                    setTrelloLinks(null);
                }}
                title="Trello Links"
                dialogStyle={{}}
                hasCrossIcon={false}
            >
                {trelloLinks?.map((link, index) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        key={index}
                    >
                        <div>
                            <Label
                                sxOverrides={labelStyle}
                            >{`task id: ${link.taskId}`}</Label>
                        </div>
                        <div
                            onClick={() => {
                                window.open(
                                    `https://trello.com/c/${link.shortLink}`,
                                    '_blank'
                                );
                            }}
                        >
                            <Label
                                sxOverrides={{
                                    ...labelStyle,
                                    cursor: 'pointer'
                                }}
                            >{`https://trello.com/c/${link.shortLink}`}</Label>
                        </div>
                    </div>
                ))}
            </Modal>
            <ProjectDetails />
            <ProjectActivityBox>
                <TaskQueue
                    projectData={projectData}
                    setTrelloLinks={setTrelloLinks}
                />
                <ProjectActivityCard>
                    <ProjectActivity
                        projectData={projectData}
                        setTrelloLinks={setTrelloLinks}
                    />
                </ProjectActivityCard>
            </ProjectActivityBox>
            <BudgetReviewBox>
                <BudgetReview projectData={projectData} />
            </BudgetReviewBox>
            <HistoryTextAlign>
                <Label sxOverrides={HistoryText}>
                    {Lables.delayedWorkTitle}
                </Label>
                <Label sxOverrides={labelStyle}>{Lables.delayedWorkDesc}</Label>
            </HistoryTextAlign>
            {isLoading ? (
                <Loader />
            ) : (
                <DelayedTask
                    projectData={projectData}
                    setTrelloLinks={setTrelloLinks}
                />
            )}
            <HistoryTextAlign>
                <Label sxOverrides={HistoryText}>Contributors</Label>
                <Label sxOverrides={labelStyle}>
                    The following is the history of all the work this
                    contributor interacted with. active state is determined by
                    last engagement. yellow if last engaged more than 7 ago, red
                    ago, red if more then 30.
                </Label>
            </HistoryTextAlign>
            {isLoading ? (
                <Loader />
            ) : (
                <ProjectContributors
                    projectData={projectData}
                    handleSort={handleSort}
                    sort="desc"
                    sortBy="name"
                />
            )}
        </Navbar>
    );
};

export default ProjectDashboard;
