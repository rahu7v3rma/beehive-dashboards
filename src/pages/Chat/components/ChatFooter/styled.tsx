import { styled } from '@mui/system';
import theme from 'src/theme';

export const StyledFooter = styled('div')(
    ({ isActive }: { isActive: boolean }) => ({
        borderRadius: '4px',
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        padding: '10px 14px',
        boxSizing: 'border-box',
        right: '20px',
        height: '50px',
        border: `1px solid ${
            isActive ? theme.color.fadedYellow80 : 'transparent'
        }`,
        backgroundColor: isActive
            ? theme.color.fadedYellow
            : theme.color.raisinBlack
    })
);
