import { setSnackbarAttributes } from './slice';

export const setSnackbar = (
    snackbarOpen: boolean,
    snackbarType: string = 'success',
    snackbarMessage: string = ''
) => {
    return (
        dispatch: (arg0: {
            payload: any;
            type: 'SNACKBAR/setSnackbarAttributes';
        }) => void
    ) => {
        dispatch(
            setSnackbarAttributes({
                snackbarOpen: snackbarOpen,
                snackbarType: snackbarType,
                snackbarMessage: snackbarMessage
            })
        );
    };
};
