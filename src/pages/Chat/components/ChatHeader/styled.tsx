import { styled } from '@mui/system';
import theme from 'src/theme';

export const S: { [key: string]: React.CSSProperties } = {
    closeIcon: {
        cursor: 'pointer'
    }
};

export const ChatHeaderRoot = styled('div')({
    width: '100%',
    padding: '25px',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    backgroundColor: `${theme.color.raisinBlack}`,
    boxShadow: `
    0px 4.32px 6.84px 0px ${theme.color.charcoalGray}, 
    0px 20.41px 26.76px 0px ${theme.color.lightCharcoal}, 
    0px 53px 84px 0px ${theme.color.midnightBlack}`,
    height: '70px'
});
