import { FunctionComponent } from 'react';
import { Container, DeleteIcon } from './styled';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';

export interface Props {
    index: number;
    text: string;
    mode: boolean;
    selectedPill: (data: any) => void;
}

const Pill: FunctionComponent<Props> = ({
    index,
    text,
    mode,
    selectedPill
}) => (
    <Container key={index} onClick={() => selectedPill(text)}>
        {text}
        {mode && (
            <DeleteIcon>
                <Delete />
            </DeleteIcon>
        )}
    </Container>
);

export default Pill;
