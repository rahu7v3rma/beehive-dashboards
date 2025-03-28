import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './service';

export const SLICE_NAME = 'SNACKBAR';

const initialState = {
    authLoading: false,
    authError: null,
    isAdmin: false
};

export const AuthSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        clearAuthError(state) {
            state.authError = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.authLoading = true;
            state.authError = null;
        });
        builder.addCase(signIn.fulfilled, (state, action: any) => {
            state.isAdmin = action.payload.isAdmin;
            state.authLoading = false;
        });
        builder.addCase(signIn.rejected, (state, action: any) => {
            state.authLoading = false;
            state.authError = action.payload.error;
        });
    }
});

export const { clearAuthError } = AuthSlice.actions;

export default AuthSlice.reducer;
