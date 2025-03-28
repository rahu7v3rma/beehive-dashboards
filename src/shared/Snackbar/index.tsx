import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import { AlertProps } from '@mui/material/Alert';
import { closeSnackBar } from '../../redux/snackbar/slice';
import { getSnackBarFromState } from '../../redux/snackbar/selectors';
import { StyledMuiAlert } from './styled';

const CustomizedSnackbars = () => {
    const dispatch = useDispatch();

    const snackbar = useSelector(getSnackBarFromState);
    const snackbarOpen = snackbar?.snackbarOpen;
    const snackbarType = snackbar?.snackbarType;
    const snackbarMessage = snackbar.snackbarMessage;

    const handleClose = () => {
        dispatch(closeSnackBar());
    };

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
        function Alert(props, ref) {
            return (
                <StyledMuiAlert
                    elevation={6}
                    ref={ref}
                    variant="filled"
                    {...props}
                />
            );
        }
    );

    return (
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                color={snackbarType}
            >
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
};

export default CustomizedSnackbars;
