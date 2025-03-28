import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import theme from 'src/theme';

type T = Record<string, React.CSSProperties>;

const S: T = {
    dailogPaperPropsSX: {
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
        marginTop: '18px',
        display: 'flex',
        justifyContent: 'flex-end'
    },

    btnStyle: {
        marginTop: '10px',
        width: '126px',
        borderRadius: '4px',
        height: '42px'
    },
    btnCanStyle: {
        marginTop: '10px',
        marginRight: '10px',
        width: '126px',
        borderRadius: '4px',
        height: '42px'
    },
    btnText: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '17px',
        color: theme.color.white90
    }
};

export const RowBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});
export default S;
