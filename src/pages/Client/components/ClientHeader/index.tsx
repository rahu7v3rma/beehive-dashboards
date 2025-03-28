import { FunctionComponent } from 'react';
import { Avatar, Label } from 'src/shared';
import { ReactComponent as TrelloBoardIcon } from 'src/assets/icons/trello-board.svg';
import { ReactComponent as GithubIcon } from 'src/assets/icons/github-icon.svg';

import theme from 'src/theme';
import {
    S,
    Root,
    LabelWrapper,
    AvatarWithText,
    RepoLinkWrapper,
    TooltipBg,
    RepoName
} from './styled';
import { ClientSelectors } from 'src/redux/client/selectors';
import { TooltipWrapper } from 'src/shared/Table/styled';
import { useSelector } from 'react-redux';
import { getProject } from 'src/redux/projects/selectors';

type Props = {};

const ClientHeader: FunctionComponent<Props> = ({}: Props) => {
    const { selectedProjectId, isLoading, repositories } = ClientSelectors();
    const selectedProject = useSelector(getProject(selectedProjectId));
    return (
        <Root>
            {!isLoading && selectedProjectId && (
                <>
                    <AvatarWithText>
                        <Avatar
                            background={theme.color.darkBlue}
                            size="110px"
                            image=""
                        />
                        <LabelWrapper>
                            <Label sxOverrides={S.projectTitle}>
                                {selectedProject.projectName}
                            </Label>
                            <Label sxOverrides={S.projectId}>
                                {`project id: ${selectedProjectId}`}
                            </Label>
                        </LabelWrapper>
                    </AvatarWithText>
                    <TooltipWrapper
                        title={
                            <TooltipBg>
                                <Label sxOverrides={S.projectTitle}>
                                    All repositories
                                </Label>
                                {repositories ? (
                                    repositories.map((repo, index) => (
                                        <RepoLinkWrapper
                                            key={index}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                window.open(repo.url, '_blank');
                                            }}
                                        >
                                            <RepoName>{repo.name}</RepoName>
                                        </RepoLinkWrapper>
                                    ))
                                ) : (
                                    <Label sxOverrides={S.noReposLabel}>
                                        No repositories are linked to this
                                        project
                                    </Label>
                                )}
                            </TooltipBg>
                        }
                        arrow
                    >
                        <GithubIcon />
                    </TooltipWrapper>
                    <TrelloBoardIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            window.open(selectedProject.trelloBoard, '_blank')
                        }
                    />
                </>
            )}
        </Root>
    );
};
export default ClientHeader;
