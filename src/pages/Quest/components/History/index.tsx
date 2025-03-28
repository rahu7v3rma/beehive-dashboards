import { useEffect, useState, useCallback } from 'react';
import { getQuestActivities } from 'src/redux/quests/service';
import { ReactComponent as GeneralActivityIcon } from 'src/assets/icons/general_activity.svg';
import { ReactComponent as DescriptionChangeIcon } from 'src/assets/icons/description_change.svg';
import { QuestActivityType, QuestStatus } from 'src/enums/quests';
import { QuestActivity } from 'src/types/quests';
import useAppDispatch from 'src/hooks/useAppDispatch';

import {
    ActivityColumn,
    ActivityRow,
    DateContainer,
    DatePart,
    HistoryContainer,
    StyledTitle,
    TimePart,
    StyledContainer,
    IconColumn,
    StyledStar,
    VerticalLine,
    IconBox
} from './styled';
import { Rating } from 'src/types/rating';
import RowUpdate from './components/RowUpdate';

type Props = {
    questId: string;
};

const handleIcon = (activity: { activityType: QuestActivityType }) => {
    switch (activity.activityType) {
        case QuestActivityType.DESCRIPTION_UPDATED:
            return <DescriptionChangeIcon />;
        case QuestActivityType.RATING_SUBMITTED:
            return <StyledStar />;
        default:
            return <GeneralActivityIcon />;
    }
};

const useExpandedDescriptions = () => {
    const [expandedDescriptions, setExpandedDescriptions] = useState<{
        [key: string]: boolean;
    }>({});

    const handleDescriptionToggle = useCallback((activityId: string) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [activityId]: !prev[activityId]
        }));
    }, []);

    return { expandedDescriptions, handleDescriptionToggle };
};

const History: React.FC<Props> = ({ questId }) => {
    const { expandedDescriptions, handleDescriptionToggle } =
        useExpandedDescriptions();

    const dispatch = useAppDispatch();
    const [activities, setActivities] = useState<QuestActivity[]>([]);
    useEffect(() => {
        if (questId) {
            dispatch(getQuestActivities({ questId }))
                .unwrap()
                .then((fetchedActivities: QuestActivity[]) => {
                    setActivities(fetchedActivities);
                })
                .catch((error) => {
                    console.error('Failed to fetch quest activities:', error);
                });
        }
    }, [dispatch, questId]);

    return (
        <StyledContainer>
            <StyledTitle>History</StyledTitle>
            <HistoryContainer>
                {activities.length === 0 ? (
                    <ActivityRow>
                        <ActivityColumn>
                            No activities found for this request yet. Activities
                            will appear here as changes are made.
                        </ActivityColumn>
                    </ActivityRow>
                ) : (
                    activities
                        .sort((a, b) => b.created.localeCompare(a.created))
                        .map((activity, index) => {
                            const { created, user, activityType, details } =
                                activity;
                            const {
                                text,
                                statusChange = {},
                                ratings
                            }: {
                                text?: string;
                                statusChange?: {
                                    from?: QuestStatus;
                                    to?: QuestStatus;
                                };
                                ratings?: Rating[];
                            } = details;

                            const { from, to } = statusChange || {};

                            const date = new Date(created);
                            const datePart = date.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            });
                            const timePart = date.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            });

                            return (
                                <ActivityRow key={activity.id}>
                                    <ActivityColumn>
                                        <DateContainer>
                                            <DatePart>{datePart}</DatePart>
                                            <TimePart>{timePart}</TimePart>
                                        </DateContainer>
                                    </ActivityColumn>
                                    <IconColumn>
                                        <IconBox>
                                            {handleIcon({ activityType })}
                                            {index !==
                                                activities.length - 1 && (
                                                <VerticalLine />
                                            )}
                                        </IconBox>
                                    </IconColumn>
                                    <ActivityColumn>
                                        <RowUpdate
                                            activity_type={activityType}
                                            user={user}
                                            activityId={activity.id}
                                            text={text}
                                            from={from}
                                            to={to}
                                            ratings={ratings}
                                            expandedDescriptions={
                                                expandedDescriptions
                                            }
                                            onToggle={handleDescriptionToggle}
                                        />
                                    </ActivityColumn>
                                </ActivityRow>
                            );
                        })
                )}
            </HistoryContainer>
        </StyledContainer>
    );
};

export default History;
