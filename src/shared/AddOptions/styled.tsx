import { Autocomplete, Box, Popper } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

const StyledAutocomplete = styled(Autocomplete)(() => ({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.23)'
    },
    '& .MuiOutlinedInput-root': {
        // '&.fieldset': {
        backgroundColor: theme.color.tuna,
        borderColor: 'transparent',
        borderBottom: `2px solid ${theme.color.lightningYellow}`
        // }
    },
    '& .MuiAutocomplete-inputFocused': {
        zIndex: 1,
        color: 'white'
    },
    '&& .Mui-focused.MuiFormLabel-root': {
        color: theme.color.lightningYellow
    },
    width: '100%'
}));

const textFieldStyles = {
    inputLabelProps: { style: { color: theme.color.lightningYellow } },
    sx: { width: '100%', borderColor: 'white' }
};

const StyledPopper = (props: any) => (
    <Popper {...props} sx={{ paddingTop: 1 }} />
);

const GapY = styled(Box)<{ of: number }>`
    margin-top: ${(p) => p.of}px;
`;

const ChipContainer = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export {
    StyledAutocomplete,
    textFieldStyles,
    StyledPopper,
    GapY,
    ChipContainer
};
