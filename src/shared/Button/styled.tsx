import { styled, keyframes } from '@mui/system';
import { Props } from './index';
import theme from '../../theme';

interface ButtonProps extends Props {
    isLoading?: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled('button')(
    ({
        width,
        height,
        color,
        borderRadius,
        styles,
        disabled,
        isLoading
    }: ButtonProps) => ({
        alignItems: 'center',
        background: color,
        borderRadius: borderRadius || '6px',
        border: 'none',
        color: theme.color.white,
        display: 'flex',
        height: height || '34px',
        justifyContent: 'center',
        width: width || '100%',
        cursor: disabled || isLoading ? 'auto' : 'pointer',
        opacity: isLoading ? 0.7 : 1,
        position: 'relative',
        ...styles
    })
);

export const Loader = styled('div')({
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: `2px solid ${theme.color.white}`,
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    animation: `${spin} 1s linear infinite`,
    marginLeft: '8px'
});
