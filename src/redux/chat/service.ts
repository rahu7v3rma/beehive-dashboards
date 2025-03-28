import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMessagesMock } from 'src/api/chat';

const SLICE_NAME = 'chat';

const ACTION_TYPES = {
    OPEN_CHAT_WINDOW: `${SLICE_NAME}/openWindow`,
    CLOSE_CHAT_WINDOW: `${SLICE_NAME}/closeWindow`,
    FETCH_CONVERSATIONS: `${SLICE_NAME}/fetchConversations`,
    GET_MESSAGE: `${SLICE_NAME}/getMessage`,
    SEND_MESSAGE: `${SLICE_NAME}/sendMessage`,
    SET_MESSAGE_CACHE: `${SLICE_NAME}/setMessageCache`,
    UPDATE_MESSAGE_STATUS: `${SLICE_NAME}/updateMessageStatus`,
    REPLY_MESSAGE: `${SLICE_NAME}/replyMessage`,
    RESET_REPLY_MESSAGE: `${SLICE_NAME}/resetReplyMessage`
};
const fetchConversations = createAsyncThunk(
    ACTION_TYPES.FETCH_CONVERSATIONS,
    async (_, { rejectWithValue }) => {
        try {
            const response = await getMessagesMock();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export { SLICE_NAME, ACTION_TYPES, fetchConversations };
