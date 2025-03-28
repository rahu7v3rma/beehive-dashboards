import { RootState } from '../store';

export const rootSelector = (state: RootState) => state.feedback;

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getError = (state: RootState) => rootSelector(state)?.error;
