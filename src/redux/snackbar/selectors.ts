import { RootState } from '../store';

const rootSelector = (state: RootState) => state.snackbar;

export const getSnackBarFromState = (state: RootState) =>
    rootSelector(state) || [];
