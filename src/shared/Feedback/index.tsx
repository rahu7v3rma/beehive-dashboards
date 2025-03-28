import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, FeedbackSection, feedbackInputSx } from './styled';
import { Title } from 'src/shared';
import { TextField } from '@mui/material';
import ReviewButton from 'src/pages/Quest/Review/components/ReviewButton';
import { useAppDispatch } from 'src/hooks';
import { postFeedback } from 'src/redux/feedback/service';
import { getIsLoading } from 'src/redux/feedback/selectors';
import { PostFeedbackRequest } from 'src/types/feedback';
import { FeedbackType } from 'src/enums/feedback';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';

interface FeedbackProps {
    taskId?: string;
    questId?: string;
    type?: FeedbackType;
    slackNotification?: boolean;
    trelloNotification?: boolean;
    onSuccess?: () => void;
}

const Feedback: FC<FeedbackProps> = ({
    taskId = null,
    questId = null,
    type = FeedbackType.FEEDBACK,
    slackNotification = true,
    trelloNotification = true,
    onSuccess
}) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getIsLoading);
    const [feedback, setFeedback] = useState('');

    const handleSuccessSnackbar = () => {
        dispatch(
            setSnackbarAttributes({
                snackbarOpen: true,
                snackbarType: 'success',
                snackbarMessage: 'Feedback submitted successfully!'
            })
        );
        setFeedback('');
        if (onSuccess) {
            onSuccess();
        }
    };

    const handleErrorSnackbar = (error: any) => {
        console.error('Error submitting feedback:', error);
        dispatch(
            setSnackbarAttributes({
                snackbarOpen: true,
                snackbarType: 'error',
                snackbarMessage:
                    'An error occurred while submitting your feedback. Please try again.'
            })
        );
    };

    const handleSendFeedback = () => {
        const params: PostFeedbackRequest = {
            taskId,
            questId,
            details: feedback,
            type,
            slackNotification,
            trelloNotification
        };
        dispatch(postFeedback({ params }))
            .unwrap()
            .then(handleSuccessSnackbar)
            .catch(handleErrorSnackbar);
    };

    return (
        <Container>
            <FeedbackSection>
                <Title>How can we improve? (Optional)</Title>
                <TextField
                    multiline
                    rows={3}
                    fullWidth
                    variant="outlined"
                    sx={feedbackInputSx}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <ReviewButton
                    label="Send"
                    onClick={handleSendFeedback}
                    width="100px"
                    styleType="yellow"
                    isLoading={isLoading}
                />
            </FeedbackSection>
        </Container>
    );
};

export default Feedback;
