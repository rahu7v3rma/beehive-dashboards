import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const Container = styled(Box)`
    background-color: ${color.blackRock};
    border-radius: 4px;
    flex-direction: column;
    padding: 24px 16px;
    position: relative;
`;

export const Description = styled(Box)`
    border-radius: 2px;
    border: 1px solid ${color.white30};
    font-size: 14px;
    padding: 18px 16px;
    white-space: pre-wrap;
`;

export const labelSx = {
    backgroundColor: color.blackRock,
    color: color.white50,
    font: '16px "Inter" !important',
    left: '10px',
    padding: '0px 4px',
    position: 'absolute',
    transform: 'translate(14px, -8px) scale(0.75)',
    transformOrigin: 'top left',
    zIndex: '1'
};
