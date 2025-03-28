import { createSlice } from '@reduxjs/toolkit';
import { getBugs, SLICE_NAME } from './service';
import { Bug } from 'src/types/bugs';

interface initialTypes {
    bugs: Bug[] | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: initialTypes = {
    bugs: null,
    isLoading: false,
    error: null
};

export const BugSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getBugs.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getBugs.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.bugs = payload;
        },
        [getBugs.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = BugSlice.actions;

export default BugSlice.reducer;
