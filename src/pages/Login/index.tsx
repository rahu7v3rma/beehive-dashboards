import { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { getAuthState } from 'src/redux/auth/selectors';
import { clearAuthError } from 'src/redux/auth/slice';
import { signedIn } from 'src/redux/auth/service';
import Loader from 'src/shared/Loader';
import LoginForm from './components/loginForm';
import { useSelector } from 'react-redux';
import { mock } from 'src/api/apiCaller';

type Props = Record<string, never>;

const Login: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { authLoading, authError } = useSelector(getAuthState);

    useEffect(() => {
        // clear auth error on component-did-mount
        dispatch(clearAuthError());
    }, [dispatch]);

    // if user is already signed, redirect to the home page or saved url
    useEffect(() => {
        if (mock || signedIn()) {
            let redirectUrl = localStorage.getItem('redirect_url') || '/';
            localStorage.removeItem('redirect_url');
            if (redirectUrl.startsWith(window.location.origin)) {
                redirectUrl = redirectUrl.replace(window.location.origin, '');
            }
            navigate(redirectUrl);
        }
    }, [navigate]);

    return (
        <div>
            {authLoading ? <Loader /> : <LoginForm authError={authError} />}
        </div>
    );
};

export default Login;
