import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from 'src/theme';
import { BtnProps } from './index';

export const dialogStyle = {
    ' & .MuiDialog-paper': {
        backgroundColor: `${theme.color.darkBlue} !important`,
        boxShadow:
            '0px 83px 379px rgba(0, 0, 0, 0.56), 0px 53.7963px 221.961px rgba(0, 0, 0, 0.425185), 0px 31.9704px 120.719px rgba(0, 0, 0, 0.340148), 0px 16.6px 61.5875px rgba(0, 0, 0, 0.28), 0px 6.76296px 30.8815px rgba(0, 0, 0, 0.219852), 0px 1.53704px 14.9144px rgba(0, 0, 0, 0.134815'
    }
};

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
        borderBottomColor: 'yellow'
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

export const StyledButton = styled(Button)(({ background }: BtnProps) => ({
    background: `${background} !important`,
    color: `${theme.color.white90} !important`,
    width: '136px',
    height: '42px',
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
}));

export const ButtonStyleWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '28px',
    marginTop: '60px'
});
