import { MenuItem } from '@mui/material';
import { Label } from 'src/shared';

interface Options {
    value: number;
    label: string;
}

const generateSelectOptions = (ele: Options[]) => {
    return ele.map((element) => {
        return (
            <MenuItem key={element.value} value={element.value}>
                <Label color="white" sxOverrides={{ fontFamily: 'inter' }}>
                    {element.label}
                </Label>
            </MenuItem>
        );
    });
};

export default generateSelectOptions;
