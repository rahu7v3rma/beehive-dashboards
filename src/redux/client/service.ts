import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getClientProjectQuests,
    getClientProjectWorkTimeReivew,
    getProjectRepositories
} from 'src/api/apiCaller';
import { ClientTypes } from './slice';
import { IProjectBudgetReview } from 'src/types/projects';

export const SLICE_NAME = 'projects';

export const ACTION_TYPES = {
    SELECT_PROJECT: `${SLICE_NAME}/selectProject`,
    FETCH_PROJECT_REPOSITORIES: `${SLICE_NAME}/fetchProjectRepositories`,
    FETCH_PROJECT_QUESTS: `${SLICE_NAME}/fetchProjectQuests`,
    FETCH_PROJECT_WORK_TIME_REVIEW: `${SLICE_NAME}/fetchProjectWorkTimeReview`
};

export const selectProject = createAsyncThunk(
    ACTION_TYPES.SELECT_PROJECT,
    async (id: string, { rejectWithValue }) => {
        try {
            return id;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const fetchProjectRepositories = createAsyncThunk(
    ACTION_TYPES.FETCH_PROJECT_REPOSITORIES,
    async (project_id: string, { rejectWithValue }) => {
        try {
            if (!project_id) {
                return;
            }
            const response = await getProjectRepositories(project_id);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const fetchProjectQuests = createAsyncThunk(
    ACTION_TYPES.FETCH_PROJECT_QUESTS,
    async (
        options: {
            page: number;
            resultsPerPage: number;
            q?: string;
            statusFilters?: string[];
        },
        { getState, rejectWithValue }
    ) => {
        try {
            const { client } = getState() as { client: ClientTypes };
            if (!client.selectedProjectId) {
                return;
            }
            const response = await getClientProjectQuests(
                client.selectedProjectId,
                options.page + 1,
                options.resultsPerPage,
                options.q,
                options.statusFilters
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const fetchProjectWorkTimeReview = createAsyncThunk(
    ACTION_TYPES.FETCH_PROJECT_WORK_TIME_REVIEW,
    async (_, { getState, rejectWithValue }) => {
        try {
            const { client } = getState() as { client: ClientTypes };
            if (!client.selectedProjectId) {
                return;
            }
            const response = await getClientProjectWorkTimeReivew(
                client.selectedProjectId as string
            );
            const budgetReviews: IProjectBudgetReview[] = response.budgetReviews
                .sort((a: IProjectBudgetReview, b: IProjectBudgetReview) =>
                    Number(a.date.replace('-', '')) >
                    Number(b.date.replace('-', ''))
                        ? 1
                        : -1
                )
                .reverse()
                .slice(0, 6);

            return budgetReviews;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
