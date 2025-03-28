import { FC } from 'react';
import { Container, AttributeSection, Attribute } from './styled';
import { Title } from 'src/shared';
import { formatEnumValue } from 'src/utils/string';
import { QuestStatus } from 'src/enums/quests';
import { Tooltip } from '@mui/material';
import { dateAndTimeSeperatedString } from 'src/utils/dateFormat';
import { Rating as MuiRating } from '@mui/material';
import { Star, StarOutline } from '@mui/icons-material';
import color from 'src/theme/color';
import { QuestSchema, QuestActivity } from 'src/types/quests';
import { QuestActivityType } from 'src/enums/quests';

interface WorkOverviewProps {
    quest: QuestSchema;
}

const WorkOverview: FC<WorkOverviewProps> = ({ quest }) => {
    const ratingStarSize = '15px';
    const latestSolutionApprovedActivity = quest.activities
        .filter((activity: QuestActivity) => {
            if (activity.activityType !== QuestActivityType.RATING_SUBMITTED)
                return false;
            return activity.id.startsWith('rating_quest_solution');
        })
        .sort(
            (a, b) =>
                new Date(b.created).getTime() - new Date(a.created).getTime()
        )[0];

    const dateEnded = latestSolutionApprovedActivity
        ? latestSolutionApprovedActivity.created
        : null;

    return (
        <Container>
            <Title>Work Overview</Title>
            <AttributeSection>
                <Attribute>
                    <label>Status</label>
                    <span>{formatEnumValue(QuestStatus, quest.status)}</span>
                </Attribute>
                {quest.status !== QuestStatus.DONE ? (
                    <>
                        <Attribute>
                            <label>Completed</label>
                            <span>{quest.progress || 0}%</span>
                        </Attribute>
                        <Tooltip
                            title="The following is the count of iterations for this request"
                            placement="top"
                            arrow
                        >
                            <Attribute>
                                <label>Iterations</label>
                                <span>{quest.iteration || 0}</span>
                            </Attribute>
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <Attribute>
                            <label>Date Started</label>
                            <span>
                                {String(
                                    dateAndTimeSeperatedString(
                                        new Date(quest.created)
                                    ).date
                                )}
                            </span>
                        </Attribute>
                        <Attribute>
                            <label>Date Ended</label>
                            <span>
                                {dateEnded
                                    ? String(
                                          dateAndTimeSeperatedString(
                                              new Date(dateEnded)
                                          ).date
                                      )
                                    : 'N/A'}
                            </span>
                        </Attribute>
                        <Attribute sx={{ marginTop: '3px' }}>
                            <label>Average Rating</label>
                            <span>
                                <MuiRating
                                    style={{
                                        pointerEvents: 'none',
                                        marginTop: '-4px'
                                    }}
                                    defaultValue={quest.averageRatingScore}
                                    precision={0.5}
                                    icon={
                                        <Star
                                            style={{
                                                color: color.lightningYellow,
                                                fontSize: ratingStarSize
                                            }}
                                        />
                                    }
                                    emptyIcon={
                                        <StarOutline
                                            style={{ fontSize: ratingStarSize }}
                                        />
                                    }
                                />
                            </span>
                        </Attribute>
                    </>
                )}
            </AttributeSection>
        </Container>
    );
};

export default WorkOverview;
