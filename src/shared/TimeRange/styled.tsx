import styled from 'styled-components';
import theme from 'src/theme';
import { TimeRangeLabelProps } from './index';

export const timeRangeStyles: { [key: string]: React.CSSProperties } = {
    container: {
        overflowX: 'auto',
        padding: '10px 100px',
        display: 'flex',
        alignItems: 'flex-end'
    },
    datePickerIcon: {
        position: 'absolute',
        color: theme.color.white30,
        zIndex: 99,
        right: 0,
        bottom: 6
    },
    customRangeContainer: {
        marginLeft: '15px',
        display: 'flex'
    },
    datePickerContainer: {
        width: '100px',
        margin: '0 12px',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column'
    },
    datePickerLabel: {
        color: theme.color.white50,
        fontFamily: 'Inter',
        fontSize: '12px',
        lineHeight: '12px',
        marginBottom: '4px',
        marginLeft: '2px'
    }
};

const commonStyles = `
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${theme.color.white90};
    min-width: 93px;
    border-bottom: 0.5px solid ${theme.color.tuna};
    padding-bottom: 12px;`;

export const TimeRangeDatePicker = styled.input`
    border: none;
    ${commonStyles}
    outline: none;
    background-color: transparent;
    ::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

export const TimeRangeLabel = styled.a<TimeRangeLabelProps>`
    ${commonStyles}
    padding-top: 19px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    cursor: pointer;
    &.active {
        background: ${theme.color.yellowText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border-bottom: 1px solid ${theme.color.lightningYellow};
    }
    &:first-of-type {
        padding-left: 36px;
    }
`;
