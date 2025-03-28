import { styled, Theme } from '@mui/system';
import theme from 'src/theme';

type StyledReply = {
    theme?: Theme;
    sentByMe: boolean;
};

export const StyledReplyMessageBubble = styled('div')(
    ({ sentByMe }: StyledReply) => ({
        backgroundColor: theme.color.grayBlue,
        borderTopLeftRadius: sentByMe ? '16px' : 0,
        borderTopRightRadius: sentByMe ? 0 : '16px',
        borderBottomRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        padding: '10px 15px 15px',
        fontSize: '14px',
        lineHeight: '22px',
        letterSpacing: '0',
        color: theme.color.midGray
    })
);

export const StyledReplyMessageOwner = styled('span')(
    ({ sentByMe }: StyledReply) => ({
        color: sentByMe ? theme.color.white90 : theme.color.yellow80,
        display: 'block',
        fontSize: '13px',
        lineHeight: '20px',
        letterSpacing: '0px',
        fontWeight: 700
    })
);
