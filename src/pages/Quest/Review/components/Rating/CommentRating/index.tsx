import { FC, useState } from 'react';
import { commentInputSx, CommentRatingSection, ButtonSection } from './styled';
import { Title, Subtitle } from 'src/shared';
import { TextField } from '@mui/material';
import ReviewButton from '../../ReviewButton';

interface CommentRatingProps {
    onSubmit: (feedback: string) => void;
    onCancel: () => void;
    isLoading: boolean;
}

const CommentRating: FC<CommentRatingProps> = ({
    onSubmit,
    onCancel,
    isLoading
}) => {
    const [feedback, setFeedback] = useState('');

    return (
        <CommentRatingSection>
            <Title>Write a comment</Title>
            <Subtitle>(Optional)</Subtitle>

            <TextField
                multiline
                rows={5}
                fullWidth
                variant="outlined"
                sx={commentInputSx}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            />

            <ButtonSection>
                <ReviewButton
                    label="Cancel"
                    onClick={onCancel}
                    width="100px"
                    styleType="codGray"
                    aria-label="Cancel the approval"
                />

                <ReviewButton
                    label="Done"
                    onClick={() => onSubmit(feedback)}
                    width="100px"
                    styleType="yellow"
                    isLoading={isLoading}
                />
            </ButtonSection>
        </CommentRatingSection>
    );
};

export default CommentRating;
