import { createSlice } from '@reduxjs/toolkit';
import {
    AdminNotesType,
    IContributor,
    IWorkHistory
} from '../../types/contributors';
import {
    getAllAdminNotes,
    getAllContributors,
    getContributor,
    saveAdminNotes,
    SLICE_NAME,
    getAllContributorsWorkHistory,
    updateContributorHourlyRate
} from './service';

interface initialTypes {
    data: IContributor[];
    isLoading: boolean;
    error: string;
    contributer: IContributor | {};
    isAdminNotesLoading: boolean;
    adminNotes: AdminNotesType[];
    workHistory: IWorkHistory[];
    isContributorHourlyRateLoading: boolean;
}

const initialState: initialTypes = {
    data: [],
    isLoading: false,
    error: '',
    contributer: {},
    isAdminNotesLoading: false,
    adminNotes: [],
    workHistory: [],
    isContributorHourlyRateLoading: false
};

export const ContributorsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [getAllContributors.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllContributors.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getAllContributors.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getAllContributorsWorkHistory.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllContributorsWorkHistory.fulfilled.type]: (
            state,
            { payload }
        ) => {
            state.isLoading = false;
            state.workHistory = payload;
        },
        [getAllContributorsWorkHistory.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getContributor.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getContributor.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.contributer = payload;
        },
        [getContributor.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [getAllAdminNotes.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllAdminNotes.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.adminNotes = payload;
        },
        [getAllAdminNotes.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [saveAdminNotes.pending.type]: (state) => {
            state.isAdminNotesLoading = true;
        },
        [saveAdminNotes.fulfilled.type]: (state, { payload }) => {
            state.isAdminNotesLoading = false;
            state.adminNotes = payload;
        },
        [saveAdminNotes.rejected.type]: (state, action) => {
            state.isAdminNotesLoading = false;
            state.error = action.payload;
        },

        [updateContributorHourlyRate.pending.type]: (state) => {
            state.isContributorHourlyRateLoading = true;
        },
        [updateContributorHourlyRate.fulfilled.type]: (state, { payload }) => {
            state.isContributorHourlyRateLoading = false;
            const _contributor = { ...state.contributer };
            _contributor.hourly_rate = payload;
            state.contributer = _contributor;
        },
        [updateContributorHourlyRate.rejected.type]: (state, action) => {
            state.isContributorHourlyRateLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = ContributorsSlice.actions;

export default ContributorsSlice.reducer;
