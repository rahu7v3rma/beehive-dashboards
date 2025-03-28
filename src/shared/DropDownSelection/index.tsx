import { FunctionComponent, useState } from 'react';
import Dropdown from 'src/shared/DropDown';
import { Wrapper } from './styled';
import theme from 'src/theme';
import { SelectChangeEvent } from '@mui/material';

interface Props {
    handleSelect: (value: string) => void;
    initialValue: string | null;
    possibleValues: string[];
}

const DropDownSelection: FunctionComponent<Props> = ({
    initialValue,
    possibleValues,
    handleSelect
}: Props) => {
    const [selectedValue, setSelectedValue] = useState<string>(
        initialValue || ''
    );

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setSelectedValue(value);
        handleSelect(value);
    };
    const options = possibleValues.map((c) => {
        return {
            value: c,
            title: c,
            backgroundColor: theme.color.darkBlue,
            color: theme.color.white70
        };
    });

    return (
        <Wrapper>
            <Dropdown
                value={selectedValue}
                handleChange={handleChange}
                options={options}
            />
        </Wrapper>
    );
};

export default DropDownSelection;
