import { FunctionComponent, useState } from 'react';
import { FormControlLabel, Switch } from './styled';

interface Props {
    handleQaChange: (checked: boolean) => void;
}

const QaSwitch: FunctionComponent<Props> = ({ handleQaChange }: Props) => {
    const [qaChecked, setQAChecked] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQAChecked(event.target.checked);
        handleQaChange(event.target.checked);
    };

    return (
        <FormControlLabel
            checked={qaChecked}
            control={<Switch checked={qaChecked} onChange={handleChange} />}
            label={qaChecked ? 'On' : 'Off'}
        />
    );
};

export default QaSwitch;
