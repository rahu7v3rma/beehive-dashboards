import { FormControl, Box, TextField, Autocomplete } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'src/theme/index';

export const StyledForm = styled(FormControl)({
    '& .MuiOutlinedInput-input': {
        color: `${theme.color.darkGray}`
    },
    '& .MuiInputLabel-root': {
        color: `${theme.color.lightGray}`
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.color.lightGray}`
    },
    '&:hover .MuiOutlinedInput-input': {
        color: `${theme.color.lightGray}`
    },
    '&:hover .MuiInputLabel-root': {
        color: `${theme.color.lightGray}`
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.color.lightGray}`
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
        color: `${theme.color.lightGray}`
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: `${theme.color.lightGray}`
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.color.lightGray}`
    },
    '& .MuiSelect-icon': {
        color: `${theme.color.lightGray}`
    }
});

export const StyledBox = styled(Box)({
    backgroundColor: `${theme.color.codGray}`,
    color: `${theme.color.white}`
});

export const stylesOverrides = {
    margin: '1% 0 0 80%',
    fontSize: '14px',
    color: `${theme.color.lightningYellow}`,
    textDecoration: 'underline',
    cursor: 'pointer',
    fontFamily: 'inter',
    paddingTop: '1rem',
    paddingBottom: '2rem'
};

export const StyledAutoComplete = styled(Autocomplete)({
    '& .MuiSvgIcon-root': {
        color: theme.color.white90
    },
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
    '& .MuiOutlinedInput-input': {
        color: theme.color.white70
    }
});

export const StylesTextInput = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.color.darkGray
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.color.darkGray
    }
});
