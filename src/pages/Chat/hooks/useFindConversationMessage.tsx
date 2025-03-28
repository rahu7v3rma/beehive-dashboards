import { type MessageSchema } from 'src/types/chat';
import { useFilterMessages } from './useFilterMessages';
interface Props extends Pick<MessageSchema, 'conversationId' | 'id'> {}

export const useFindConversationMessage = ({
    id: messageId,
    conversationId
}: Props) => {
    const filteredMessages = useFilterMessages(conversationId);

    let message: MessageSchema;

    const messageIdx = filteredMessages.findIndex(({ id }) => {
        return id === messageId;
    });

    message = filteredMessages[messageIdx];

    return message;
};
