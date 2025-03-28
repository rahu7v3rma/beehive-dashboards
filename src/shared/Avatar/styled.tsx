import { styled } from '@mui/system';
import { Props } from './index';
import theme from '../../theme';

export const nameInitialStyle = {
    color: theme.color.white,
    lineHeight: '34px',
    fontWeight: '600',
    fontSize: '23px'
};

export const Container = styled('div')(({ size, background }: Props) => ({
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: background ? background : theme.color.royalBlue,
    cursor: 'pointer',
    display: 'flex',
    height: size,
    justifyContent: 'center',
    width: size
}));

export const Image = styled('img')(({ size }: Props) => ({
    borderRadius: '50%',
    height: size,
    verticalAlign: 'middle',
    width: size
}));
