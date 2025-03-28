import { RootState } from '../store';

export const rootSelector = (state: RootState) => state.rating;

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getError = (state: RootState) => rootSelector(state)?.error;
