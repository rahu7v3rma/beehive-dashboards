import { MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import {
    StyledFormControl,
    StyledIconButton,
    StyledInputLabel,
    StyledSelect,
    selectMenuProps
} from './styled';
import ClearIcon from '@mui/icons-material/Clear';

export type Props = {
    options: string[];
    backgroundColor: string;
    textColor: string;
    focusColor: string;
};

const CustomSelect = (props: Props) => {
    const { options, backgroundColor, textColor, focusColor } = props;

    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionChange = (event: SelectChangeEvent<unknown>) => {
        setSelectedOption(event.target.value as string);
    };
    return (
        <StyledFormControl
            fullWidth
            backgroundColor={backgroundColor}
            textColor={textColor}
        >
            <StyledInputLabel
                id="custom-select-label"
                textColor={textColor}
                focusColor={focusColor}
            >
                Select
            </StyledInputLabel>
            <StyledSelect
                labelId="custom-select-label"
                value={selectedOption}
                label="Select"
                onChange={handleOptionChange}
                MenuProps={selectMenuProps(backgroundColor, textColor)}
                endAdornment={
                    selectedOption ? (
                        <StyledIconButton onClick={() => setSelectedOption('')}>
                            <ClearIcon className="MuiClear-icon" />
                        </StyledIconButton>
                    ) : null
                }
                isSelected={Boolean(selectedOption)}
                textColor={textColor}
                focusColor={focusColor}
            >
                {options.map((option: string, index: number) => (
                    <MenuItem value={option} key={index}>
                        {option}
                    </MenuItem>
                ))}
            </StyledSelect>
        </StyledFormControl>
    );
};

export default CustomSelect;
