import { createAsyncThunk } from '@reduxjs/toolkit';

export const SLICE_NAME = 'bug';

export const ACTION_TYPES = {
    GET_BUGS: `${SLICE_NAME}/getBugs`
};

export const getBugs = createAsyncThunk(
    ACTION_TYPES.GET_BUGS,
    async (_params, { rejectWithValue }) => {
        try {
            const response = [
                {
                    id: 'asdda',
                    created: '10002-22',
                    module: 'Login',
                    title: 'something wrong',
                    description: 'short description',
                    type: 'type',
                    attachments: [],
                    stepsToReproduce: [],
                    version: '3.11',
                    priority: 3,
                    reporter: 'usdagg',
                    status: 'Open',
                    projectId: 2
                }
            ];

            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
