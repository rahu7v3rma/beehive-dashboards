import { Box, TextField, styled } from '@mui/material';
import color from 'src/theme/color';

export const InputContainer = styled(Box)`
    width: 100%;
    flex-direction: column;
    position: relative;
    background-color: ${color.darkBlue};
    padding: 24px 16px;
    border-radius: 4px;
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
`;

export const taskInputLabel = {
    backgroundColor: color.darkBlue,
    position: 'absolute',
    transform: 'translate(14px, -8px) scale(0.75)',
    transformOrigin: 'top left',
    color: color.yellow60,
    zIndex: '1',
    left: '10px',
    padding: '0px 4px',
    font: '16px "Inter" !important'
};

export const taskInputSx = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `0.5px solid ${color.white10}`
        }
    },
    '& .MuiOutlinedInput-root:hover': {
        '& fieldset': {
            borderColor: color.white
        }
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: color.white
        }
    }
};

export const taskInputTextSx = {
    color: color.white90,
    font: '13px/23px "Inter"'
};
