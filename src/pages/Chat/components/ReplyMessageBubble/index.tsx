import { FC } from 'react';
import { MessageSchema } from 'src/types/chat';
import { useFindConversationMessage } from '../../hooks/useFindConversationMessage';
import { StyledReplyMessageBubble, StyledReplyMessageOwner } from './styled';

type Props = Pick<MessageSchema, 'conversationId'> & {
    sentByMe: boolean;
    replyMessageId: number;
};

const ReplyMessageBubble: FC<Props> = ({
    replyMessageId,
    sentByMe,
    conversationId
}) => {
    const message = useFindConversationMessage({
        conversationId,
        id: replyMessageId
    });

    if (!message) {
        return null;
    }

    return (
        <StyledReplyMessageBubble sentByMe={sentByMe}>
            <StyledReplyMessageOwner sentByMe={sentByMe}>
                My name {/*  TODO: replace this with actual name  */}
            </StyledReplyMessageOwner>
            {message.text}
        </StyledReplyMessageBubble>
    );
};

export default ReplyMessageBubble;
