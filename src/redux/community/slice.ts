import { createSlice } from '@reduxjs/toolkit';
import {
    getContributorsBreakdown,
    getSkillsBreakdown,
    SLICE_NAME
} from './service';
import { ISkillBreakdown } from 'src/types/community';

interface initialTypes {
    skillsBreakdown: ISkillBreakdown[];
    skillsLoading: boolean;
    contributorsBreakdown: ISkillBreakdown[];
    contributorsLoading: boolean;
    error: string;
}

const initialState: initialTypes = {
    skillsBreakdown: [],
    skillsLoading: false,
    contributorsBreakdown: [],
    contributorsLoading: false,
    error: ''
};

export const CommunitySlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getSkillsBreakdown.pending.type]: (state) => {
            state.skillsLoading = true;
        },
        [getSkillsBreakdown.fulfilled.type]: (state, { payload }) => {
            state.skillsLoading = false;
            state.skillsBreakdown = payload.breakdown;
        },
        [getSkillsBreakdown.rejected.type]: (state, action) => {
            state.skillsLoading = false;
            state.error = action.payload;
        },
        [getContributorsBreakdown.pending.type]: (state) => {
            state.contributorsLoading = true;
        },
        [getContributorsBreakdown.fulfilled.type]: (state, { payload }) => {
            state.contributorsLoading = false;
            state.contributorsBreakdown = payload.breakdown;
        },
        [getContributorsBreakdown.rejected.type]: (state, action) => {
            state.contributorsLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = CommunitySlice.actions;

export default CommunitySlice.reducer;
