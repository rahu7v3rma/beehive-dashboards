import { createSlice } from '@reduxjs/toolkit';
import {
    SLICE_NAME,
    postRequestModifications,
    postRequestApprove,
    getQuest,
    getQuestSolution
} from './service';
import { QuestSchema, QuestSolution } from 'src/types/quests';

interface initialTypes {
    isLoading: boolean;
    error: string | null;
    quest: QuestSchema | null;
    questSolution: QuestSolution | null;
}

const initialState: initialTypes = {
    isLoading: false,
    error: null,
    quest: null,
    questSolution: null
};

export const QuestsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},

    extraReducers: {
        // Handlers for postRequestModifications
        [postRequestModifications.pending.type]: () => {},
        [postRequestModifications.fulfilled.type]: () => {},
        [postRequestModifications.rejected.type]: (state, action) => {
            state.error = action.payload;
        },
        // Handlers for postRequestApprove
        [postRequestApprove.pending.type]: () => {},
        [postRequestApprove.fulfilled.type]: () => {},
        [postRequestApprove.rejected.type]: (state, action) => {
            state.error = action.payload;
        },
        // Handlers for getQuest
        [getQuest.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getQuest.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.quest = action.payload.data;
        },
        [getQuest.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // Handlers for getQuestSolution
        [getQuestSolution.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getQuestSolution.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.questSolution = action.payload;
        },
        [getQuestSolution.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {} = QuestsSlice.actions;

export default QuestsSlice.reducer;
