import { createSlice } from '@reduxjs/toolkit';

export const SLICE_NAME = 'SNACKBAR';

const initialState = {
    snackbarOpen: false,
    snackbarType: 'success',
    snackbarMessage: ''
};

export const SnackbarSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setSnackbarAttributes: (state, action) => {
            state.snackbarOpen = action.payload.snackbarOpen;
            state.snackbarType = action.payload.snackbarType || 'success';
            state.snackbarMessage = action.payload.snackbarMessage || '';
        },

        closeSnackBar: (state) => {
            state.snackbarOpen = false;
        }
    },

    extraReducers: {}
});

export const {} = SnackbarSlice.actions;

export const { setSnackbarAttributes, closeSnackBar } = SnackbarSlice.actions;

export default SnackbarSlice.reducer;
