import { Box, styled } from '@mui/material';
import breakpoint from 'src/theme/breakpoint';

export const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoint.lg}) {
        flex-direction: column;
    }
`;
