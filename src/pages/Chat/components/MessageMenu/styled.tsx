import { Theme, styled } from '@mui/material';
import theme from 'src/theme';

type StyledMessageMenuProps = {
    showMenu: boolean;
    sentByMe: boolean;
};
export const StyledMessageMenu = styled('div')(
    ({ showMenu, sentByMe }: StyledMessageMenuProps & { theme: Theme }) => ({
        [sentByMe ? 'width' : 'maxWidth']: '55px',
        height: '28px',
        padding: '5px 4px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        opacity: showMenu ? 1 : 0,
        backgroundColor: theme.color.grayBlue,
        justifyContent: 'space-between'
    })
);

export const S: { [key: string]: React.CSSProperties } = {
    controlIcons: {
        cursor: 'pointer',
        width: '20px',
        height: '20px',
        fontSize: '20px'
    }
};
