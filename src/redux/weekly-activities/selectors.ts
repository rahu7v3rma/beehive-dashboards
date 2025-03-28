import { RootState } from '../store';

const rootSelector = (state: RootState) => state.weeklyActivities;

export const getAllActivitiesFromState = (state: RootState) =>
    rootSelector(state)?.data || [];

export const getAllDailyActivitiesFromState = (state: RootState) =>
    rootSelector(state)?.dailyData || [];

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;
