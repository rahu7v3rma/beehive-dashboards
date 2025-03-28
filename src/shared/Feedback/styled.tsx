import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const Container = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FeedbackSection = styled(Box)`
    align-items: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 30px 20px;
    width: 40%;
    text-align: center;
`;

export const feedbackInputSx = {
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
