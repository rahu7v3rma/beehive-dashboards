import { createSlice } from '@reduxjs/toolkit';
import { getAllCommunityContributors, SLICE_NAME } from './service';
import { IContributor } from '../../types/contributors';

interface initialTypes {
    data: IContributor[];
    isLoading: boolean;
    error: string;
}

const initialState: initialTypes = {
    data: [],
    isLoading: false,
    error: ''
};

export const ContributorsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getAllCommunityContributors.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllCommunityContributors.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getAllCommunityContributors.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = ContributorsSlice.actions;

export default ContributorsSlice.reducer;
