import { FunctionComponent } from 'react';
import { Stack } from '@mui/material';
import { Label } from 'src/shared';
import { descriptionOverides, titelOverrides } from './styled';

interface Props {
    title: string;
    description: string;
}

const Heading: FunctionComponent<Props> = ({ title, description }: Props) => {
    return (
        <>
            <Stack gap={1}>
                <Label sxOverrides={titelOverrides}>{title}</Label>
                <Label sxOverrides={descriptionOverides}>{description}</Label>
            </Stack>
        </>
    );
};

export default Heading;
