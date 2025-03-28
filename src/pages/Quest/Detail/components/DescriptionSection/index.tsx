import { FC } from 'react';
import Description from '../../../components/Description';
import { QuestSchema, QuestActivity } from 'src/types/quests';
import { QuestActivityType } from 'src/enums/quests';
import { Container } from './styled';
import color from 'src/theme/color';

interface Props {
    quest: QuestSchema;
}

const DescriptionSection: FC<Props> = ({ quest }) => {
    const modificationActivities = quest.activities
        .filter(
            (activity: QuestActivity) =>
                activity.activityType ===
                QuestActivityType.MODIFICATIONS_REQUESTED
        )
        .sort(
            (a, b) =>
                new Date(a.created).getTime() - new Date(b.created).getTime()
        );

    return (
        <Container>
            <Description
                label="Description"
                description={
                    <div style={{ color: color.white }}>
                        {quest.description}
                    </div>
                }
            />
            {modificationActivities.map((activity, index) => (
                <Description
                    key={activity.id}
                    label={`Description Iteration #${index + 2}`}
                    description={
                        <div style={{ color: color.white }}>
                            {activity.details.text}
                        </div>
                    }
                />
            ))}
        </Container>
    );
};

export default DescriptionSection;
