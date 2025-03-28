import theme from 'src/theme';
import { styled } from '@mui/system';
import { TableCell, TableCellProps } from '@mui/material';

interface CustomTableCellProps extends TableCellProps {
    index?: number;
    lastIndex?: number;
}

export const styles = {
    containerStyle: {
        backgroundColor: theme.color.darkBlue,
        padding: '36px',
        marginTop: '35px',
        width: '473px',
        borderRadius: '4px'
    },
    borderBottom: {
        borderBottom: `1px solid ${theme.color.tuna}`
    },
    infoRowStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '14px'
    },
    titleRowStyle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '19px'
    },
    titleLabelStyle: {
        fontFamily: 'Inter',
        color: theme.color.white90,
        fontSize: '13px',
        lineHeight: '13px',
        fontWeight: '700'
    },
    titleValueStyle: {
        fontFamily: 'Inter',
        marginLeft: '14px',
        fontSize: '12px',
        lineHeight: '12px'
    },
    infoLabelStyle: {
        fontFamily: 'Inter',
        color: theme.color.white90,
        lineHeight: '12px',
        fontSize: '12px'
    },
    infoValueStyle: {
        fontFamily: 'Inter',
        color: theme.color.white90,
        minWidth: '40px',
        textAlign: 'center',
        fontSize: '9px'
    },
    goldenColor: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        backgroundImage: theme.gradients.goldenYellow
    },
    verticalLineStyle: {
        backgroundImage: theme.gradients.goldenYellow,
        flexGrow: 0,
        height: '30px',
        width: '1px',
        transform: 'scaleX(0.5)',
        opacity: 0.4
    },
    centeredText: {
        textAlign: 'center'
    },
    summaryRowStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '36px',
        paddingBottom: '36px'
    },
    summaryContentBoxStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    summaryLabelStyle: {
        fontFamily: 'Inter',
        lineHeight: '11px',
        fontSize: '11px',
        marginBottom: '9px'
    },
    summaryValueStyle: {
        fontFamily: 'Inter',
        color: theme.color.white50,
        lineHeight: '9px',
        fontSize: '9px',
        textAlign: 'center'
    },
    summaryBox1: {
        minWidth: '42px'
    },
    summaryBox2: {
        width: '59px'
    },
    summaryBox3: {
        minWidth: '32px'
    },
    summaryBox4: {
        minWidth: '40px'
    }
};

export const MyMiddleTableCell = styled(TableCell)<CustomTableCellProps>(
    (props) => ({
        borderRightWidth: 1,
        borderRightColor: theme.color.tuna,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeft: 0,
        width: '12%',
        height: '38x',
        borderBottom:
            props.index !== 6 && props.index !== props.lastIndex
                ? `1px solid ${theme.color.tuna}`
                : 'none'
    })
);
