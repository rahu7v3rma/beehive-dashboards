import { FC } from 'react';
import color from 'src/theme/color';
import Label from '../Label';
import * as S from './styled';
import AmountStackGraph, { AmountGraphData } from '../AmountStackGraph';

export interface Props {
    totalBudget: number;
    totalExpense: number;
    amountGraphData: AmountGraphData[];
}

const Finance: FC<Props> = (props) => {
    const { totalBudget, totalExpense, amountGraphData } = props;
    return (
        <S.Container>
            <Label sxOverrides={S.title}>Profit and loss</Label>
            <S.TotalBudgetContainer>
                <Label sxOverrides={S.totalBudgetText}>Total budget</Label>
                <Label sxOverrides={S.totalBudgetAmount}>${totalBudget}</Label>
            </S.TotalBudgetContainer>
            <S.TotalExpenseContainer>
                <Label sxOverrides={S.totalExpenseText}>Total expense</Label>
                <Label sxOverrides={S.totalExpenseAmount}>
                    ${totalExpense}
                </Label>
            </S.TotalExpenseContainer>
            <Label
                sxOverrides={S.profitLossAmount}
                color={
                    totalBudget > totalExpense
                        ? color.freshGreen
                        : color.orangyRed
                }
            >
                ${Math.abs(totalBudget - totalExpense)}{' '}
                {totalBudget > totalExpense ? 'less' : 'more'} than budget
            </Label>
            <AmountStackGraph data={amountGraphData} />
        </S.Container>
    );
};

export default Finance;
