import { styled } from '@mui/system';
import { Box } from '@mui/material';

type ContainerProps = {
    backgroundColor?: string;
};

export const Container = styled(Box)<ContainerProps>(({ backgroundColor }) => ({
    backgroundColor: backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24px',
    padding: '8px',
    borderRadius: '16px',
    position: 'relative'
}));

export const statusTextSX = {
    font: '13px/18px "Inter",sans-serif !important',
    marginLeft: '6px'
};

export const iconStyle: React.CSSProperties = {
    position: 'relative',
    bottom: '0.1px'
};
