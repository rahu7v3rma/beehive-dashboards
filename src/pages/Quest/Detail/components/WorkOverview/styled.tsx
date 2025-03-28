import { Box, styled } from '@mui/material';
import color from 'src/theme/color';
import breakpoint from 'src/theme/breakpoint';

export const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: ${breakpoint.lg}) {
        width: 100%;
    }

    @media (max-width: ${breakpoint.lg2}) {
        width: 70%;
    }
`;

export const Attribute = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 1px;

    label {
        font-size: 12px;
        color: ${color.white50};
    }

    span {
        color: ${color.white};
        font-size: 12px;
        margin-top: 3px;
    }
`;

export const AttributeSection = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
`;
