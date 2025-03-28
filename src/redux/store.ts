import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './snackbar/slice';
import ProjectContributorsSlice from './project-contributors/slice';
import CommunityContributorSlice from './community-contributors/slice';
import ProjectsSlice from './projects/slice';
import DelegateSlice from './delegate/slice';
import CommunitySlice from './community/slice';
import AuthSlice from './auth/slice';
import ChatSlice from './chat/slice';
import WeeeklyActivitySlice from './weekly-activities/slice';
import ClientSlice from './client/slice';
import BugSlice from './bug/slice';
import QuestSolutionSlice from './quest-solution/slice';
import QuestsSlice from './quests/slice';
import RatingSlice from './rating/slice';
import FeedbackSlice from './feedback/slice';
// define store options as a variable so we can export it for tests to use

const reducer = {
    snackbar: snackbarReducer,
    contributors: ProjectContributorsSlice,
    chat: ChatSlice,
    communityContributors: CommunityContributorSlice,
    projects: ProjectsSlice,
    delegate: DelegateSlice,
    community: CommunitySlice,
    auth: AuthSlice,
    weeklyActivities: WeeeklyActivitySlice,
    client: ClientSlice,
    bug: BugSlice,
    questSolution: QuestSolutionSlice,
    quests: QuestsSlice,
    rating: RatingSlice,
    feedback: FeedbackSlice
};

const storeOptions: any = {
    reducer
};

const store = configureStore(storeOptions);

export default store;

// infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;

// infer the `AppDispatch` type from the store so thunk actions can return promises
export type AppDispatch = typeof store.dispatch;

export const test = {
    storeOptions
};
