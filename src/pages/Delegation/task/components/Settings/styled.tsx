import { styled, Box } from '@mui/material';
import theme from 'src/theme';

export const SkillsBox = styled(Box)`
    background-color: ${theme.color.darkBlue};
    margin-top: 24px;
    padding: 28px;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const SkillsWrapper = styled(Box)`
    width: 30%;
`;

export const MetricsContainer = styled(Box)`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;

export const PickerBox = styled(Box)`
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
`;

export const pickerLabel = {
    font: '12px/12px "Inter",sans-serif !important',
    color: theme.color.white50
};

export const delegateLabel = {
    font: '600 14px/17px "Inter",sans-serif !important',
    color: theme.color.white90,
    marginRight: '8px',
    cursor: 'pointer'
};

export const delegateButton = {
    margin: 'auto',
    marginTop: '36px'
};

export const taskTimeLabel = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white30,
    position: 'relative',
    left: '50%',
    display: 'inline-block',
    transform: 'translateX(-50%)',
    marginTop: '24px'
};
