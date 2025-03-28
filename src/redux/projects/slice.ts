import { createSlice } from '@reduxjs/toolkit';
import {
    getAllProjects,
    // getActivityStat,
    getProjectData,
    SLICE_NAME
} from './service';
import { IProject, IProjectData, IProjectsList } from 'src/types/projects';
import { IWorkDuration } from 'src/types/workDuration';
import { IBudget } from 'src/types/budget';
import { WORK_DURATION } from 'src/constants/workDuration';

interface initialTypes {
    projects: IProject[];
    isLoading: boolean;
    data: { [id: string]: IProjectData };
    isDataLoading: boolean;
    error: string;
    workDuration: IWorkDuration;
    projectBudget: IBudget;
    projectsList: IProjectsList[];
}

const initialState: initialTypes = {
    projects: [],
    data: {},
    isLoading: false,
    isDataLoading: false,
    error: '',
    workDuration: WORK_DURATION,
    projectBudget: {},
    projectsList: []
};

export const ProjectsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getAllProjects.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllProjects.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.projects = payload.projects;
        },
        [getAllProjects.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getProjectData.pending.type]: (state) => {
            state.isDataLoading = true;
        },
        [getProjectData.fulfilled.type]: (state, { payload }) => {
            state.isDataLoading = false;
            state.data = { ...state.data, [payload.id]: payload };
        },
        [getProjectData.rejected.type]: (state, action) => {
            state.isDataLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
