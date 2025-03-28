import React from 'react';
import theme from 'src/theme';
import { styled, Box, Tooltip } from '@mui/material';

export const TableEditContainer = styled(Box)`
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const TooltipWrapper = styled(Tooltip)({
    arrow: {
        '&::before': {
            backgroundColor: `${theme.color.darkBlue} !important`
        }
    },
    tooltip: {
        backgroundColor: `${theme.color.darkBlue} !important`,
        boxShadow:
            '0px 1.11111px 5.07639px 0px rgba(0, 0, 0, 0.05), 0px 4.88889px 10.51111px 0px rgba(0, 0, 0, 0.08), 0px 12px 20.9625px 0px rgba(0, 0, 0, 0.10), 0px 23.11111px 41.08889px 0px rgba(0, 0, 0, 0.12), 0px 38.88889px 75.54861px 0px rgba(0, 0, 0, 0.15), 0px 60px 129px 0px rgba(0, 0, 0, 0.20)',
        color: `${theme.color.darkBlue} !important`,
        fontSize: '11px !important',
        fontStyle: 'normal !important',
        lineHeight: 2,
        padding: '12px 18px !important',
        width: 'fit-content',
        whiteSpace: 'pre-line'
    }
});

export const tableStyles: { [key: string]: React.CSSProperties } = {
    tableControls: {
        justifyContent: 'flex-end',
        marginBottom: '17px'
    },
    underlineLable: {
        color: theme.color.white70,
        textDecorationLine: 'underline'
    },
    root: {
        paddingLeft: '100px',
        paddingRight: '100px'
    },
    container: {
        backgroundColor: 'transparent'
    },
    table: {
        backgroundColor: theme.color.darkBlue,
        height: 400,
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
    yellowLabel: {
        display: 'flex',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.lightningYellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    baseLabel: {
        display: 'flex',
        minWidth: '100px',
        maxWidth: '600px',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paginationLabel: {
        display: 'block',
        minWidth: '100px',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '12px',
        textAlign: 'center',
        color: theme.color.white50,
        paddingTop: '10px !important',
        paddingBottom: '10px !important'
    },
    paginationSelect: { position: 'relative', top: 2 },
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
    baseCell: {
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.white30}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    muiTableCell: {
        display: 'block',
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.white30}`,
        flexBasis: '100px',
        flexGrow: 1,
        width: 64
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
        borderBottom: 'none'
    },
    paginationContainer: {
        backgroundColor: theme.color.darkBlue,
        padding: '0 20px !important',
        width: '100%'
    },
    caret: {
        color: theme.color.white50
    },
    pointer: {
        cursor: 'pointer'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    }
};
