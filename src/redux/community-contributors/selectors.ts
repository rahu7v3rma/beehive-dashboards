import { RootState } from '../store';

const rootSelector = (state: RootState) => state.communityContributors;

export const getAllCommunityContributorsFromState = (state: RootState) =>
    rootSelector(state)?.data || [];

export const getIsCommunityContributorsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;
