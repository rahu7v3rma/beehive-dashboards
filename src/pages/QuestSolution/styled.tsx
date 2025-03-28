import { Box, styled } from '@mui/material';
import theme from 'src/theme';

export const S: { [key: string]: React.CSSProperties } = {
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19.36px',
        color: theme.color.white90
    },
    subTitleFirst: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white50
    },
    subTitleSecond: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white70,
        paddingLeft: 0.5
    },
    description: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white30
    },
    submitBtnDisabled: {
        borderRadius: 18,
        width: 100,
        height: 36,
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '0.16px',
        color: theme.color.darkMintYellow,
        backgroundColor: theme.color.blackRock
    },
    submitBtnEnabled: {
        borderRadius: 18,
        width: 100,
        height: 36,
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '0.16px',
        color: theme.color.white,
        backgroundColor: theme.color.lightningYellow
    },
    errorMsg: {
        color: theme.color.red,
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10
    },
    apiResult: {
        color: theme.color.green,
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10
    },
    fieldset: {
        border: `1px solid ${theme.color.blackRock}`,
        borderRadius: '4px',
        marginTop: '10px',
        padding: '0px',
        position: 'relative',
        display: 'inline-block',
        width: '100%'
    },
    legend: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white50
    },
    input: {
        backgroundColor: theme.color.blackRock,
        padding: '20px',
        color: theme.color.white90,
        border: `0.5px solid ${theme.color.white10}`,
        paddingRight: '2rem'
    },
    prBtnEnabled: {
        width: '110px',
        height: '20px',
        fontFamily: 'Inter',
        fontSize: '10px',
        fontWeight: 500,
        lineHeight: '12.1px',
        color: theme.color.lightningYellow,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        borderRadius: 80
    },
    prBtnDisabled: {
        width: '110px',
        height: '20px',
        fontFamily: 'Inter',
        fontSize: '10px',
        fontWeight: 500,
        lineHeight: '12.1px',
        color: theme.color.blackRock,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        borderRadius: 80,
        backgroundColor: theme.color.darkMintYellow
    },
    addMessageIcon: {
        paddingLeft: 5
    },
    editor: {
        backgroundColor: theme.color.blackRock,
        boxShadow: 'none',
        color: theme.color.white90,
        border: `0.5px solid ${theme.color.white10}`
    },
    deleteLabel: {
        position: 'absolute',
        right: '0.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer'
    }
};

export const RootBox = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 80px;
    margin-right: 80px;
`;

export const RequestTitleBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 15px;
    background-color: ${theme.color.blackRock};
    border-radius: 8px;
    padding: 16px;
`;

export const Fieldset = styled('fieldset')``;
export const Legend = styled('legend')``;
export const NotesFieldset = styled('fieldset')`
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
`;
export const NotesLegend = styled('legend')`
    margin-left: 12px;
`;
export const ErrorBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: ${theme.color.red};
    font-weight: 300;
`;
export const RatingSection = styled(Box)`
    align-items: center;
    background-color: ${theme.color.blackRock};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 10px;
    width: 15%;
    text-align: center;
    margin-bottom: 10px;
`;
