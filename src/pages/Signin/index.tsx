import {
    Container,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack
} from '@mui/material';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Label, Navbar, UploadFile } from 'src/shared';
import {
    StyledAutoComplete,
    StyledBox,
    StyledForm,
    StylesTextInput
} from './styled';
import { SkillItems } from '../../constants/skills';
import Skills from 'src/shared/SkillsV2';
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import theme from 'src/theme/index';
import generateSelectOptions from 'src/utils/generateSelectOptions';

import {
    options,
    TimeZoneOptions,
    HourlyWorkRate,
    Options
} from 'src/constants/options';
import Heading from './components/Heading/index';
import ActionButton from './components/ActionButtons/index';
import YourProfile from './components/YourProfile/YourProfile';

type Props = Record<string, never>;
export type FormInput = {
    FirstName: string;
    LastName: string;
    Email: string;
    TrelloAccount: string;
    UpworkUserName: string;
    GithubAccount: string;
    Password: string;
    ConfirmPassword: string;
    UploadedFile: File;
    AddSkills: string[];
    Rate: number;
    TimeZone: number;
    HourlyWorkLimit: number;
    Country: string;
};

const defaultValuesForProfile = {
    FirstName: '',
    LastName: '',
    Email: '',
    TrelloAccount: '',
    UpworkUserName: '',
    GithubAccount: '',
    AddSkills: [''],
    Rate: undefined,
    TimeZone: 0,
    HourlyWorkLimit: 0,
    Country: ''
};

const defaultValuesForSignIn = {
    ...defaultValuesForProfile,
    Password: '',
    ConfirmPassword: ''
};

