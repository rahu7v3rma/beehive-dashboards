import React from 'react';
import theme from 'src/theme';

export const tableStyles: { [key: string]: React.CSSProperties } = {
    centerItems: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: theme.color.darkBlue,
        maxHeight: '683px'
    },
    table: {
        backgroundColor: theme.color.darkBlue,
        minWidth: 650,
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '0 20px'
    },
    headRow: {
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.white30}`,
        position: 'sticky',
        top: 0,
        zIndex: 1
    },
    dataRow: {
        display: 'flex'
    },
    baseLabel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100px',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white
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
        display: 'block',
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.tuna}`,
        flexBasis: '100px',
        flexGrow: 1
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
        color: theme.color.white50,
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
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
    statusChip: {
        height: '24px',
        padding: '5px',
        paddingRight: '10px'
    },
    pointer: {
        cursor: 'pointer'
    }
};
