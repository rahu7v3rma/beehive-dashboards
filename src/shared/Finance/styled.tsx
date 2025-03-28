import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const Container = styled(Box)`
    display: inline-flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const title = {
    color: color.white70,
    fontFamily: 'Inter',
    fontSize: '12px',
    marginBottom: '12px'
};

export const TotalBudgetContainer = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

export const totalBudgetText = {
    color: color.white50,
    fontFamily: 'Inter',
    fontSize: '12px',
    width: 100
};

export const totalBudgetAmount = {
    color: color.lightningYellow,
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 600
};

export const TotalExpenseContainer = TotalBudgetContainer;

export const totalExpenseText = totalBudgetText;

export const totalExpenseAmount = {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 600,
    color: color.orangyRed
};

export const profitLossAmount = {
    fontFamily: 'Inter',
    fontSize: '12px',
    textAlign: 'center',
    marginBottom: '13px'
};
