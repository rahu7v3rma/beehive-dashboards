import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { StyledTextField } from './styled';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
    iconBack?: string;
    label?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    type?: string;
    errorMessage?: string;
    backgroundColor?: string;
    style?: object;
}

export type BtnProps = {
    background?: string;
    Color?: string;
    height?: string;
};

const SignInInput: FunctionComponent<Props> = ({
    // iconBack,
    label,
    onChange,
    // onBlur,
    placeholder,
    value,
    hasError,
    name,
    type,
    errorMessage,
    style
}: Props) => {
    return (
        <>
            <StyledTextField
                label={label}
                type={type}
                error={hasError}
                onChange={onChange}
                value={value}
                name={name}
                helperText={hasError ? errorMessage : ''}
                placeholder={placeholder}
                sx={style}
            />
        </>
    );
};

export default SignInInput;
