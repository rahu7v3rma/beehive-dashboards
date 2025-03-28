import { styled } from '@mui/system';
import theme from '../../theme';

export const Container = styled('div')({
    background: theme.color.blackRock,
    borderRadius: '16px',
    padding: '7px 10px',
    color: theme.color.white70,
    display: 'inline-block',
    marginRight: '8px',
    marginBottom: '6px',
    fontSize: '12px',
    cursor: 'pointer'
});

export const DeleteIcon = styled('span')({
    background: theme.color.darkBlue,
    borderRadius: '16px',
    cursor: 'pointer',
    verticalAlign: 'middle',
    lineHeight: '10px',
    marginLeft: '5px'
});
