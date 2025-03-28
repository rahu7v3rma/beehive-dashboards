import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    signIn as apiSignIn,
    refreshToken as apiRefreshToken,
    signOut as apiSignOut
} from 'src/api/apiCaller';

export const SLICE_NAME = 'AUTH';

export const ACTION_TYPES = {
    SIGNIN: `${SLICE_NAME}/signin`
};

let refreshTokenId: NodeJS.Timeout | null = null;

export const signIn = createAsyncThunk(
    ACTION_TYPES.SIGNIN,
    async (options: { email: string; pass: string }, { rejectWithValue }) => {
        try {
            const response = await apiSignIn(options.email, options.pass);
            if (response.data.activated) {
                localStorage.setItem('access_token', response.data.accessToken);
                localStorage.setItem(
                    'refresh_token',
                    response.data.refreshToken
                );
                localStorage.setItem('is_admin', response.data.isAdmin);

                // set refresh for expires in or a day if no expires in was provided
                setTokenRefresh(response.expiresIn || 24 * 60 * 60);

                return Promise.resolve({
                    activated: true,
                    accessToken: response.data.accessToken,
                    isAdmin: response.data.isAdmin
                });
            } else {
                return Promise.resolve({
                    activated: false,
                    accessToken: response.data.accessToken,
                    isAdmin: response.data.isAdmin
                });
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

// Sign the user out of the system
export async function signOut(): Promise<any> {
    if (refreshTokenId !== null) {
        clearInterval(refreshTokenId);
        refreshTokenId = null;
    }

    // we don't care if signout failed on the service
    return apiSignOut()
        .catch(() => null)
        .finally(() => {
            // remove tokens
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('is_admin');
        });
}

// Gets the current access token
export function accessToken(): string | null {
    return localStorage.getItem('access_token');
}

// Gets the current access token
export function isAdmin(): boolean {
    return localStorage.getItem('is_admin') === 'true';
}

// Calling the refresh token API to refresh the access token
export async function refreshToken(): Promise<any> {
    console.log('Refreshing token');
    return apiRefreshToken()
        .then((response) => {
            // replace access token
            localStorage.setItem('access_token', response.data.accessToken);

            // set refresh for expires in or a day if no expires in was provided
            setTokenRefresh(response.data.expiresIn || 24 * 60 * 60);

            console.log('Token refresh successful');

            return Promise.resolve();
        })
        .catch((error) => {
            console.log(`Error refreshing token: ${JSON.stringify(error)}`);
            // Save the current URL before redirecting to login
            const currentUrl = window.location.href;
            localStorage.setItem('redirect_url', currentUrl);
            return signOut().then(() => {
                window.location.replace('/login');
            });
        });
}

// Checks if the user is signed in
export function signedIn(): boolean {
    return !!localStorage.getItem('access_token');
}

// Setting a timer to refresh the access token
function setTokenRefresh(expiresInSeconds: number): void {
    if (refreshTokenId !== null) {
        clearInterval(refreshTokenId);
        refreshTokenId = null;
    }

    // refresh after 95% of token valid time has passed so we have a working one
    const refreshInSeconds = Math.round(expiresInSeconds * 0.95);
    refreshTokenId = setInterval(refreshToken, refreshInSeconds * 1000);
}
