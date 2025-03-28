import { FormControl, IconButton, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import styled from 'styled-components';

type StyledSelectProps = {
    isSelected: boolean;
    textColor: string;
    focusColor: string;
};
const StyledSelect = styled(Select)<StyledSelectProps>`
    && {
        color: white;
        .MuiOutlinedInput-notchedOutline {
            border-color: rgba(${(p) => p.textColor}, 0.23);
        }
        .MuiSelect-icon {
            color: rgba(${(p) => p.textColor}, 0.23);
            display: ${(p) => (p.isSelected ? 'none' : 'inline-block')};
        }
        .MuiClear-icon {
            color: rgba(${(p) => p.textColor}, 0.23);
        }
    }
    &:hover {
        && {
            .MuiOutlinedInput-notchedOutline {
                border-color: rgba(${(p) => p.textColor}, 0.5);
            }
            .MuiSelect-icon {
                color: rgba(${(p) => p.textColor}, 0.5);
            }
            .MuiClear-icon {
                color: rgba(${(p) => p.textColor}, 0.5);
            }
        }
    }
    &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
            border-color: ${(p) => p.focusColor} !important;
        }
        .MuiSelect-icon {
            color: ${(p) => p.focusColor} !important;
        }
        .MuiClear-icon {
            color: ${(p) => p.focusColor} !important;
        }
    }
`;

type StyledInputLabelProps = {
    textColor: string;
    focusColor: string;
};

const StyledInputLabel = styled(InputLabel)<StyledInputLabelProps>`
    && {
        color: rgba(${(p) => p.textColor}, 0.23);
    }
    &.Mui-focused {
        color: ${(p) => p.focusColor} !important;
    }
`;

type StyledFormControlProps = {
    backgroundColor: string;
    textColor: string;
};
const StyledFormControl = styled(FormControl)<StyledFormControlProps>`
    background-color: ${(p) => p.backgroundColor};

    &:hover {
        && .MuiFormLabel-root {
            color: rgba(${(p) => p.textColor}, 0.5);
        }
    }
`;

const StyledIconButton = styled(IconButton)`
    && {
        margin: 0px !important;
        padding: 0px !important;
    }
`;

const selectMenuProps = (backgroundColor: string, textColor: string) => {
    return {
        PaperProps: {
            sx: {
                backgroundColor,
                color: `rgb(${textColor})`
            }
        }
    };
};

export {
    StyledSelect,
    StyledInputLabel,
    StyledFormControl,
    StyledIconButton,
    selectMenuProps
};
