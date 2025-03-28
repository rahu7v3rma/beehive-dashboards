import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from 'src/theme';
import { BtnProps } from './Index';

export const StyledTextField = styled(TextField)({
    marginTop: '20px !important',
    '& label.Mui-focused': {
        color: theme.color.white70
    },
    '& label': {
        color: theme.color.white70,
        fontFamily: '"Inter",sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: `${theme.color.lightningYellow}`
    },
    '& .MuiOutlinedInput-input': {
        color: theme.color.white70
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `1px solid ${theme.color.tuna}`
        },
        '&:hover fieldset': {
            border: `1px solid ${theme.color.tuna}`
        },
        '&.Mui-focused fieldset': {
            border: `1px solid ${theme.color.tuna}`
        }
    }
});

export const StyledButton = styled(Button)(
    ({ background, Color, height }: BtnProps) => ({
        background: `${background} !important`,
        color: `${Color || theme.color.white} !important`,
        width: '136px',
        height: `${height || '42px'}`,
        marginLeft: '4px !important',
        marginRight: '4px !important',
        fontFamily: '"Inter",sans-serif',
        fontWeight: '600 !important',
        fontSize: '14px !important',
        lineHeight: '17px',
        letterSpacing: '-0.04em',
        '& .MuiButton-label': {
            textTransform: 'none'
        }
    })
);
