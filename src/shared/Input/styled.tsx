import { Grid } from '@mui/material';
import styled from 'styled-components';
import themeStyle from '../../theme';

export interface Props {
    hasError?: boolean;
}

export const InputBox = styled.input<{
    backgroundColor?: string;
    hasError?: boolean;
}>`
    background: ${({ backgroundColor, theme }) =>
        backgroundColor ? backgroundColor : theme.color.white};
    border: 1px solid
        ${({ hasError, theme }) => (hasError ? 'red' : theme.color.tuna)};
    border-radius: 4px;
    gap: 10px;
    height: 38px;
    outline: none;
    padding: 10px 10px 10px 30px;
    margin-bottom: 5px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    &:hover {
        border: ${({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`};
        box-shadow: ${({ theme }) => `0px 0px 5px ${theme.color.gray44}`};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.color.hitGray};
    }
    :-ms-input-placeholder {
        color: ${({ theme }) => theme.color.hitGray};
    }
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
        cursor: pointer;
        border-radius: 10px;
        padding: 2px;
        background-color: ${({ theme }) => theme.color.black};
    }
    font-family: Poppins, sans-serif;
`;

export const BackIcon = styled.img`
    align-self: center;
    height: 12px;
    margin-left: 10px;
    position: absolute;
    width: 12px;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
`;

export const labelStyle = {
    color: themeStyle.color.lightGrayishBlue,
    position: 'relative',
    top: 10,
    left: 20,
    zIndex: 1
};

export const ErrorBox = styled(Grid)``;

export const errorTextStyle = {
    fontSize: '10px',
    color: themeStyle.color.errorRed
};