const Signin: FunctionComponent<Props> = ({}: Props) => {
    const location = useLocation();
    const [rateOption, setRateOption] = useState<Array<Options>>(options);

    // When we have the profile page we can get all the data from API and set it as its default value.
    const { handleSubmit, control, watch } = useForm<FormInput>({
        defaultValues:
            location.pathname === 'signin'
                ? defaultValuesForSignIn
                : defaultValuesForProfile,
        mode: 'onChange'
    });
    const FormSubmitHandler = (data: FormInput) => {
        console.log(data); //We get all the data when we submit if we don't have any errors.
    };
    const fromData = watch(); //Using this so we can maintain validation of password and confirm password.

    const checkValidation = (value: string) => {
        if (!(value === fromData.Password)) {
            return 'Password and Confirm Password must match';
        }
    };

    const onRateTextChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Number(event.target.value);
            if (
                value &&
                rateOption.filter((item) => item.value === value).length === 0
            ) {
                rateOption.push({
                    value: value,
                    label: value + '$/hour'
                });
                setRateOption(rateOption);
            }
        },
        [rateOption]
    );

    return (
        <>
            <form onSubmit={handleSubmit(FormSubmitHandler)}>
                <YourProfile Validation={checkValidation} control={control} />
                <StyledBox
                    sx={{
                        backgroundColor: `${theme.color.codGray}`,
                        color: `${theme.color.white}`
                    }}
                >
                    <Container
                        maxWidth={false}
                        sx={{ padding: '2rem', maxWidth: '792px' }}
                    >
                        <Heading
                            title="Profile Picture"
                            description="Please upload a picture"
                        />
                        <StyledBox
                            sx={{
                                backgroundColor: `${theme.color.darkBlue}`,
                                marginTop: '2rem'
                            }}
                        >
                            <Controller
                                control={control}
                                name="UploadedFile"
                                render={({ field: { onChange } }) => (
                                    <UploadFile onFileUpload={onChange} />
                                )}
                            />
                        </StyledBox>
                    </Container>
                </StyledBox>

                <StyledBox
                    sx={{
                        backgroundColor: `${theme.color.codGray}`,
                        color: `${theme.color.white}`
                    }}
                >
                    <Container
                        maxWidth={false}
                        sx={{ padding: '2rem', maxWidth: '792px' }}
                    >
                        <Heading
                            title="Rate and Skills"
                            description="Please Fill out the form"
                        />
                        <StyledBox
                            sx={{
                                backgroundColor: `${theme.color.darkBlue}`,
                                marginTop: '2rem'
                            }}
                        >
                            <Stack
                                direction="row"
                                gap={2}
                                sx={{ padding: '2rem' }}
                            >
                                <Stack direction="column" width="40rem">
                                    <Skills availableSkills={SkillItems} />
                                </Stack>
                                <Stack direction="column" width="40rem">
                                    <StyledForm fullWidth>
                                        <Controller
                                            control={control}
                                            name={'Rate'}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value }
                                            }) => (
                                                <StyledAutoComplete
                                                    id="tags-filled"
                                                    options={rateOption}
                                                    fullWidth
                                                    onChange={onChange}
                                                    value={value}
                                                    blurOnSelect={true}
                                                    PaperComponent={({
                                                        children
                                                    }) => (
                                                        <Paper
                                                            style={{
                                                                background:
                                                                    theme.color
                                                                        .darkBlue,
                                                                color: theme
                                                                    .color.white
                                                            }}
                                                        >
                                                            {children}
                                                        </Paper>
                                                    )}
                                                    renderInput={(params) => (
                                                        <StylesTextInput
                                                            {...params}
                                                            label={'Rate'}
                                                            onChange={
                                                                onRateTextChange
                                                            }
                                                        />
                                                    )}
                                                />
                                            )}
                                        />
                                    </StyledForm>
                                </Stack>
                            </Stack>
                        </StyledBox>
                    </Container>
                </StyledBox>

                <StyledBox
                    sx={{
                        backgroundColor: `${theme.color.codGray}`,
                        color: `${theme.color.white}`
                    }}
                >
                    <Container
                        maxWidth={false}
                        sx={{ padding: '2rem', maxWidth: '792px' }}
                    >
                        <Heading
                            title="Time Zone"
                            description="Please enter your time zone"
                        />
                        <StyledBox
                            sx={{
                                backgroundColor: `${theme.color.darkBlue}`,
                                marginTop: '2rem'
                            }}
                        >
                            <Stack
                                direction="row"
                                gap={2}
                                sx={{ padding: '2rem' }}
                            >
                                <Stack direction="column" width="40rem">
                                    <StyledForm fullWidth>
                                        <InputLabel
                                            id="demo-simple-select-label"
                                            sx={{
                                                color: `${theme.color.white}`
                                            }}
                                        >
                                            Country You Work From
                                        </InputLabel>
                                        <Controller
                                            control={control}
                                            name={'Country'}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value }
                                            }) => (
                                                <Select
                                                    onChange={onChange}
                                                    value={value}
                                                    label="Country You Work From"
                                                    MenuProps={{
                                                        MenuListProps: {
                                                            sx: {
                                                                backgroundColor: `${theme.color.darkBlue}`
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value={'Kashmir'}>
                                                        <Label
                                                            sxOverrides={{
                                                                color: `${theme.color.white}`,
                                                                fontFamily:
                                                                    'inter'
                                                            }}
                                                        >
                                                            Kashmir
                                                        </Label>
                                                    </MenuItem>
                                                    <MenuItem
                                                        value={'Pakistan'}
                                                    >
                                                        {' '}
                                                        <Label
                                                            sxOverrides={{
                                                                color: `${theme.color.white}`,
                                                                fontFamily:
                                                                    'inter'
                                                            }}
                                                        >
                                                            Pakistan
                                                        </Label>
                                                    </MenuItem>
                                                    <MenuItem value={'India'}>
                                                        {' '}
                                                        <Label
                                                            sxOverrides={{
                                                                color: `${theme.color.white}`,
                                                                fontFamily:
                                                                    'inter'
                                                            }}
                                                        >
                                                            India
                                                        </Label>
                                                    </MenuItem>{' '}
                                                </Select>
                                            )}
                                        />
                                    </StyledForm>
                                </Stack>
                                <Stack direction="column" width="40rem">
                                    <StyledForm fullWidth>
                                        <InputLabel
                                            id="demo-simple-select-label"
                                            sx={{
                                                color: `${theme.color.white}`
                                            }}
                                        >
                                            Time Zone
                                        </InputLabel>
                                        <Controller
                                            control={control}
                                            name={'TimeZone'}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value }
                                            }) => (
                                                <Select
                                                    onChange={onChange}
                                                    value={value}
                                                    label="Time Zone"
                                                    MenuProps={{
                                                        MenuListProps: {
                                                            sx: {
                                                                backgroundColor: `${theme.color.darkBlue}`
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {generateSelectOptions(
                                                        TimeZoneOptions
                                                    )}
                                                </Select>
                                            )}
                                        />
                                    </StyledForm>
                                </Stack>
                                <Stack direction="column" width="40rem">
                                    <StyledForm fullWidth>
                                        <InputLabel
                                            id="demo-simple-select-label"
                                            sx={{
                                                color: `${theme.color.white}`
                                            }}
                                        >
                                            Hour Work Limit
                                        </InputLabel>
                                        <Controller
                                            control={control}
                                            name={'HourlyWorkLimit'}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value }
                                            }) => (
                                                <Select
                                                    onChange={onChange}
                                                    value={value}
                                                    label="Hourly Work Limit"
                                                    MenuProps={{
                                                        MenuListProps: {
                                                            sx: {
                                                                backgroundColor: `${theme.color.darkBlue}`
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {generateSelectOptions(
                                                        HourlyWorkRate
                                                    )}
                                                </Select>
                                            )}
                                        />
                                    </StyledForm>
                                </Stack>
                            </Stack>
                        </StyledBox>
                    </Container>
                </StyledBox>
                <ActionButton />
            </form>
        </>
    );
};

const ToReturn: FunctionComponent = () => {
    const location = useLocation();

    return location.pathname === '/profile' ? (
        <Navbar>
            <Signin />
        </Navbar>
    ) : (
        <Signin />
    );
};

export default ToReturn;
