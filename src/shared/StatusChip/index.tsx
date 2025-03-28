import { FunctionComponent } from 'react';
import { Container, Indicator, statusTextSX } from './styled';
import Label from '../Label';

export interface Props {
    text: string;
    indicatorColor: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    renderLeft?: JSX.Element;
}

const StatusChip: FunctionComponent<Props> = ({
    text,
    indicatorColor,
    onClick
}) => (
    <Container
        flexDirection="row"
        alignItems="center"
        display="inline-flex"
        onClick={onClick}
    >
        <Label sxOverrides={statusTextSX}>{text}</Label>
        <Indicator indicatorcolor={indicatorColor} />
    </Container>
);

export default StatusChip;
