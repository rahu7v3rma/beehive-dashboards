import styled from 'styled-components';
import { Stack } from '@mui/material';
import theme from 'src/theme';

export const Container = styled(Stack)`
    border-radius: 16px;
    padding: 7px 10px;
    background-color: ${theme.color.blackRock};
`;

export const Indicator = styled(Stack)<{ indicatorcolor: string }>`
    margin-left: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ indicatorcolor }) => indicatorcolor};
`;

export const statusTextSX = {
    color: theme.color.white90,
    font: '12px/18px "Inter",sans-serif !important'
};
