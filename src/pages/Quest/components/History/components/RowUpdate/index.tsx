import React from 'react';
import { QuestActivityType, QuestStatus } from 'src/enums/quests';
import { RatingSubject } from 'src/enums/rating';
import { Rating } from 'src/types/rating';
import {
    ActivityHeader,
    Description,
    ExpandText,
    RatingSection,
    RatingItemContainer,
    RatingHeader,
    RatingLabel,
    StyledStar,
    StyledStarOutline,
    StyledRating,
    CommentContainer,
    CommentLabel,
    CommentText,
    Note
} from './styled';

interface HistoryUpdateProps {
    activity_type: QuestActivityType;
    user: string;
    activityId?: string;
    text?: string;
    from?: QuestStatus;
    to?: QuestStatus;
    ratings?: Rating[];
    expandedDescriptions?: { [key: string]: boolean };
    onToggle?: (id: string) => void;
}

const HistoryUpdate: React.FC<HistoryUpdateProps> = ({
    activity_type,
    user,
    activityId,
    text,
    from,
    to,
    ratings,
    expandedDescriptions,
    onToggle
}) => {
    const handleRatingSubmitted = (ratingsList: Rating[]): JSX.Element => {
        const questDescriptionRating = ratingsList?.find(
            (r) => r.subject === RatingSubject.QUEST_DESCRIPTION
        );
        if (questDescriptionRating) {
            return (
                <RatingSection>
                    <RatingItemContainer>
                        <RatingHeader>
                            <RatingLabel>Request description</RatingLabel>
                            <StyledRating
                                value={questDescriptionRating?.score || 0}
                                readOnly
                                size="small"
                                icon={<StyledStar />}
                                emptyIcon={<StyledStarOutline />}
                            />
                        </RatingHeader>
                        {questDescriptionRating?.text && (
                            <CommentContainer>
                                <CommentLabel>Comment:</CommentLabel>
                                <CommentText>
                                    {questDescriptionRating.text}
                                </CommentText>
                            </CommentContainer>
                        )}
                    </RatingItemContainer>
                </RatingSection>
            );
        }

        const codeQualityRating = ratingsList?.find(
            (r) => r.subject === RatingSubject.QUEST_SOLUTION_CODE_QUALITY
        );
        const requirementsRating = ratingsList?.find(
            (r) => r.subject === RatingSubject.QUEST_SOLUTION_MATCH_REQUIREMENTS
        );

        return (
            <ActivityHeader>
                <RatingSection>
                    <RatingItemContainer>
                        <RatingHeader>
                            <RatingLabel>Code quality</RatingLabel>
                            <StyledRating
                                value={codeQualityRating?.score || 0}
                                readOnly
                                size="small"
                                icon={<StyledStar />}
                                emptyIcon={<StyledStarOutline />}
                            />
                        </RatingHeader>
                        {codeQualityRating?.text && (
                            <CommentContainer>
                                <CommentLabel>Comment:</CommentLabel>
                                <CommentText>
                                    {codeQualityRating.text}
                                </CommentText>
                            </CommentContainer>
                        )}
                    </RatingItemContainer>

                    <RatingItemContainer>
                        <RatingHeader>
                            <RatingLabel>Match requirements</RatingLabel>
                            <StyledRating
                                value={requirementsRating?.score || 0}
                                readOnly
                                size="small"
                                icon={<StyledStar />}
                                emptyIcon={<StyledStarOutline />}
                            />
                        </RatingHeader>
                        {requirementsRating?.text && (
                            <CommentContainer>
                                <CommentLabel>Comment:</CommentLabel>
                                <CommentText>
                                    {requirementsRating.text}
                                </CommentText>
                            </CommentContainer>
                        )}
                    </RatingItemContainer>
                </RatingSection>
            </ActivityHeader>
        );
    };

    const handleStatusChange = (
        fromStatus: QuestStatus,
        toStatus: QuestStatus
    ): JSX.Element => {
        if (
            fromStatus === QuestStatus.NEW &&
            toStatus === QuestStatus.IN_PROCESS
        ) {
            return (
                <ActivityHeader>
                    Request moved from <strong>Beehive tasks</strong> to{' '}
                    <strong>In progress</strong>
                </ActivityHeader>
            );
        }
        if (
            fromStatus === QuestStatus.IN_PROCESS &&
            toStatus === QuestStatus.IN_REVIEW
        ) {
            return (
                <ActivityHeader>
                    Request moved from <strong>In progress</strong> to{' '}
                    <strong>In review</strong>
                </ActivityHeader>
            );
        }
        if (toStatus === QuestStatus.DONE) {
            return (
                <ActivityHeader>Request finished successfully</ActivityHeader>
            );
        }
        if (
            fromStatus === QuestStatus.IN_REVIEW &&
            toStatus === QuestStatus.IN_PROCESS
        ) {
            return (
                <ActivityHeader>
                    Request moved from <strong>In review</strong> to{' '}
                    <strong>In progress</strong>
                </ActivityHeader>
            );
        }
        if (
            fromStatus === QuestStatus.NEW &&
            toStatus === QuestStatus.IN_REVIEW
        ) {
            return (
                <ActivityHeader>
                    Request moved from <strong>Beehive tasks</strong> to{' '}
                    <strong>In review</strong>{' '}
                    {user !== 'Beehive' && <Note>(Solved by tech lead)</Note>}
                </ActivityHeader>
            );
        }
        return <ActivityHeader></ActivityHeader>;
    };

    if (activity_type === QuestActivityType.DESCRIPTION_UPDATED && activityId) {
        const words = text?.split(' ') || [];
        const isLongDescription = words.length > 100;
        const displayText = expandedDescriptions?.[activityId]
            ? text
            : words.slice(0, 100).join(' ') + ' ';

        return (
            <ActivityHeader>
                <strong>{user}</strong> updated the request description, the
                previous description was:
                <Description>
                    {displayText}
                    {isLongDescription && (
                        <ExpandText onClick={() => onToggle?.(activityId)}>
                            {!expandedDescriptions?.[activityId]
                                ? 'see more'
                                : 'see less'}
                        </ExpandText>
                    )}
                </Description>
            </ActivityHeader>
        );
    }

    if (activity_type === QuestActivityType.SOLUTION_SUBMITTED) {
        return (
            <ActivityHeader>
                <strong>{user}</strong> completed the request
            </ActivityHeader>
        );
    }

    if (activity_type === QuestActivityType.MODIFICATIONS_REQUESTED) {
        return (
            <ActivityHeader>
                <strong>{user}</strong> required modifications on the request
            </ActivityHeader>
        );
    }

    if (activity_type === QuestActivityType.QUEST_CREATED) {
        return (
            <ActivityHeader>
                <strong>{user}</strong> created the request
            </ActivityHeader>
        );
    }

    if (activity_type === QuestActivityType.STATUS_CHANGED && from && to) {
        return handleStatusChange(from, to);
    }

    if (activity_type === QuestActivityType.RATING_SUBMITTED && ratings) {
        return handleRatingSubmitted(ratings);
    }

    return <ActivityHeader></ActivityHeader>;
};

export default HistoryUpdate;
