import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { Label } from 'src/shared';
import {
    InputContainer,
    StyledTextField,
    taskInputLabel,
    taskInputSx,
    taskInputTextSx
} from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    input: string;
    onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    multine?: boolean;
    rows?: number;
    error?: string;
}

const MultiLineInput: FC<InputProps> = (props) => {
    const { label, input, onChangeInput, multine, rows, error } = props;
    return (
        <InputContainer>
            <Label sxOverrides={taskInputLabel}>&nbsp;{label}&nbsp;</Label>
            <StyledTextField
                onChange={onChangeInput}
                value={input}
                InputProps={{
                    sx: taskInputTextSx
                }}
                sx={taskInputSx}
                multiline={multine}
                rows={rows}
                error={input === '' && error !== ''}
                helperText={input === '' && error}
            />
        </InputContainer>
    );
};

export default MultiLineInput;
