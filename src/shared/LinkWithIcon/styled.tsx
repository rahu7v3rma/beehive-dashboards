import { styled } from '@mui/system';
import theme from 'src/theme';

export const FlexWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

export const labelStyle = {
    fontFamily: 'Inter',
    fontSize: '12px',
    lineHeight: '12px',
    color: theme.color.white50,
    textDecorationLine: 'underline',
    cursor: 'pointer',
    textAlign: 'start'
};
export const Image = styled('img')({
    marginRight: '12px',
    height: '20px',
    width: '20px'
});
