import { styled } from '@mui/system';
import theme from 'src/theme';

export const Root = styled('div')({
    borderRadius: '4px',
    height: '600px',
    position: 'relative',
    backgroundColor: theme.color.charcoalBlack,
    overflow: 'hidden',
    width: '100%'
});

export const S: { [key: string]: React.CSSProperties } = {
    errorMsg: {
        color: theme.color.red,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
};
