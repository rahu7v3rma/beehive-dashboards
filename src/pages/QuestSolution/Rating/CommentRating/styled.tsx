import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const CommentRatingSection = styled(Box)`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 10px;
`;

export const commentInputSx = {
    marginTop: '10px',
    marginBottom: '20px',
    backgroundColor: color.white10,
    borderRadius: '4px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: color.white10
        },
        '&:hover fieldset': {
            borderColor: color.white10
        },
        '&.Mui-focused fieldset': {
            borderColor: color.white10
        }
    },
    '& .MuiInputBase-input': {
        color: color.white90
    },
    '& .MuiInputLabel-root': {
        color: color.white90
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: color.white90
    }
};
