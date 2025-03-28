import { Box, styled } from '@mui/system';
import theme from 'src/theme';

export const StyledMessageOwnerTitle = styled('p')(
    ({ sentByMe }: { sentByMe: boolean }) => ({
        color: sentByMe ? theme.color.white90 : theme.color.yellow,
        fontSize: '13px',
        fontWeight: '700',
        letterSpacing: '0'
    })
);

export const StyledMessageBubbleContainer = styled('div')(
    ({ sentByMe }: { sentByMe: boolean }) => ({
        display: 'flex',
        justifyContent: sentByMe ? 'end' : 'start'
    })
);

export const StyledBox = styled(Box)({
    width: '300px'
});

export const StyledMenuWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});
