import React from 'react';
import theme from 'src/theme';
import { styled, Box } from '@mui/material';

export const tableStyles: { [key: string]: React.CSSProperties } = {
    root: {
        paddingLeft: '100px',
        paddingRight: '100px',
        marginTop: '30px',
        paddingBottom: '13px'
    },
    container: {
        backgroundColor: theme.color.darkBlue,
        maxHeight: '700px',
        padding: '0px 20px'
    },
    table: {
        backgroundColor: theme.color.darkBlue,
        minWidth: 650,
        height: 700,
        overflowY: 'scroll',
        overflowX: 'hidden'
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
    headLabel: {
        display: 'flex',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    dataLabel: {
        display: 'flex',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '18px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paginationLabel: {
        display: 'block',
        minWidth: '100px',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        textAlign: 'center',
        padding: 0,
        color: theme.color.white90
    },
    statusCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flagCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headCell: {
        padding: '24px 0',
        position: 'relative'
    },
    headCellXs: { flexBasis: '60px', flexGrow: 0.6 },
    headCellXsPlus: { flexBasis: '75px', flexGrow: 0.75 },
    headCellXsmall: { flexBasis: '50px', flexGrow: 0.75 },
    headCellMd: { flexBasis: '100px', flexGrow: 1 },
    headCellMdPlus: { flexBasis: '120px', flexGrow: 1.2 },
    headCellLg: { flexBasis: '125px', flexGrow: 1.25 },
    headCellLgPlus: { flexBasis: '100px', flexGrow: 1.3 },
    headCellXl: { flexBasis: '140px', flexGrow: 1.4 },
    headCellXlPlus: { flexBasis: '100px', flexGrow: 2 },
    muiTableCell: {
        display: 'block',
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.white30}`
    },
    dataCell: {
        fontWeight: 400,
        lineHeight: '18px',
        color: theme.color.white50,
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    dataCellPadding: {
        padding: '22px 0'
    },
    pagination: {
        backgroundColor: theme.color.darkBlue,
        color: theme.color.white50,
        font: '12px/12px "Inter",sans-serif'
    },
    paginationContainer: {
        backgroundColor: theme.color.darkBlue,
        padding: '0 20px !important',
        margin: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    caret: {
        color: theme.color.white50
    },
    pointer: {
        cursor: 'pointer'
    },
    underline: {
        textDecoration: 'underline !important'
    },
    paginationSelectLabel: {
        position: 'relative',
        top: '1.62px'
    },
    titleSX: {
        color: theme.color.white90,
        fontFamily: '"Inter",sans-serif',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '19px'
    },
    subtitleSX: {
        color: theme.color.white50,
        fontFamily: '"Inter",sans-serif',
        fontSize: 12,
        lineHeight: '12px',
        marginTop: '10px'
    }
};

export const sortIconStyles = {
    m: 0,
    p: 0,
    width: 15,
    height: 15,
    marginLeft: '2px',
    cursor: 'pointer'
};

export const statusStyles = (color: string) => {
    return {
        width: '11px',
        height: '11px',
        color
    };
};

export const Header = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    min-width: 650;
    position: relative;
`;

export const TitleContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const TableControlsContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-top: 4px;
    padding-bottom: 4px;
`;

export const TableEditContainer = styled(Box)`
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
