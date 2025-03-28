import { RootState } from '../store';

const rootSelector = (state: RootState) => state.auth;

export const getAuthState = (state: RootState) => rootSelector(state);
