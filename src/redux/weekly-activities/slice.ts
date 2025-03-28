import { createSlice } from '@reduxjs/toolkit';
import { getAllActivities, getAllDailyActivities, SLICE_NAME } from './service';
import { WeeklyActivity, DailyActivity } from 'src/types/weeklyActivities';

interface initialTypes {
    data: WeeklyActivity[];
    dailyData: DailyActivity[];
    isLoading: boolean;
    error: string;
}

const initialState: initialTypes = {
    data: [],
    dailyData: [],
    isLoading: false,
    error: ''
};

export const WeeklyActivitySlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getAllActivities.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllActivities.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getAllActivities.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getAllDailyActivities.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllDailyActivities.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.dailyData = payload;
        },
        [getAllDailyActivities.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = WeeklyActivitySlice.actions;

export default WeeklyActivitySlice.reducer;
