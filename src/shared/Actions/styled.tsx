import { Box, styled } from '@mui/material';
import color from 'src/theme/color';
import gradients from 'src/theme/gradients';

export const Wrapper = styled(Box)`
    display: inline-flex;
    justify-content: center;
    gap: 10px;
`;

export const cancelLabel = {
    font: '600 14px "Inter" !important',
    color: color.lightningYellow,
    backgroundColor: color.darkMintYellow,
    padding: '10px 25px',
    borderRadius: '100px',
    border: `0.1px solid ${color.lightningYellowRgba2}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer'
};

export const saveLavel = {
    ...cancelLabel,
    background: gradients.yellow80,
    color: color.white90
};
