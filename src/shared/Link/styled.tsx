import styled from 'styled-components';
import { Props } from './index';

export const AnchorTag = styled.a<Props>`
    color: ${({ theme, isDisabled, color }) =>
        isDisabled ? theme.color.silver : color || theme.color.royalBlue};
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    height: 15px;
    line-height: 15px;
    text-align: right;
    text-decoration-line: none;
    width: 100%;
`;
