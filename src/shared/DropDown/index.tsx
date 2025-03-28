import { FunctionComponent, useState } from 'react';
import { ClickAwayListener, MenuItem } from '@mui/material';
import {
    CustomInputRow,
    MyDropDown,
    SaveButton,
    buttonStyle,
    customTextFieldMenuItem,
    inputStyle
} from './styled';
import theme from 'src/theme';
import Button from '../Button';
import Input from '../Input';
import color from 'src/theme/color';

export type DropDownItem = {
    value: string;
    title: string;
    backgroundColor?: string;
    color?: string;
};

export type Props = {
    handleChange?: (evt: any) => void;
    value?: string;
    options: Array<DropDownItem>;
    width?: string;
    disabled?: boolean;
    allowCustomValue?: boolean;
};

const Dropdown: FunctionComponent<Props> = ({
    handleChange,
    value,
    options,
    width,
    disabled,
    allowCustomValue = false
}) => {
    const [customValue, setCustomValue] = useState<string>('');
    const [isAddingCustom, setIsAddingCustom] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuToggle = () => {
        if (!disabled) {
            setMenuOpen(!menuOpen);
        }
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        setIsAddingCustom(false);
    };

    const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomValue(event.target.value);
    };

    const handleAddCustomValue = (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        if (customValue && handleChange) {
            e.stopPropagation();
            handleChange({ target: { value: customValue } });
            handleMenuClose();
            setCustomValue('');
        }
    };

    var adjustedOptions = [...options];
    if (allowCustomValue && value && !options.find((o) => o.value === value)) {
        adjustedOptions = [
            {
                value,
                title: value
            },
            ...adjustedOptions
        ];
    }

    return (
        <ClickAwayListener
            onClickAway={() => {
                handleMenuClose();
            }}
        >
            <MyDropDown
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    MenuListProps: {
                        sx: {
                            backgroundColor: `${theme.color.darkBlue}`,
                            color: `${theme.color.white70}`,
                            boxShadow: 'none'
                        }
                    },
                    onClose: handleMenuClose
                }}
                open={menuOpen}
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                disabled={!!disabled}
                sx={{
                    color: `${theme.color.white70} !important`,
                    width: `${width} !important`,
                    boxShadow: 'none !important'
                }}
                style={{
                    backgroundColor: `${theme.color.darkBlue}`
                }}
                onClick={handleMenuToggle}
            >
                {adjustedOptions.map((item: DropDownItem, index) => {
                    return (
                        <MenuItem
                            key={index}
                            value={item.value}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMenuClose();
                                handleChange &&
                                    handleChange({
                                        target: { value: item.value }
                                    });
                            }}
                        >
                            {item.title}
                        </MenuItem>
                    );
                })}
                {allowCustomValue && !isAddingCustom && (
                    <MenuItem
                        onClick={() => {
                            setIsAddingCustom(true);
                        }}
                    >
                        Custom
                    </MenuItem>
                )}
                {isAddingCustom && (
                    <MenuItem
                        onKeyDown={(e) => e.stopPropagation()}
                        style={customTextFieldMenuItem}
                    >
                        <CustomInputRow>
                            <Input
                                value={customValue}
                                onChange={handleCustomChange}
                                placeholder="write your type"
                                backgroundColor={color.tuna}
                                inputStyle={inputStyle}
                            />
                            <SaveButton>
                                <Button
                                    onClick={handleAddCustomValue}
                                    styles={buttonStyle}
                                    color={color.blackRock}
                                >
                                    Save
                                </Button>
                            </SaveButton>
                        </CustomInputRow>
                    </MenuItem>
                )}
            </MyDropDown>
        </ClickAwayListener>
    );
};

export default Dropdown;
