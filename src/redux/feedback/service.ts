import { createAsyncThunk } from '@reduxjs/toolkit';
import { postFeedback as postFeedbackApi } from 'src/api/feedback';
import { PostFeedbackRequest } from 'src/types/feedback';

export const SLICE_NAME = 'feedback';

export const ACTION_TYPES = {
    CREATE_FEEDBACK: `${SLICE_NAME}/createFeedback`
};

export const postFeedback = createAsyncThunk(
    ACTION_TYPES.CREATE_FEEDBACK,
    async (
        { params }: { params: PostFeedbackRequest },
        { rejectWithValue }
    ) => {
        try {
            return await postFeedbackApi(params);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
