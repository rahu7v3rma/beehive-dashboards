import { FC, ReactNode } from 'react';
import { Label } from 'src/shared';
import { Container, Description as DescriptionStyled, labelSx } from './styled';

interface DescriptionSectionProps {
    label: string;
    description: ReactNode;
}

const Description: FC<DescriptionSectionProps> = (props) => {
    const { label, description } = props;
    return (
        <Container>
            <Label sxOverrides={labelSx}>&nbsp;{label}&nbsp;</Label>
            <DescriptionStyled>{description}</DescriptionStyled>
        </Container>
    );
};

export default Description;
