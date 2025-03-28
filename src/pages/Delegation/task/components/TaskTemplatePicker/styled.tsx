import { Box, styled, TextField } from '@mui/material';

import color from 'src/theme/color';

export const Description = styled(Box)({
    width: '100%',
    paddingLeft: '30px',
    display: 'flex',
    flexDirection: 'column'
});

export const SxDescription1 = {
    marginBottom: '12px',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19px',
    color: color.white
};

export const SxDescription2 = {
    marginBottom: '24px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const TaskWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '24px 16px',
    borderRadius: '4px'
});

export const RawInput = styled(TextField)({
    width: '100%',
    background: color.blackRock,
    '& .MuiFilledInput-input': {
        color: color.white90,
        fontFamily: 'Inter !important',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '13px',
        lineHeight: '23px'
    },
    '& label': {
        fontSize: '12px',
        fontFamily: 'Inter !important',
        background: color.yellowText,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: color.lightningYellow
    },
    '& .MuiFilledInput-root:after': {
        borderBottom: `2px solid ${color.lightningYellow}`
    },
    '& .MuiFilledInput-root:before': {
        borderBottom: `2px solid ${color.lightningYellow}`
    },
    '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: `2px solid ${color.lightningYellow}`
    }
});

export const PopularTasks = {
    fontFamily: 'Inter !important',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '16px',
    marginTop: '24px',
    background: color.yellowText,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
};

export const PopularTasksWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
    flexFlow: 'row wrap',
    gap: '6px'
});

export const TaskContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '7px 12px',
    background: color.blackRock,
    borderRadius: '4px',
    '&:hover': {
        background: color.lightningYellow
    },
    cursor: 'pointer'
});

export const TextTask = {
    fontFamily: 'Inter !important',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    color: color.white90,
    cursor: 'pointer'
};

export const PopularTasksContainer = styled('div')({
    marginTop: '10px',
    marginBottom: '20px'
});
