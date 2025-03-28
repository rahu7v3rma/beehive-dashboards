import { MessageSchema } from 'src/types/chat';
import MessageCreatedAt from '../../MessageCreatedAt';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg';
import {
    StyledMessageBubble,
    StyledMessageText,
    StyledReplyingBubble,
    StyledReplyingMessageContainer,
    StyledIconButtonContainer
} from './styled';
import { FC } from 'react';
import ReplyMessageBubble from '../../ReplyMessageBubble';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetReplyMessage } from 'src/redux/chat/slice';

const MessageText: FC<MessageSchema> = ({ text }) => {
    return <StyledMessageText>{text}</StyledMessageText>;
};

interface Props {
    message: MessageSchema;
    sentByMe: boolean;
    replying?: boolean;
    setShowMessageMenu?: (showMenu: boolean) => void;
}

export function MessageBubbleContent({
    message,
    sentByMe,
    replying,
    setShowMessageMenu
}: Props) {
    const { replyMessageId, conversationId } = message;
    const dispatch = useDispatch();

    const onMouseLeave = () => {
        setTimeout(() => {
            setShowMessageMenu?.(false);
            // Because mouse user might want to move to menu for deleting the message
        }, 2000);
    };

    const onRemoveReplyingMessage = () => {
        dispatch(resetReplyMessage());
    };

    if (replying) {
        return (
            <StyledReplyingMessageContainer>
                <StyledReplyingBubble>
                    {message.text}
                    <StyledIconButtonContainer>
                        <IconButton
                            aria-label="close"
                            onClick={onRemoveReplyingMessage}
                        >
                            <CloseIcon />
                        </IconButton>
                    </StyledIconButtonContainer>
                </StyledReplyingBubble>
            </StyledReplyingMessageContainer>
        );
    }

    return (
        <StyledMessageBubble
            onMouseEnter={() => setShowMessageMenu?.(true)}
            onMouseLeave={onMouseLeave}
            containsReply={!!replyMessageId}
            sentByMe={sentByMe}
        >
            {replyMessageId && (
                <ReplyMessageBubble
                    sentByMe={sentByMe}
                    conversationId={conversationId}
                    replyMessageId={replyMessageId}
                />
            )}

            <MessageText {...message} />

            <MessageCreatedAt createdAt={message.timestampEpochMs} />
        </StyledMessageBubble>
    );
}
