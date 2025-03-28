import { createSlice } from '@reduxjs/toolkit';
import {
    fetchProjectRepositories,
    fetchProjectQuests,
    fetchProjectWorkTimeReview,
    selectProject,
    SLICE_NAME
} from './service';
import { IProjectBudgetReview } from 'src/types/projects';
import { ClientQuest, Repository } from 'src/types/client';
import { QUESTS_INITIAL_ROWS_PER_PAGE } from 'src/constants/quest';

export interface ClientTypes {
    selectedProjectId: string | null;
    isLoading: boolean;
    repositories: Repository[] | null;
    quests: ClientQuest[] | null;
    totalQuests: number | null;
    workTimeReview: IProjectBudgetReview[] | null;
    questsRowsPerPage: number;
    questsSearchQuery: string;
    questsStatusFilter: string[];
}

const initialState: ClientTypes = {
    selectedProjectId: null,
    isLoading: false,
    repositories: null,
    quests: null,
    totalQuests: null,
    workTimeReview: null,
    questsRowsPerPage: QUESTS_INITIAL_ROWS_PER_PAGE,
    questsSearchQuery: '',
    questsStatusFilter: []
};

export const ProjectsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setQuestsRowsPerPage: (state, action) => {
            state.questsRowsPerPage = action.payload;
        },
        setQuestsSearchQuery: (state, action) => {
            state.questsSearchQuery = action.payload;
        },
        setQuestsStatusFilter: (state, action) => {
            state.questsStatusFilter = action.payload;
        }
    },

    extraReducers: {
        [selectProject.fulfilled.type]: (state, { payload }) => {
            state.selectedProjectId = payload;
        },
        [fetchProjectRepositories.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchProjectRepositories.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.repositories = payload;
        },
        [fetchProjectRepositories.rejected.type]: (state) => {
            state.isLoading = false;
        },
        [fetchProjectQuests.fulfilled.type]: (state, action) => {
            state.totalQuests = action.payload?.totalCount || 0;
            if (action.meta.arg.page === 0) {
                state.quests = action.payload?.quests || [];
            } else {
                state.quests = [
                    ...(state.quests || []),
                    ...(action.payload?.quests || [])
                ];
            }
        },
        [fetchProjectWorkTimeReview.fulfilled.type]: (state, { payload }) => {
            state.workTimeReview = payload;
        }
    }
});

export const {
    setQuestsRowsPerPage,
    setQuestsSearchQuery,
    setQuestsStatusFilter
} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
