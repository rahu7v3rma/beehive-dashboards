import React from 'react';
import theme from 'src/theme';

export const tableStyles: { [key: string]: React.CSSProperties } = {
    centerItems: {
        display: 'flex',
        justifyContent: 'center'
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
    headCell: {
        padding: '24px 0'
    },
    muiTableCell: {
        display: 'block',
        backgroundColor: theme.color.darkBlue,
        borderBottom: `0.5px solid ${theme.color.tuna}`,
        flexBasis: '100px',
        flexGrow: 1
    },
    pointer: {
        cursor: 'pointer'
    }
};
