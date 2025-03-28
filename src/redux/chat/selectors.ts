import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ConversationInfoSchema } from 'src/types/chat';

export const rootSelector = (state: RootState) => state.chat;

export const selectEntityId = (state: RootState) =>
    rootSelector(state).entityId;

export const selectIsLoading = (state: RootState) =>
    rootSelector(state).isLoading;

export const selectMessages = (state: RootState) =>
    rootSelector(state).messages;

export const selectConverstationError = (state: RootState) =>
    rootSelector(state).error;

export const selectConversationName = (state: RootState) =>
    rootSelector(state).name;

export const selectMessagesCache = (state: RootState) =>
    rootSelector(state).messagesCache;

export const selectReplyMessage = (state: RootState) =>
    rootSelector(state).replyMessage;

export const useChatSelectors = (): ConversationInfoSchema => {
    const { name, isLoading, isOpen, entityId, id, projectId, messagesCache } =
        useSelector((state: RootState) => state.chat);

    return {
        name,
        isLoading,
        isOpen,
        entityId,
        id,
        projectId,
        messagesCache
    };
};
