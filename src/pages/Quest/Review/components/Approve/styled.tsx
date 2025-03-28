import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const Container = styled(Box)`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RatingSection = styled(Box)`
    align-items: center;
    background-color: ${color.blackRock};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 30px 10px;
    width: 40%;
    text-align: center;
`;

export const RatingBox = styled(Box)`
    margin: 20px 0;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
