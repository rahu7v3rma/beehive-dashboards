import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { selectSx } from './styled';
import theme from 'src/theme';

export interface Props {
    value?: string;
    onChange: (event: SelectChangeEvent) => void;
    options: string[];
    error?: string;
    width?: number | string;
    height?: number | string;
    name?: string;
    backgroundColor?: string;
    iconColor?: string;
}

const Dropdown2: FC<Props> = (props) => {
    const {
        value,
        onChange,
        options,
        error,
        width,
        height,
        name,
        backgroundColor,
        iconColor
    } = props;
    return (
        <Select
            name={name}
            value={value}
            onChange={onChange}
            sx={selectSx(width, height, iconColor, backgroundColor)}
            error={value === '' && error !== ''}
            MenuProps={{
                MenuListProps: {
                    sx: {
                        backgroundColor: `${theme.color.darkBlue}`,
                        color: `${theme.color.white}`
                    }
                },
                PaperProps: {
                    sx: {
                        backgroundColor: `${theme.color.darkBlue}`
                    }
                }
            }}
        >
            {options.map((item, index) => (
                <MenuItem value={item} key={index}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );
};

export default Dropdown2;
