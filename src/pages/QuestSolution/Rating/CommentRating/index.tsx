import { FC } from 'react';
import { commentInputSx, CommentRatingSection } from './styled';
import { Title } from 'src/shared';
import { TextField } from '@mui/material';

interface CommentRatingProps {
    value: string;
    onChange: (value: string) => void;
}

const CommentRating: FC<CommentRatingProps> = ({ value, onChange }) => {
    return (
        <CommentRatingSection>
            <Title>Write a comment</Title>
            <TextField
                multiline
                rows={5}
                fullWidth
                variant="outlined"
                sx={commentInputSx}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </CommentRatingSection>
    );
};

export default CommentRating;
