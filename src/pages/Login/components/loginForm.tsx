import { Button, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { FunctionComponent, useCallback } from 'react';
import { TextField } from 'formik-mui';
import { signIn } from 'src/redux/auth/service';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks';

function formatErrorMessage(error: string) {
    switch (error) {
        case 'unauthorized':
            return 'Wrong credentials';
        default:
            return 'Unknown error. Please try again';
    }
}

type FormErrors = {
    email?: string;
    password?: string;
};

type Props = {
    authError: string | null;
};

const LoginForm: FunctionComponent<Props> = ({ authError }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleValidate = useCallback(
        (values: { email: string | null; password: string | null }) => {
            const errors: FormErrors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = 'Required';
            }

            return errors;
        },
        []
    );

    const handleSubmit = useCallback(
        (values: { email: string; password: string }) => {
            dispatch(
                signIn({
                    email: values.email,
                    pass: values.password
                })
            )
                .unwrap()
                .then(
                    (result: {
                        activated: boolean;
                        accessToken: string;
                        isAdmin: boolean;
                    }) => {
                        if (result.activated) {
                            let redirectUrl =
                                localStorage.getItem('redirect_url') ||
                                (result.isAdmin ? '/projects' : '/overview');
                            localStorage.removeItem('redirect_url');
                            if (
                                redirectUrl.startsWith(window.location.origin)
                            ) {
                                redirectUrl = redirectUrl.replace(
                                    window.location.origin,
                                    ''
                                );
                            }
                            navigate(redirectUrl);
                        }
                    }
                )
                .catch((e) => {
                    console.log(e);
                });
        },
        [dispatch, navigate]
    );

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexGrow: 1,
                        height: '100vh'
                    }}
                >
                    <img
                        style={{
                            width: '100px'
                        }}
                        alt="logo"
                        src="bee_icon.jpg"
                    />
                    <Typography
                        style={{
                            textAlign: 'center'
                        }}
                        variant="h5"
                        component="h1"
                    >
                        Sign In
                    </Typography>
                    <Field
                        style={{
                            textAlign: 'center',
                            width: '200px'
                        }}
                        component={TextField}
                        name="email"
                        type="email"
                        label="E-mail"
                        autoComplete="email"
                    />
                    <Field
                        style={{
                            textAlign: 'center',
                            width: '200px'
                        }}
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                        autoComplete="password"
                    />
                    {authError && (
                        <Typography color="error">
                            {formatErrorMessage(authError)}
                        </Typography>
                    )}
                    <Button
                        style={{
                            width: '200px',
                            flexBasis: 'max-content',
                            margin: 10
                        }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                    >
                        Sign In
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
