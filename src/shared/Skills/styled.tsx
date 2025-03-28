import { styled } from '@mui/system';
import theme from '../../theme';

export const Container = styled('div')({
    padding: '0px'
});

export const AnchorLink = styled('a')({
    background: theme.color.yellowText,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontSize: '12px',
    fontFamily: 'Inter',
    textDecoration: 'underline',
    display: 'inline-block',
    marginLeft: '18px',
    verticalAlign: 'top',
    borderBottom: '1px solid' + theme.color.lightningYellow,
    fontWeight: '400',
    lineHeight: '14px',
    cursor: 'pointer'
});

export const LabelStyle = {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: theme.color.white70,
    marginLeft: '10px',
    display: 'flex',
    fontWeight: '600',
    marginBottom: '24px',
    alignItems: 'center'
};
