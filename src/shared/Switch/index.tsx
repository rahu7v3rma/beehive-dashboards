import { useState, FunctionComponent } from 'react';
import Label from '../Label';
import { S, getSwitchStyleTheme } from './styled';
import MuiSwitch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles';

export interface Props {
    checked?: boolean;
    onchange?: (isChecked: boolean) => void;
    label: string;
    onLabel?: string;
    offLabel?: string;
    variant?: 'main' | 'simple';
}

const Switch: FunctionComponent<Props> = ({
    label,
    onchange,
    checked = true,
    onLabel = 'On',
    offLabel = 'Off',
    variant = 'main'
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        if (onchange) {
            onchange(newChecked);
        }
    }

    return (
        <S.SwitchInputBox variant={variant}>
            <S.LabelContainer variant={variant}>
                <Label sxOverrides={S.SwitchInputText}>{label}</Label>
            </S.LabelContainer>
            <S.SwitchContainer>
                <Label
                    sxOverrides={
                        isChecked ? S.SwitchInputSwitchedSX : S.SwitchInputSX
                    }
                >
                    {offLabel}
                </Label>
                <ThemeProvider theme={getSwitchStyleTheme({ variant })}>
                    <MuiSwitch checked={isChecked} onChange={handleChange} />
                </ThemeProvider>
                <Label
                    sxOverrides={
                        !isChecked ? S.SwitchInputSwitchedSX : S.SwitchInputSX
                    }
                >
                    {onLabel}
                </Label>
            </S.SwitchContainer>
        </S.SwitchInputBox>
    );
};

export default Switch;
