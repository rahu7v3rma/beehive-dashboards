import { createSlice } from '@reduxjs/toolkit';
import {
    createTaskTemplate,
    fetchTemplates,
    getAllRepositories,
    getAllSkills,
    getDescriptionAnalysis,
    removeTaskTemplate,
    selectRepoId,
    SLICE_NAME,
    updateTaskTemplate,
    delegate,
    queryShortLongModel,
    generateTaskContext,
    calculateTaskTimeEstimation
} from './service';
import {
    Repository,
    TaskAnalysisRequestParams,
    TaskTemplate
} from 'src/types/delegate';

interface initialTypes {
    lastAnalysisRequest: TaskAnalysisRequestParams | null;
    lastAnalysisResponse: string[] | null;
    repositories: Repository[] | null;
    availableSkills: string[];
    templates: TaskTemplate[];
    isLoading: boolean;
    loadingDescription: string | null;
    error: string | null;
    selectedRepoId: number | null;
    taskTimeEstimation: number | null;
}

const initialState: initialTypes = {
    lastAnalysisRequest: null,
    lastAnalysisResponse: null,
    templates: [],
    repositories: null,
    availableSkills: [],
    isLoading: false,
    loadingDescription: null,
    error: null,
    selectedRepoId: null,
    taskTimeEstimation: null
};

export const ProjectsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getDescriptionAnalysis.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Working on a feedback';
        },
        [getDescriptionAnalysis.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.lastAnalysisResponse = payload.output?.feedback;
        },
        [getDescriptionAnalysis.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [getAllRepositories.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Loading repositories';
        },
        [getAllRepositories.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.repositories = payload.repositories;
        },
        [getAllRepositories.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [getAllSkills.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Loading Skills';
        },
        [getAllSkills.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.availableSkills = payload.availableSkills;
        },
        [getAllSkills.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [fetchTemplates.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Loading templeates';
        },
        [fetchTemplates.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.templates = payload;
        },
        [fetchTemplates.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [selectRepoId.pending.type]: (state) => {
            state.isLoading = true;
        },
        [selectRepoId.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.selectedRepoId = payload;
        },
        [selectRepoId.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [createTaskTemplate.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Saving the template';
        },
        [createTaskTemplate.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.templates = [...state.templates, payload];
        },
        [createTaskTemplate.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [updateTaskTemplate.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Updating the template';
        },
        [updateTaskTemplate.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.templates = {
                ...state.templates.map((t) =>
                    t.id === payload.id ? payload : t
                )
            };
        },
        [updateTaskTemplate.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [removeTaskTemplate.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Deleting the template';
        },
        [removeTaskTemplate.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.templates = state.templates.filter(
                (t) => t.id !== payload.templateId
            );
        },
        [removeTaskTemplate.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [delegate.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Delegating';
        },
        [delegate.fulfilled.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        },
        [delegate.rejected.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        },
        [queryShortLongModel.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Coming up with an initial description';
        },
        [queryShortLongModel.fulfilled.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        },
        [queryShortLongModel.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        },
        [generateTaskContext.pending.type]: (state) => {
            state.loadingDescription = 'Generating the task context items';
            state.isLoading = true;
        },
        [generateTaskContext.fulfilled.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        },
        [generateTaskContext.rejected.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        },
        [calculateTaskTimeEstimation.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription =
                'Estimating work time on this task description and skills';
        },
        [calculateTaskTimeEstimation.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.taskTimeEstimation = payload;
            state.loadingDescription = null;
        },
        [calculateTaskTimeEstimation.rejected.type]: (state) => {
            state.isLoading = false;
            state.loadingDescription = null;
        }
    }
});

export const {} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
