import { styled } from '@mui/system';
import theme from 'src/theme';

type StyledMessageBubbleProps = {
    containsReply: boolean;
    sentByMe?: boolean;
    replying?: boolean;
};

export const StyledMessageText = styled('p')({
    color: theme.color.white80,
    marginBottom: '10px'
});

export const StyledMessageBubble = styled('div')(
    ({ containsReply, sentByMe }: StyledMessageBubbleProps) => ({
        padding: containsReply ? '10px' : '15px',
        borderTopLeftRadius: sentByMe ? '20px' : 0,
        borderTopRightRadius: sentByMe ? 0 : '20px',
        borderBottomRightRadius: '20px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '45px',
        borderBottomLeftRadius: '20px',
        overflowWrap: 'break-word',
        backgroundColor: theme.color.raisinBlack
    })
);

export const StyledReplyingBubble = styled('div')({
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '100%',
    maxHeight: '150px',
    overflowWrap: 'break-word'
});

export const StyledReplyingMessageContainer = styled('div')({
    color: theme.color.white80,
    position: 'absolute',
    boxSizing: 'border-box',
    transform: 'translateY(-120%)',
    minWidth: '100px',
    maxWidth: '50%',
    padding: '15px',
    borderRadius: '20px',
    backgroundColor: theme.color.raisinBlack
});

export const StyledIconButtonContainer = styled('div')({
    position: 'absolute',
    right: '0',
    top: '0',
    transform: 'translateY(-100%)'
});
