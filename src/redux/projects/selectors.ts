import { IProject } from 'src/types/projects';
import { RootState } from '../store';

export const rootSelector = (state: RootState) => state.projects;

export const getProjectDataFromState =
    (id: string | null) => (state: RootState) =>
        (id && rootSelector(state)?.data[id]) || null;

export const getProject = (id: string | null) => (state: RootState) =>
    (rootSelector(state)?.projects || []).find((x: IProject) => x.id === id);

export const getAllProjectsFromState = (state: RootState) =>
    rootSelector(state)?.projects || [];

export const getActivityStatFromState = (state: RootState) =>
    rootSelector(state)?.activityStat || [];

export const getWorkDurationFromState = (state: RootState) =>
    rootSelector(state)?.workDuration || {};

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getProjectsListFromState = (state: RootState) =>
    rootSelector(state)?.projectsList || [];

export const getSelectedProjectId = (state: RootState) =>
    rootSelector(state)?.selectedProjectId || null;
