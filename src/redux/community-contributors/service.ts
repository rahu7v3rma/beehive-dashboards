import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCommunityContributors } from 'src/api/community-contributors';

export const SLICE_NAME = 'communityContributors';
export const ACTION_TYPES = {
    GET_ENTRIES: `${SLICE_NAME}/getCommunityContributors`
};

export const getAllCommunityContributors = createAsyncThunk(
    ACTION_TYPES.GET_ENTRIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getCommunityContributors();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const services = { getAllCommunityContributors };

export default services;
