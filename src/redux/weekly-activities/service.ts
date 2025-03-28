import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getWeeklyActivities,
    getDailyActivities
} from '../../api/weeklyActivities';

export const SLICE_NAME = 'weeklyActivities';

export const ACTION_TYPES = {
    GET_ACTIVITIES: `${SLICE_NAME}/getWeeklyActivities`,
    GET_DAILY_ACTIVITIES: `${SLICE_NAME}/getDailyActivities`
};

export const getAllActivities = createAsyncThunk(
    ACTION_TYPES.GET_ACTIVITIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getWeeklyActivities();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getAllDailyActivities = createAsyncThunk(
    ACTION_TYPES.GET_DAILY_ACTIVITIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getDailyActivities();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
const services = { getAllActivities, getAllDailyActivities };

export default services;
