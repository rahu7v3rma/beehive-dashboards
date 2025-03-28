import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    postRequestModifications as postRequestModificationsApi,
    postRequestApprove as postRequestApproveApi,
    getQuest as getQuestApi,
    getQuestSolution as getQuestSolutionApi,
    getQuestActivities as getQuestActivitiesApi
} from 'src/api/quests';
import {
    RequestModificationsRequest,
    RequestApproveRequest,
    QuestActivity
} from 'src/types/quests';

export const SLICE_NAME = 'quests';

export const ACTION_TYPES = {
    POST_REQUEST_MODIFICATIONS: `${SLICE_NAME}/requestModifications`,
    POST_REQUEST_APPROVE: `${SLICE_NAME}/requestApprove`,
    GET_QUEST: `${SLICE_NAME}/getQuest`,
    GET_QUEST_SOLUTION: `${SLICE_NAME}/getQuestSolution`,
    GET_QUEST_ACTIVITIES: `${SLICE_NAME}/getQuestActivities`
};

export const postRequestModifications = createAsyncThunk(
    ACTION_TYPES.POST_REQUEST_MODIFICATIONS,
    async (
        {
            questId,
            params
        }: { questId: string; params: RequestModificationsRequest },
        { rejectWithValue }
    ) => {
        try {
            return await postRequestModificationsApi(questId, params);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const postRequestApprove = createAsyncThunk(
    ACTION_TYPES.POST_REQUEST_MODIFICATIONS,
    async (
        { questId, params }: { questId: string; params: RequestApproveRequest },
        { rejectWithValue }
    ) => {
        try {
            return await postRequestApproveApi(questId, params);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getQuest = createAsyncThunk(
    ACTION_TYPES.GET_QUEST,
    async ({ questId }: { questId: string }, { rejectWithValue }) => {
        try {
            return await getQuestApi(questId);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getQuestSolution = createAsyncThunk(
    ACTION_TYPES.GET_QUEST_SOLUTION,
    async ({ questId }: { questId: string }, { rejectWithValue }) => {
        try {
            return await getQuestSolutionApi(questId);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getQuestActivities = createAsyncThunk<
    QuestActivity[],
    { questId: string }
>(
    ACTION_TYPES.GET_QUEST_ACTIVITIES,
    async ({ questId }, { rejectWithValue }) => {
        try {
            return await getQuestActivitiesApi(questId);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
