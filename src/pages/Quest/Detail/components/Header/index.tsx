import { FC } from 'react';
import { Container } from './styled';
import QuestTitle from '../QuestTitle';
import { QuestSchema } from 'src/types/quests';
import WorkOverview from '../WorkOverview';
import ReviewWork from '../ReviewWork';
import { QuestStatus } from 'src/enums/quests';

interface Props {
    quest: QuestSchema;
}

const Header: FC<Props> = ({ quest }) => {
    return (
        <Container>
            <QuestTitle quest={quest} />
            {quest.status === QuestStatus.IN_REVIEW ? (
                <ReviewWork quest={quest} />
            ) : (
                <WorkOverview quest={quest} />
            )}
        </Container>
    );
};

export default Header;
