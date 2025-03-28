import { styled } from '@mui/system';
import theme from '../../theme';
import { Chip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Autocomplete from '@mui/material/Autocomplete';
import color from 'src/theme/color';
export const Container = styled('div')({
    padding: '0px'
});

export const AnchorLink = styled('a')({
    background: theme.color.yellowText,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontSize: '12px',
    fontFamily: 'Inter',
    textDecoration: 'underline',
    display: 'inline-block',
    marginLeft: '18px',
    verticalAlign: 'top',
    borderBottom: '1px solid' + theme.color.lightningYellow,
    fontWeight: '400',
    lineHeight: '14px',
    cursor: 'pointer'
});

export const LabelStyle = {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: theme.color.white70,
    marginLeft: '10px',
    display: 'flex',
    fontWeight: '600',
    marginBottom: '24px',
    alignItems: 'center'
};

export const SkillChip = styled(Chip)`
    && {
        margin-left: 200px;
        margin-right: 20px;
        background-color: ${color.lightOrangeYellow};
        border-radius: 16px;
        color: ${color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
    }
`;

export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: ${color.lightningYellow};
    }
`;

export const AddSkillChip = styled(Chip)`
    && {
        background-color: ${color.lightOrangeYellow};
        border-radius: 16px;
        color: ${color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
        z-index: 1;
    }
`;

export const StyledAutocomplete = styled(Autocomplete)`
    display: inline-block;
    width: fit-content;
    & .MuiInputBase-root {
        height: 32px;
        width: 140px;
        padding: 0px;
        color: ${color.lightningYellow};
        border-radius: 16px;
    }
    & input {
        padding: 0px 14px !important;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
    }

    & .Mui-focused fieldset {
        border-color: ${color.darkBlue} !important;
    }

    & fieldset {
        border-color: ${color.darkBlue} !important;
    }
`;

export const AutocompleteStyle = {
    '& .MuiPaper-root': {
        backgroundColor: color.darkBlue,
        fontFamily: 'Inter',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '15px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: color.white90
    },
    '& .Mui-focused': {
        backgroundColor: `${color.blackRock} !important`
    }
};

export const errorLabelSx = {
    font: '12px "Inter" !important',
    color: theme.color.red,
    marginLeft: '10px'
};

export const saveButtonStyles = {
    font: '14px/18px "Inter",sans-serif !important',
    color: theme.color.yellow60,
    marginLeft: '15px',
    textDecoration: 'underline',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textUnderlineOffset: '3px',
    cursor: 'pointer'
};
