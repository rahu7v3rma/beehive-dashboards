import {
    StyledAutocomplete,
    textFieldStyles,
    StyledPopper,
    GapY,
    ChipContainer
} from './styled';

import { TextField } from '@mui/material';
import { useState } from 'react';
import Pill from '../Pill';

export type Props = {
    selectOptions: string[];
    label: string;
};

const AddOptions = (props: Props) => {
    const { selectOptions } = props;

    const [displayOptions, setDisplayOptions] = useState<string[]>([]);

    const [inputSelectedOption, setInputSelectedOption] = useState<
        string | null
    >(null);
    const [inputDisplayOption, setInputDisplayOption] = useState<string>('');

    const onInputChange = (
        _: React.SyntheticEvent<Element, Event>,
        value: string
    ) => {
        setInputDisplayOption(value);
    };

    const onChange = (
        _: React.SyntheticEvent<Element, Event>,
        value: unknown
    ) => {
        if (value) {
            setDisplayOptions([...displayOptions, value as string]);
            setInputDisplayOption('');
            setInputSelectedOption('');
        }
    };

    return (
        <>
            <StyledAutocomplete
                disablePortal
                options={selectOptions}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={props.label}
                        InputLabelProps={textFieldStyles.inputLabelProps}
                        sx={textFieldStyles.sx}
                    />
                )}
                value={inputSelectedOption}
                inputValue={inputDisplayOption}
                onInputChange={onInputChange}
                onChange={onChange}
                PopperComponent={StyledPopper}
                freeSolo
            />
            <GapY of={15} />
            {displayOptions.length > 0 && (
                <ChipContainer>
                    {displayOptions.map((option: string, index: number) => (
                        <Pill
                            index={index}
                            text={option}
                            mode={false}
                            selectedPill={() => option}
                        />
                    ))}
                </ChipContainer>
            )}
        </>
    );
};

export default AddOptions;
