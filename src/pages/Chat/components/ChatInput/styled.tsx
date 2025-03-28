import { Box, styled } from '@mui/system';
import theme from 'src/theme';

export const StyledInputWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center'
});

export const StyledChatInput = styled('input')({
    background: 'none',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    lineHeight: '22px',
    marginRight: '10px',
    width: '100%',
    color: theme.color.white90
});

export const StyledEmojiPicker = styled('div')({
    marginRight: '15px'
});
