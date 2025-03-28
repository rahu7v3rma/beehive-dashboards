import { RootState } from '../store';

export const rootSelector = (state: RootState) => state.contributors;

export const getAllContributorsFromState = (state: RootState) =>
    rootSelector(state)?.data || [];

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getAllContributorsWorkHistoryFromState = (state: RootState) =>
    rootSelector(state)?.workHistory || [];

export const getContributor = (state: RootState) =>
    rootSelector(state)?.contributer || {};

export const getAllAdminNotesFromState = (state: RootState) =>
    rootSelector(state)?.adminNotes || [];

export const getIsAdminNotesLoading = (state: RootState) =>
    rootSelector(state)?.isAdminNotesLoading;
