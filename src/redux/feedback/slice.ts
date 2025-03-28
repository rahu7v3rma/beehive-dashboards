import { createSlice } from '@reduxjs/toolkit';
import { postFeedback, SLICE_NAME } from './service';

interface initialTypes {
    isLoading: boolean;
    error: string | null;
}

const initialState: initialTypes = {
    isLoading: false,
    error: null
};

export const FeedbackSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [postFeedback.pending.type]: (state) => {
            state.isLoading = true;
        },
        [postFeedback.fulfilled.type]: (state) => {
            state.isLoading = false;
        },
        [postFeedback.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = FeedbackSlice.actions;

export default FeedbackSlice.reducer;
