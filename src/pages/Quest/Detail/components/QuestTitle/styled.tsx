import { Box, styled } from '@mui/material';
import breakpoint from 'src/theme/breakpoint';

export const Container = styled(Box)`
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoint.lg}) {
        width: 100%;
        margin-bottom: 20px;
    }
`;
