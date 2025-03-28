import { FC } from 'react';
import { Fill, Amount, Container, Type, Item } from './styled';
import { numberInKFormat } from 'src/utils/amountStackGraph';

export interface AmountGraphData {
    type: string;
    amount: number;
    color: string;
}
export interface Props {
    data: AmountGraphData[];
}
const AmountStackGraph: FC<Props> = (props) => {
    const { data } = props;
    const totalAmount = data.map((d) => d.amount).reduce((a, b) => a + b);
    return (
        <Container>
            {data.map((d) => (
                <Item>
                    <Amount>${numberInKFormat(d.amount)}</Amount>
                    <Fill
                        amount={d.amount}
                        color={d.color}
                        totalAmount={totalAmount}
                    />
                    <Type>{d.type}</Type>
                </Item>
            ))}
        </Container>
    );
};

export default AmountStackGraph;
