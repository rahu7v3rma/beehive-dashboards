import { createSlice } from '@reduxjs/toolkit';
import { createQuestSolution, SLICE_NAME } from './service';
import { QuestSolutionParams } from 'src/types/questSolution';

interface initialTypes {
    isLoading: boolean;
    loadingDescription: string | null;
    error: string | null;
    questSolution: QuestSolutionParams[];
}

const initialState: initialTypes = {
    isLoading: false,
    loadingDescription: null,
    error: null,
    questSolution: []
};

export const QuestSolutionSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        [createQuestSolution.pending.type]: (state) => {
            state.isLoading = true;
            state.loadingDescription = 'Creating quest solution';
        },
        [createQuestSolution.fulfilled.type]: (state, { payload }) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.questSolution = [...state.questSolution, payload];
        },
        [createQuestSolution.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.loadingDescription = null;
            state.error = action.payload;
        }
    }
});

export const {} = QuestSolutionSlice.actions;

export default QuestSolutionSlice.reducer;
