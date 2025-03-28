import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchConstributorsBreakdown,
    fetchSkillsBreakdown
} from 'src/api/community';

export const SLICE_NAME = 'community';
export const ACTION_TYPES = {
    GET_SKILLS_BREAKDOWN: `${SLICE_NAME}/getCommunitySkillsBreakdown`,
    GET_CONSTRIBUTORS_BREAKDOWN: `${SLICE_NAME}/getCommunityContributorsBreakdown`
};

export const getSkillsBreakdown = createAsyncThunk(
    ACTION_TYPES.GET_SKILLS_BREAKDOWN,
    async (params, { rejectWithValue }) => {
        try {
            const response = await fetchSkillsBreakdown();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getContributorsBreakdown = createAsyncThunk(
    ACTION_TYPES.GET_CONSTRIBUTORS_BREAKDOWN,
    async (params, { rejectWithValue }) => {
        try {
            const response = await fetchConstributorsBreakdown();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const services = { getSkillsBreakdown, getContributorsBreakdown };

export default services;
