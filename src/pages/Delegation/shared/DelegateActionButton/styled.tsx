import styled from 'styled-components';
import { Box } from '@mui/material';
import theme from 'src/theme';
import color from 'src/theme/color';

export const labelStyles = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white30,
    cursor: 'auto'
};

export const label = (disabled: boolean, unique: boolean) => ({
    font: '600 14px/17px "Inter",sans-serif !important',
    color: unique ? theme.color.lightningYellow : theme.color.white90,
    marginRight: '8px',
    cursor: disabled ? 'auto' : 'pointer'
});

export const Wrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    height: 'calc(100% - 64px)',
    paddingTop: '24px',
    flexDirection: 'column',
    alignItems: 'center'
});

export const SxFooter1 = {
    marginTop: '12px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const SxFooter2 = {
    marginBottom: '10px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const ButtonsWrapper = styled(Box)({
    display: 'flex',
    gap: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px'
});

export const TooltipLabelContainer = styled(Box)``;
