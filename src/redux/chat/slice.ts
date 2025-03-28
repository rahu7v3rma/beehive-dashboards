import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME, fetchConversations } from './service';
import { ConversationInfoSchema } from 'src/types/chat';

const initialState: ConversationInfoSchema = {
    name: 'project name',
    isLoading: true,
    isOpen: false,
    entityId: '',
    id: 0,
    projectId: 0,
    messagesCache: {}
};

const ChatSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        openWindow: (state, action) => {
            state.isOpen = true;
            state.entityId = action.payload;
        },
        replyMessage: (state, action) => {
            state.replyMessage = action.payload;
        },
        resetReplyMessage: (state) => {
            state.replyMessage = undefined;
        },
        closeWindow: (state) => {
            state.isOpen = false;
            state.entityId = '';
        },
        setMessageCache: (state, action) => {
            const { key, value } = action.payload;
            state.messagesCache[key] = value;
        },
        addMessage: (state, action) => {
            if (state.messages) {
                state.messages = [...state.messages, action.payload];
            } else {
                state.messages = [action.payload];
            }
        },
        updateMessageStatus: (state, action) => {
            if (state.messages) {
                const messages = state.messages;
                const messageIdx = state.messages.findIndex(
                    (message) => message.id === action.payload.id
                );
                messages[messageIdx].isDeleted = true;
                state.messages = messages;
            }
        },
        trackUnreadMessages: () => {
            // todo
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversations.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchConversations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.messages = action.payload;
            })
            .addCase(fetchConversations.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                }
            });
    }
});

export const {
    openWindow,
    closeWindow,
    updateMessageStatus,
    addMessage,
    setMessageCache,
    replyMessage,
    resetReplyMessage
} = ChatSlice.actions;

export default ChatSlice.reducer;
