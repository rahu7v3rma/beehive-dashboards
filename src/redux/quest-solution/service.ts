import { createAsyncThunk } from '@reduxjs/toolkit';
import { postQuestSolution } from 'src/api/apiCaller';
import { QuestSolutionParams } from 'src/types/questSolution';

export const SLICE_NAME = 'quest-solution';

export const ACTION_TYPES = {
    CREATE_QUESTION_SOLUTION: `${SLICE_NAME}/createQuestSolution`
};

export const createQuestSolution = createAsyncThunk(
    ACTION_TYPES.CREATE_QUESTION_SOLUTION,
    async (options: QuestSolutionParams, { rejectWithValue }) => {
        try {
            const response = await postQuestSolution(options);
            return response as QuestSolutionParams;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
