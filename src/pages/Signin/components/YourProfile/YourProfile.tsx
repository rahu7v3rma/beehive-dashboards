import { FunctionComponent, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { StyledBox, stylesOverrides } from 'src/pages/Signin/styled';
import Heading from '../Heading/index';
import { useLocation } from 'react-router-dom';
import InputReactHook from 'src/hooks/InputReacrHook';
import { StyledButton } from 'src/shared/SignInInput/styled';
import EditIcon from '@mui/icons-material/Edit';
import CreatePassword from '../CreatePassword';
import { validateEmail } from 'src/utils/validation';
import { Label } from 'src/shared';
import theme from 'src/theme/index';

import { FormInput } from '../..';
import { Control } from 'react-hook-form';

type Props = {
    Validation: (value: string) => string | undefined;
    control: Control<FormInput, any>;
};

const YourProfile: FunctionComponent<Props> = ({
    Validation,
    control
}: Props) => {
    const location = useLocation();
    const [isShown, setIsShown] = useState<boolean>(false);

    const ShowComponent = () => {
        setIsShown(!isShown);
    };
    return (
        <StyledBox
            sx={{
                height: 'auto'
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    padding: '2rem',
                    maxWidth: '792px'
                }}
            >
                <Stack gap={1} direction="row" justifyContent={'space-between'}>
                    <Heading
                        title="Your Profile"
                        description="Please Fill out the form"
                    />
                    {location.pathname === '/profile' ? (
                        <Stack>
                            <StyledButton
                                type="submit"
                                background="#292626"
                                style={{
                                    borderRadius: '2rem',
                                    background:
                                        'linear-gradient(105.23deg, #FABB18 0%, #C48E02 100%)'
                                }}
                                endIcon={<EditIcon />}
                                Color="#C38E02"
                            >
                                Edit Profile
                            </StyledButton>
                        </Stack>
                    ) : (
                        ''
                    )}
                </Stack>
                <StyledBox
                    sx={{
                        backgroundColor: `${theme.color.darkGunmetal}`,
                        marginTop: '2rem',
                        minHeight: `${
                            location.pathname === '/signin' ? '45rem' : '35rem'
                        }`,
                        height: 'auto'
                    }}
                >
                    <Stack direction="row" gap={2} sx={{ padding: '2rem' }}>
                        <Stack width="372px" gap={2} direction="column">
                            <InputReactHook
                                control={control}
                                name="FirstName"
                                rules={{ required: true }}
                                label="First Name"
                                type="text"
                            />
                        </Stack>
                        <Stack width="372px" gap={2} direction="column">
                            <InputReactHook
                                control={control}
                                name="LastName"
                                rules={{ required: true }}
                                label="Last Name"
                                type="text"
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        gap={2}
                        sx={{ padding: '0 2rem 0 2rem' }}
                    >
                        <InputReactHook
                            control={control}
                            name="Email"
                            rules={{
                                required: true,
                                validate: validateEmail
                            }}
                            label="Email"
                            type="email"
                        />

                        <InputReactHook
                            control={control}
                            name="TrelloAccount"
                            rules={{ required: true }}
                            label="Trello Account"
                            type="text"
                        />
                        <InputReactHook
                            control={control}
                            name="UpworkUserName"
                            rules={{ required: true }}
                            label="Upwork Username"
                            type="text"
                        />
                        <InputReactHook
                            control={control}
                            name="GithubAccount"
                            rules={{ required: true }}
                            label="Github Account"
                            type="text"
                        />
                        {location.pathname === '/signin' ? (
                            <>
                                <InputReactHook
                                    control={control}
                                    name="Password"
                                    rules={{ required: true }}
                                    label="Password"
                                    type="password"
                                />
                                <InputReactHook
                                    control={control}
                                    name="ConfirmPassword"
                                    rules={{
                                        required: true,
                                        validate: Validation
                                    }}
                                    label="Confirm Password"
                                    type="password"
                                />
                            </>
                        ) : (
                            ''
                        )}
                    </Stack>
                    {location.pathname === '/profile' ? (
                        <Stack onClick={ShowComponent} marginTop={'1rem'}>
                            <Label sxOverrides={stylesOverrides}>
                                Change a Password
                            </Label>
                        </Stack>
                    ) : (
                        ''
                    )}
                    {isShown && (
                        <Stack>
                            <CreatePassword
                                open={isShown}
                                onClose={function (): void {
                                    setIsShown(!isShown);
                                }}
                            />
                        </Stack>
                    )}
                </StyledBox>
            </Container>
        </StyledBox>
    );
};

export default YourProfile;
