import React from 'react';
import theme from 'src/theme';

type T = Record<string, React.CSSProperties>;

const S: T = {
    dailogPaperPropsSX: {
        minWidth: 500,
        minHeight: 445,
        backgroundColor: theme.color.darkBlue
    },
    modalTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: '"Inter",sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        marginTop: '25px',
        marginLeft: '10px',
        color: theme.color.white90
    },
    modalContent: {
        marginTop: '18px'
    }
};

export default S;
