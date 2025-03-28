import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'src/theme';
import { createTheme } from '@mui/material/styles';

interface SwitchStyleProps {
    variant: 'main' | 'simple';
}

export const S = {
    SwitchContainer: styled(Box)``,
    SwitchInputBox: styled(Box)<SwitchStyleProps>`
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
        border: solid;
        border-color: ${theme.color.tuna};
        border-radius: 4px;
        justify-content: center;
        width: ${(props) => (props.variant === 'simple' ? '150px' : '100%')};
        height: 55px;
        margin: ${(props) =>
            props.variant === 'simple' ? '25px 0 0 0' : '12px 0'};
        border: ${(props) =>
            props.variant === 'main'
                ? `solid 0.1px ${theme.color.tuna}`
                : 'none'};
        border-radius: ${(props) => (props.variant === 'main' ? '4px' : '0')};
    `,
    SwitchInputText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white50,
        marginRight: '6px'
    },
    SwitchInputSX: {
        color: theme.color.white90,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15
    },
    SwitchInputSwitchedSX: {
        color: theme.color.lightningYellow,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15
    },
    LabelContainer: styled('div')<{ variant: 'main' | 'simple' }>`
        position: absolute;
        z-index: 1;
        top: -7px;
        left: ${(props) => (props.variant === 'main' ? '6px' : '')};
        font-size: 12px;
        line-height: 12px;
        background-color: ${(props) =>
            props.variant === 'main' ? theme.color.codGray : 'transparent'};
        border-width: ${(props) => (props.variant === 'main' ? '0.1px' : '0')};
        padding-left: ${(props) => (props.variant === 'main' ? '4px' : '0')};
        justify-content: center;
        text-align: center;
    `
};

export const getSwitchStyleTheme = (props: SwitchStyleProps) => {
    const margin = props.variant === 'main' ? 22 : 10;

    return createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        margin: margin
                    },
                    colorPrimary: {
                        '&.Mui-checked': {
                            color: theme.color.lightningYellow
                        }
                    },
                    track: {
                        backgroundColor: theme.color.white,
                        '.Mui-checked.Mui-checked + &': {
                            backgroundColor: theme.color.chineseGold
                        }
                    }
                }
            }
        }
    });
};
