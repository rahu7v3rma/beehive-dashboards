import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from './service';

interface initialTypes {
    isLoading: boolean;
    error: string | null;
}

const initialState: initialTypes = {
    isLoading: false,
    error: null
};

export const RatingSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = null;
        }
    }
});

export const { resetError } = RatingSlice.actions;

export default RatingSlice.reducer;
