import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import Label from '../Label';
import {
    InputBox,
    BackIcon,
    ErrorBox,
    errorTextStyle,
    labelStyle
} from './styled';

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
    inputStyle?: React.CSSProperties;
    disabled?: boolean;
}

const Input: FunctionComponent<Props> = ({
    iconBack,
    label,
    onChange,
    onBlur,
    placeholder,
    value,
    hasError,
    errorMessage,
    name,
    type,
    backgroundColor,
    inputStyle,
    disabled = false
}: Props) => {
    return (
        <>
            {label && <Label sxOverrides={labelStyle}>{label}</Label>}
            {iconBack && <BackIcon src={iconBack} alt="logo" />}
            <InputBox
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                backgroundColor={backgroundColor}
                hasError={hasError}
                style={inputStyle}
                disabled={disabled}
            />
            {hasError && (
                <ErrorBox container justifyContent="flex-start">
                    <Label sxOverrides={errorTextStyle}>{errorMessage}</Label>
                </ErrorBox>
            )}
        </>
    );
};

export default Input;
