import { RootState } from '../store';

export const rootSelector = (state: RootState) => state.quests;

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getError = (state: RootState) => rootSelector(state)?.error;

export const getQuest = (state: RootState) => rootSelector(state)?.quest;

export const getQuestSolution = (state: RootState) =>
    rootSelector(state)?.questSolution;
