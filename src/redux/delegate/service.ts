import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getRepositories,
    getTaskDescriptionAnalysis,
    getTemplates,
    postTaskTemplate,
    getSKills,
    putTaskTemplate,
    deleteTaskTemplate,
    postDelegateTask,
    getTaskDescriptionGenerator,
    getTaskContextGenerator,
    getTaskTimeEstimation,
    postDelegateQuest
} from 'src/api/apiCaller';
import {
    TaskAnalysisRequestParams,
    Repository,
    TaskTemplate,
    DelegateTaskRequest,
    TaskLongShortGeneratorParams,
    TaskContextGeneratorParams,
    TaskTimeEstimationParams,
    DelegateQuestRequest
} from 'src/types/delegate';

export const SLICE_NAME = 'delegate';

export const ACTION_TYPES = {
    GET_DESCRIPTION_ANALYSIS: `${SLICE_NAME}/getDescriptionAnalysis`,
    QUERY_SHORT_LONG_MODEL: `${SLICE_NAME}/queryShortLongModel`,
    GENERATE_TASK_CONTEXT: `${SLICE_NAME}/generateTaskContext`,
    CALCULATE_TASK_TIME_ESTIMATION: `${SLICE_NAME}/calculateTaskTimeEstimation`,
    GET_ALL_REPOSITORIES: `${SLICE_NAME}/getAllRepositories`,
    GET_ALL_SKILLS: `${SLICE_NAME}/getAllSkills`,
    GET_TEMPLATES: `${SLICE_NAME}/getTemplates`,
    SELECT_REPO_ID: `${SLICE_NAME}/selectRepoId`,
    CREATE_TEMPLATE: `${SLICE_NAME}/createTemplate`,
    UPDATE_TEMPLATE: `${SLICE_NAME}/updateTemplate`,
    DELETE_TEMPLATE: `${SLICE_NAME}/deleteTemplate`,
    DELEGATE_TASK: `${SLICE_NAME}/delegate/task`,
    DELEGATE_QUEST: `${SLICE_NAME}/delegate/quest`
};

export const createTaskTemplate = createAsyncThunk(
    ACTION_TYPES.CREATE_TEMPLATE,
    async (options: TaskTemplate, { rejectWithValue }) => {
        try {
            const response = await postTaskTemplate(options);
            return response as TaskTemplate;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateTaskTemplate = createAsyncThunk(
    ACTION_TYPES.UPDATE_TEMPLATE,
    async (options: TaskTemplate, { rejectWithValue }) => {
        try {
            await putTaskTemplate(options);
            return options;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const removeTaskTemplate = createAsyncThunk(
    ACTION_TYPES.DELETE_TEMPLATE,
    async (options: TaskTemplate, { rejectWithValue }) => {
        try {
            await deleteTaskTemplate(options);
            return {
                repositoryId: options.repositoryId,
                templateId: options.id
            };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getAllRepositories = createAsyncThunk(
    ACTION_TYPES.GET_ALL_REPOSITORIES,
    async (_params, { rejectWithValue }) => {
        try {
            const response = await getRepositories();
            var repositories: Repository[] | null = null;
            if (response.repositories) {
                repositories = response.repositories as Repository[];
            } else {
                console.log('error');
                alert('failed to fetch repositories');
            }
            return { repositories };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
export const getAllSkills = createAsyncThunk(
    ACTION_TYPES.GET_ALL_SKILLS,
    async (_params, { rejectWithValue }) => {
        try {
            const response = await getSKills();
            var availableSkills: string[] = [];
            if (response.data) {
                const skills = response.data as { id: number; name: string }[];
                availableSkills = skills.map((s) => s.name);
            } else {
                console.log('error');
                alert('failed to fetch skills');
            }
            return { availableSkills };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getDescriptionAnalysis = createAsyncThunk(
    ACTION_TYPES.GET_DESCRIPTION_ANALYSIS,
    async (options: TaskAnalysisRequestParams, { rejectWithValue }) => {
        try {
            const response = await getTaskDescriptionAnalysis(options);
            if (response['status'] === 'ok') {
                return response.data;
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const fetchTemplates = createAsyncThunk(
    ACTION_TYPES.GET_TEMPLATES,
    async (_, { rejectWithValue }) => {
        try {
            const response = await getTemplates();
            var templates: TaskTemplate[] | null = null;
            if (response.templates) {
                templates = response.templates as TaskTemplate[];
                return templates;
            } else {
                console.log('error');
                alert('failed to fetch repo templates');
                rejectWithValue('failed to fetch repo templates');
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const selectRepoId = createAsyncThunk(
    ACTION_TYPES.SELECT_REPO_ID,
    async (id: number, { rejectWithValue }) => {
        try {
            return id;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const delegate = createAsyncThunk(
    ACTION_TYPES.DELEGATE_TASK,
    async (options: DelegateTaskRequest, { rejectWithValue }) => {
        try {
            const response = await postDelegateTask(options);
            if (response['status'] === 'ok') {
                return response['data']['id'];
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const delegateQuest = createAsyncThunk(
    ACTION_TYPES.DELEGATE_QUEST,
    async (options: DelegateQuestRequest, { rejectWithValue }) => {
        try {
            const response = await postDelegateQuest(options);
            if (response['status'] === 'ok') {
                return response['data']['id'];
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const queryShortLongModel = createAsyncThunk(
    ACTION_TYPES.QUERY_SHORT_LONG_MODEL,
    async (options: TaskLongShortGeneratorParams, { rejectWithValue }) => {
        try {
            const response = await getTaskDescriptionGenerator(options);
            if (response['status'] === 'ok') {
                return response['data']['output'];
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const generateTaskContext = createAsyncThunk(
    ACTION_TYPES.GENERATE_TASK_CONTEXT,
    async (options: TaskContextGeneratorParams, { rejectWithValue }) => {
        try {
            const response = await getTaskContextGenerator(options);
            if (response['status'] === 'ok') {
                return response['data']['output']['context'].map(
                    (dto: { [x: string]: any }) => ({
                        file: dto['File'],
                        entity: dto['Entity'],
                        potentialUse: dto['Potential Use']
                    })
                );
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const calculateTaskTimeEstimation = createAsyncThunk(
    ACTION_TYPES.CALCULATE_TASK_TIME_ESTIMATION,
    async (options: TaskTimeEstimationParams, { rejectWithValue }) => {
        try {
            const response = await getTaskTimeEstimation(options);
            if (response['status'] === 'ok') {
                return response['data']['output']['estimated_hours'];
            }
            return null;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
