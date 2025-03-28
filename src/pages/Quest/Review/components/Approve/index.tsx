import { FC, useState, useCallback } from 'react';

import { Container, RatingSection } from './styled';

import { useSelector } from 'react-redux';
import StarsRating from 'src/shared/StarsRating';
import CommentRating from '../Rating/CommentRating';
import { getQuestSolution as getQuestSolutionSelector } from 'src/redux/quests/selectors';
import useAppDispatch from 'src/hooks/useAppDispatch';
import ReviewButton from '../ReviewButton';
import { Rating } from 'src/types/rating';
import { postRequestApprove } from 'src/redux/quests/service';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';
import { updateRating as updateRatingService } from 'src/redux/rating/service';
import { RatingSubject } from 'src/enums/rating';

interface ApproveProps {
    questId: string;
    onSuccess: () => void;
    onCancel: () => void;
}

const Approve: FC<ApproveProps> = ({ questId, onSuccess, onCancel }) => {
    const [isCommentRatingShowing, setIsCommentRatingShowing] =
        useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [ratings, setRatings] = useState<Rating[]>([]);
    const dispatch = useAppDispatch();
    const questSolution = useSelector(getQuestSolutionSelector);

    const reviewQuestions = [
        {
            subject: RatingSubject.QUEST_SOLUTION_CODE_QUALITY,
            text: 'How would you rate the request solution code quality?'
        },
        {
            subject: RatingSubject.QUEST_SOLUTION_MATCH_REQUIREMENTS,
            text: 'How would you rate the request solution match requirements?'
        }
    ];

    const handleRatingsComplete = (submittedRatings: Rating[]) => {
        setIsCommentRatingShowing(true);
        setRatings(submittedRatings);
    };

    const updateRating = useCallback(
        async (rating: Rating) => {
            try {
                await dispatch(
                    updateRatingService({
                        subject: rating.subject,
                        score: rating.score,
                        text: rating.text,
                        ratingAuthorizationCode:
                            questSolution.ratingAuthorizationCode
                    })
                ).unwrap();
                console.log('Rating updated successfully');

                return true;
            } catch (error) {
                console.error('Error updating rating:', error);
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'error',
                        snackbarMessage:
                            'An error occurred while updating your rating. Please try again or contact support if the issue persists.'
                    })
                );
                return false;
            }
        },
        [dispatch, questSolution.ratingAuthorizationCode]
    );

    const submitApprovalRequest = useCallback(
        async (feedback: string) => {
            try {
                await dispatch(
                    postRequestApprove({
                        questId,
                        params: { feedback }
                    })
                ).unwrap();
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'success',
                        snackbarMessage: 'Quest approved successfully.'
                    })
                );
                onSuccess();
            } catch (error) {
                console.error('Error approving quest:', error);
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'error',
                        snackbarMessage:
                            'An error occurred while approving the quest. Please try again or contact support.'
                    })
                );
            }
        },
        [dispatch, onSuccess, questId]
    );

    const handleSubmit = useCallback(
        async (feedback: string) => {
            setIsSubmitting(true);
            for (const rating of ratings) {
                const isRatingUpdated = await updateRating({
                    ...rating,
                    text: feedback
                });
                if (!isRatingUpdated) {
                    setIsSubmitting(false);
                    return;
                }
            }
            await submitApprovalRequest(feedback);
            setIsSubmitting(false);
        },
        [ratings, updateRating, submitApprovalRequest]
    );

    const getCancelButton = () => {
        return (
            <div style={{ marginTop: '15px' }}>
                <ReviewButton
                    label="Cancel"
                    onClick={onCancel}
                    width="80px"
                    styleType="codGray"
                    aria-label="Cancel the approval"
                />
            </div>
        );
    };

    return (
        <Container>
            <RatingSection>
                <StarsRating
                    onRatingsComplete={handleRatingsComplete}
                    questions={reviewQuestions}
                />
                {isCommentRatingShowing ? (
                    <CommentRating
                        onSubmit={handleSubmit}
                        onCancel={onCancel}
                        isLoading={isSubmitting}
                    />
                ) : (
                    getCancelButton()
                )}
            </RatingSection>
        </Container>
    );
};

export default Approve;
