import { FunctionComponent } from 'react';
import {
    AvatarContainer,
    IconWithTextWrapper,
    ProjectDetails,
    RightContainer,
    Wrapper,
    delegateTaskButton,
    styles
} from './styled';
import { Avatar, Button, Label } from 'src/shared';
import theme from 'src/theme';
import { ReactComponent as TrelloBoardIcon } from 'src/assets/icons/trello-board.svg';
import { ReactComponent as ProjectManageIcon } from 'src/assets/icons/project-manage.svg';

type Props = {};

const ProjectInfo: FunctionComponent<Props> = ({}: Props) => {
    return (
        <Wrapper>
            <AvatarContainer>
                <Avatar
                    background={theme.color.darkBlue}
                    size="110px"
                    image=""
                />
                <ProjectDetails>
                    <Label sxOverrides={styles.title}>Project name</Label>
                    <Label sxOverrides={styles.subtitle}>uzEg2vGc</Label>
                </ProjectDetails>
            </AvatarContainer>

            <RightContainer>
                <IconWithTextWrapper>
                    <TrelloBoardIcon style={styles.icon} />
                    <Label sxOverrides={styles.subtitle}>
                        Cuckoo Trello board
                    </Label>
                </IconWithTextWrapper>
                <IconWithTextWrapper>
                    <ProjectManageIcon style={styles.icon} />
                    <Label sxOverrides={styles.subtitle}>
                        Project manager board
                    </Label>
                </IconWithTextWrapper>
                <Button
                    color={theme.color.yellowButton}
                    width="140px"
                    height="40px"
                    styles={delegateTaskButton}
                    onClick={() => {}}
                >
                    Delegate task
                </Button>
            </RightContainer>
        </Wrapper>
    );
};

export default ProjectInfo;
