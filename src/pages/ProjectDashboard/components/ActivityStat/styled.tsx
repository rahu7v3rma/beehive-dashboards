import React from 'react';
import theme from 'src/theme';
import { styled } from '@mui/system';
import { TableCell, TableCellProps } from '@mui/material';

interface CustomTableCellProps extends TableCellProps {
    index?: number;
    lastIndex?: number;
}

export const tableStyles: { [key: string]: React.CSSProperties } = {
    percentageText: {
        display: 'flex',
        alignSelf: 'center'
    },
    alignSelfText: {
        display: 'flex',
        alignSelf: 'center'
    },
    titleText1: {
        marginTop: '40px',
        marginLeft: '0px',
        marginBottom: '10px',
        width: '100%',
        paddingLeft: '0px !important',
        paddingRight: '0px !important'
    },
    titleText: {
        marginTop: '36px',
        marginLeft: '15px',
        width: '50%'
    },
    tableConatiner1: {
        width: '90%',
        marginTop: '20px',
        marginBottom: '20px'
    },
    tableConatiner: {
        width: '100%',
        marginTop: '36px',
        paddingLeft: '36px !important',
        paddingRight: '36px !important',
        paddingBottom: '55px'
    },
    underlineLable: {
        color: theme.color.white70,
        textDecorationLine: 'underline'
    },
    container: {
        backgroundColor: theme.color.darkBlue,
        marginTop: '35px',
        width: '40%'
    },
    table: {
        backgroundColor: theme.color.darkBlue,
        height: 630,
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    headRow: {
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.white30}`,
        position: 'sticky',
        top: 0
    },
    dataRow: {
        display: 'flex'
    },
    activityStatText: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white90,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0px'
    },
    baseLabel: {
        display: 'flex',
        minWidth: '100px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paginationLabel: {
        display: 'block',
        minWidth: '100px',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white90
    },
    statusCell: {
        fontSize: '9px'
    },
    flagCell: {
        fontSize: '14px'
    },
    headCell: {
        padding: '24px 0'
    },
    firstHeadCell: {
        flexBasis: '180px',
        flexGrow: 1.8
    },
    headCellMd: { flexBasis: '120px', flexGrow: 1.2 },
    headCellLg: { flexBasis: '130px', flexGrow: 1.3 },
    headCellXl: { flexBasis: '150px', flexGrow: 1.5 },
    lastHeadCell: {
        flexBasis: '200px',
        flexGrow: 2
    },
    muiTableCell: {
        backgroundColor: theme.color.darkBlue,
        borderBottom: `1px solid ${theme.color.white30}`
    },
    dataCell: {
        fontWeight: 400,
        lineHeight: '18px',
        color: theme.color.white50
    },
    dataCellPadding: {
        padding: '22px 0'
    },
    pagination: {
        backgroundColor: theme.color.darkBlue,
        color: theme.color.white50
    },
    paginationContainer: {
        backgroundColor: theme.color.darkBlue,
        padding: '0 20px !important',
        margin: 0,
        width: '100%'
    },
    caret: {
        color: theme.color.white50
    },
    pointer: {
        cursor: 'pointer'
    }
};

export const MyTableCell = styled(TableCell)<CustomTableCellProps>((props) => ({
    borderRightWidth: 1,
    borderRightColor: theme.color.tuna,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderLeft: 0,
    width: '30%',
    height: '38x',
    borderBottom:
        props.index !== 6 && props.index !== props.lastIndex
            ? `1px solid ${theme.color.tuna}`
            : 'none'
}));

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

export const SecondTableCell = styled(TableCell)<CustomTableCellProps>(
    (props) => ({
        width: '12%',
        height: '38px',
        borderBottom:
            props.index !== 6 && props.index !== props.lastIndex
                ? `1px solid ${theme.color.tuna}`
                : 'none'
    })
);

export const MyTableCellLast = styled(TableCell)({
    borderRightWidth: 1,
    borderRightColor: theme.color.tuna,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderLeft: 0,
    width: '30%',
    height: '38x',
    borderBottom: `0px solid ${theme.color.tuna}`
});

export const MyMiddleTableCellLast = styled(TableCell)({
    borderRightWidth: 1,
    borderRightColor: theme.color.tuna,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderLeft: 0,
    width: '12%',
    height: '38x',
    borderBottom: `0px solid ${theme.color.tuna}`
});

export const SecondTableCellLast = styled(TableCell)({
    width: '12%',
    height: '38px',
    borderBottom: `0px solid ${theme.color.tuna}`
});

export const sortIconStyles = {
    m: 0,
    p: 0,
    width: 15,
    height: 15,
    marginLeft: '2px'
};
