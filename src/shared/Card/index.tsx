import React from 'react';
import theme from 'src/theme';
import { Card as MuiCard, CardProps } from '@mui/material';

interface CustomCardProps extends CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CustomCardProps> = ({ children, sx, ...props }) => {
    return (
        <MuiCard
            {...props}
            sx={{
                bgcolor: theme.color.blackRock,
                p: '10px',
                ...sx
            }}
        >
            {children}
        </MuiCard>
    );
};

export default Card;
