import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/redux/chat/selectors';
import { ConversationSchema, MessageSchema } from 'src/types/chat';

export const useFilterMessages = (conversationId: ConversationSchema['id']) => {
    const messages: MessageSchema[] = useSelector(selectMessages);
    const filteredMessages = useMemo(
        () =>
            messages?.filter(
                (message) =>
                    !message.isDeleted &&
                    message.conversationId === conversationId
            ),
        [messages, conversationId]
    );
    return filteredMessages;
};
