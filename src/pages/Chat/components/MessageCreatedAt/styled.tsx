import { styled } from '@mui/system';
import theme from 'src/theme';

export const StyledMessageCreatedAt = styled('time')({
    color: theme.color.white30,
    display: 'flex',
    justifyContent: 'right',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0'
});
