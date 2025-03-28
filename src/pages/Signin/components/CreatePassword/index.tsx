import { FormControl } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Modal from 'src/shared/Modal';
import {
    StyledTextField,
    StyledButton,
    ButtonStyleWrapper,
    dialogStyle
} from './styled';

export type Props = {
    open: boolean;
    onClose: () => void;
};

export type BtnProps = {
    background?: string;
};

type Inputs = {
    oldPass: string;
    newPass: string;
    confirmPass: string;
};

const CreatePassword: FunctionComponent<Props> = ({ open, onClose }: Props) => {
    const { register, handleSubmit, control } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                title="Change a password"
                dialogStyle={dialogStyle}
                hasCrossIcon={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <Controller
                            name="oldPass"
                            control={control}
                            rules={{
                                required: 'Old Password required'
                            }}
                            render={({ fieldState: { error } }) => (
                                <StyledTextField
                                    {...register('oldPass')}
                                    label="Old Password"
                                    error={!!error}
                                    type="password"
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller
                            name="newPass"
                            control={control}
                            rules={{
                                required: 'New Password required'
                            }}
                            render={({
                                // field: { onChange, value },
                                fieldState: { error }
                            }) => (
                                <StyledTextField
                                    {...register('newPass')}
                                    label="New Password"
                                    error={!!error}
                                    type="password"
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller
                            name="confirmPass"
                            control={control}
                            rules={{
                                required: 'Please Confirm Password'
                            }}
                            render={({
                                // field: { onChange, value },
                                fieldState: { error }
                            }) => (
                                <StyledTextField
                                    {...register('confirmPass')}
                                    label="Confirm Password"
                                    error={!!error}
                                    type="password"
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </FormControl>
                    <ButtonStyleWrapper>
                        <StyledButton onClick={onClose} background="#363842">
                            Cancel
                        </StyledButton>
                        <StyledButton
                            background="linear-gradient(105.23deg, #FABB18 0%, #C48E02 100%)"
                            type="submit"
                        >
                            Save
                        </StyledButton>
                    </ButtonStyleWrapper>
                </form>
            </Modal>
        </>
    );
};
export default CreatePassword;
