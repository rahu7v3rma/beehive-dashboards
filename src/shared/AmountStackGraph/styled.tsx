import { Box, styled } from '@mui/material';
import color from 'src/theme/color';

export const Container = styled(Box)(() => ({
    width: '170px',
    borderBottom: `1px solid ${color.lightOrangeYellow}`
}));

export const Item = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}));

export const Amount = styled(Box)(() => ({
    color: color.white50,
    fontSize: '12px',
    fontFamily: 'Inter',
    width: '25%'
}));

interface FillProps {
    amount: number;
    color: string;
    totalAmount: number;
}

export const Fill = styled(Box)((p: FillProps) => {
    const height = (p.amount / p.totalAmount) * 100;
    return {
        background: p.color,
        height: height > 15 ? height : 15,
        width: '30%'
    };
});

export const Type = styled(Box)(() => ({
    color: color.white70,
    fontSize: '12px',
    fontFamily: 'Inter',
    width: '50%',
    position: 'relative',
    left: 12
}));
