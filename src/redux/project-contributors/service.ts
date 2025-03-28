import { createAsyncThunk } from '@reduxjs/toolkit';
import { AdminNotesType } from 'src/types/contributors';

import {
    saveNotes,
    getAdminNotes,
    getContributors,
    getContributorsWorkHistory,
    updateContributorHourlyRate as apiUpdateContributorHourlyRate
} from '../../api/contributors';

import * as api from 'src/api/contributors';

export const SLICE_NAME = 'contributors';

export const ACTION_TYPES = {
    GET_ENTRIES: `${SLICE_NAME}/getContributors`,
    GET_WORK_HISTORIES: `${SLICE_NAME}/getContributorsWorkHistory`,
    GET_CONTRIBUTOR: `${SLICE_NAME}/contributor`,
    GET_ADMIN_NOTES: `${SLICE_NAME}/getAdminNotes`,
    SAVE_ADMIN_NOTE: `${SLICE_NAME}/saveAdminNote`,
    UPDATE_CONTRIBUTOR_HOURLY_RATE: `${SLICE_NAME}/updateContributorHourlyRate`
};

export const getAllContributors = createAsyncThunk(
    ACTION_TYPES.GET_ENTRIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getContributors();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getAllContributorsWorkHistory = createAsyncThunk(
    ACTION_TYPES.GET_WORK_HISTORIES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getContributorsWorkHistory();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getContributor = createAsyncThunk(
    ACTION_TYPES.GET_CONTRIBUTOR,
    async (params, { rejectWithValue }) => {
        try {
            const response = await api.getContributor();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getAllAdminNotes = createAsyncThunk(
    ACTION_TYPES.GET_ADMIN_NOTES,
    async (params, { rejectWithValue }) => {
        try {
            const response = await getAdminNotes();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const saveAdminNotes = createAsyncThunk(
    ACTION_TYPES.SAVE_ADMIN_NOTE,
    async (params: AdminNotesType[], { rejectWithValue }) => {
        try {
            const response = await saveNotes(params);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateContributorHourlyRate = createAsyncThunk(
    ACTION_TYPES.UPDATE_CONTRIBUTOR_HOURLY_RATE,
    async (params: string, { rejectWithValue }) => {
        try {
            const response = await apiUpdateContributorHourlyRate(params);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const services = {
    getAllContributors,
    getAllContributorsWorkHistory,
    getContributor,
    getAllAdminNotes,
    saveAdminNotes,
    updateContributorHourlyRate
};

export default services;
