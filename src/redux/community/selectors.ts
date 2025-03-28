import { RootState } from '../store';

const rootSelector = (state: RootState) => state.community;

export const getSkillsBreakdownFromState = (state: RootState) =>
    rootSelector(state)?.skillsBreakdown || [];

export const getContributorsBreakdownFromState = (state: RootState) =>
    rootSelector(state)?.contributorsBreakdown || [];
