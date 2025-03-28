import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchProjects,
    fetchActivityStats,
    fetchProjectQueue,
    fetchProjectActivity,
    fetchProjectContributors,
    fetchProjectDelayedTasks,
    fetchProjectBudgetReview
} from 'src/api/projects';
import {
    IProjectActivity,
    IProjectBudgetReview,
    IProjectContributor,
    IProjectData,
    IProjectDelayedTask,
    IProjectQueue
} from 'src/types/projects';
import { IActivityRange } from 'src/constants/activityStat';

export const SLICE_NAME = 'projects';

export const ACTION_TYPES = {
    GET_ENTRIES: `${SLICE_NAME}/getProjects`,
    GET_PROJECT_DATA: `${SLICE_NAME}/getProjectData`,
    GET_ACTIVITY_STAT: `${SLICE_NAME}/getActivityStats`
};

export const getAllProjects = createAsyncThunk(
    ACTION_TYPES.GET_ENTRIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await fetchProjects();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getProjectData = createAsyncThunk(
    ACTION_TYPES.GET_PROJECT_DATA,
    async (options: { id: string }, { rejectWithValue }) => {
        try {
            const fetches = [
                fetchProjectQueue(options.id),
                fetchProjectActivity(options.id),
                fetchProjectContributors(options.id),
                fetchProjectDelayedTasks(options.id),
                fetchProjectBudgetReview(options.id)
            ];
            const [
                queueResponse,
                activityResponse,
                contributorsResponse,
                delayedTasksResponse,
                budgetReviewResponse
            ] = await Promise.allSettled(fetches);
            var queue: IProjectQueue = {
                pending: 0,
                inReview: 0,
                inProgress: 0,
                inProgressTrelloLinks: [],
                inReviewTrelloLinks: [],
                pendingTrelloLinks: []
            };
            if (queueResponse.status === 'fulfilled') {
                queue = queueResponse.value as IProjectQueue;
            } else {
                console.log('error');
                alert('failed to fetch project queue');
            }
            var activities: IProjectActivity[] = [];
            if (activityResponse.status === 'fulfilled') {
                const res = activityResponse.value as unknown as {
                    activities: IProjectActivity[];
                };
                activities = res.activities
                    .filter(
                        (x) =>
                            x.tasksDelegated > 0 ||
                            x.tasksCompleted > 0 ||
                            x.workItemsSolved > 0 ||
                            x.workItemsReviewed > 0
                    )
                    .slice(0, 10)
                    .reverse();
            } else {
                console.log('error');
            }
            var contributors: IProjectContributor[] = [];
            if (contributorsResponse.status === 'fulfilled') {
                const res = contributorsResponse.value as unknown as {
                    contributors: IProjectContributor[];
                };
                contributors = res.contributors.sort((a, b) =>
                    a.lastEngagement < b.lastEngagement ? 1 : -1
                );
            } else {
                console.log('error');
            }

            var delayedTasks: IProjectDelayedTask[] = [];
            if (delayedTasksResponse.status === 'fulfilled') {
                const res = delayedTasksResponse.value as unknown as {
                    delayedTasks: IProjectDelayedTask[];
                };
                delayedTasks = res.delayedTasks;
            } else {
                console.log('error');
            }

            var budgetReviews: IProjectBudgetReview[] = [];
            if (budgetReviewResponse.status === 'fulfilled') {
                const res = budgetReviewResponse.value as unknown as {
                    budgetReviews: IProjectBudgetReview[];
                };
                budgetReviews = res.budgetReviews
                    .sort((a, b) =>
                        Number(a.date.replace('-', '')) >
                        Number(b.date.replace('-', ''))
                            ? 1
                            : -1
                    )
                    .reverse()
                    .slice(0, 6);
            } else {
                console.log('error');
            }

            return {
                id: options.id,
                queue,
                activities,
                contributors,
                delayedTasks,
                budgetReviews
            } as unknown as IProjectData;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getActivityStat = createAsyncThunk(
    ACTION_TYPES.GET_ACTIVITY_STAT,
    async (params: IActivityRange, { rejectWithValue }) => {
        try {
            const response = await fetchActivityStats(params);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
