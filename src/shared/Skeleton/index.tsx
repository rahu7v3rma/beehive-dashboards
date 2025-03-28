import { FC } from 'react';
import { Skeleton as MUISkeleton } from '@mui/material';

interface Props {
    height?: number;
    width?: number | string;
    variant?: 'text' | 'rectangular' | 'circular';
}

const Skeleton: FC<Props> = ({
    height = 15,
    width = 200,
    variant = 'rectangular'
}) => {
    return (
        <MUISkeleton
            height={height}
            width={width}
            variant={variant}
            sx={{
                bgcolor: 'grey.700',
                borderRadius: '4px',
                marginBottom: '5px',
                marginTop: '5px'
            }}
        />
    );
};

export default Skeleton;
