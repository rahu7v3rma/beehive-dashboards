import { styled } from '@mui/system';
import theme from '../../theme';

interface Props {
    color: string;
    width: string;
    height: string;
    bgColor: string;
    borderRadius: string;
    border?: string;
}

export const IconWrapper = styled('div')(
    ({ width, height, bgColor, borderRadius, color, border }: Props) => ({
        height: height || '20px',
        width: width || '20px',
        backgroundColor: bgColor || theme.color.white,
        borderRadius: borderRadius || '0px',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        border: border || 'none',

        'svg > *': {
            fill: color || 'yellow'
        }
    })
);
