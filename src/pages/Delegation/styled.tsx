import { Box, styled, TextField } from '@mui/material';
import theme from 'src/theme';
import color from 'src/theme/color';

export const RootBox = styled(Box)`
    padding: 128px 324px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SectionBox = styled(Box)`
    margin-top: 48px;
    width: 100%;
`;

export const SectionBoxNoMargin = styled(Box)`
    margin-top: 0px;
    width: 100%;
`;

export const delegateTitle = {
    font: '600 16px/19px "Inter",sans-serif !important',
    color: theme.color.white90,
    display: 'block',
    margin: '0px 0 12px 0px'
};

export const orLabel = {
    font: '600 16px/19px "Inter",sans-serif !important',
    color: color.lightningYellow,
    display: 'block',
    margin: '20px 0px 0px 0px'
};

export const delegateSubtitle = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white50,
    marginBottom: '20px'
};

export const RepoPickerBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    margin-top: 30px;
`;

export const ShortLongInputBox = styled(Box)`
    position: relative;
    width: 900px;
    height: 50px;
    margin-top: 30px;
`;

export const ShortLongSendBtnWrapper = styled(Box)`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
`;

export const ShortLongSendBtn = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 25px;
    transform: translate(-150%, -50%);
    cursor: pointer;
`;

export const QaSwitchWrapper = styled(Box)`
    margin-top: 24px;
    padding: 28px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;

export const Image = styled('img')(() => ({
    height: '330px',
    verticalAlign: 'middle',
    width: '447px'
}));

export const repoTitle = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white50
};

export const RawInput = styled(TextField)({
    width: '100%',
    borderRadius: '8px',
    background: color.blackRock,
    '& .MuiFilledInput-input': {
        color: color.white90,
        fontFamily: 'Inter !important',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '13px',
        lineHeight: '23px'
    },
    '& label': {
        fontSize: '12px',
        fontFamily: 'Inter !important',
        background: color.yellowText,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: color.lightningYellow
    }
});
