import { Box, styled } from '@mui/material';

import color from 'src/theme/color';
import { TextField } from '@mui/material';
import Switch from '@mui/material/Switch';

export const Wrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    height: 'calc(100% - 64px)',
    paddingTop: '18px',
    flexDirection: 'column'
});

export const Title = styled(Box)({
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: color.darkBlue,
    padding: '24px 16px',
    marginBottom: '12px'
});

export const Description = styled(Box)({
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: color.darkBlue,
    padding: '24px 16px',
    marginBottom: '40px'
});

export const RawInput = styled(TextField)(({
    inputerror
}: {
    inputerror: string | undefined;
}) => {
    return {
        width: '100%',
        ':hover': {
            '& label': {
                color: inputerror ? 'red' : 'green'
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: inputerror ? 'red !important' : color.yellow60
            }
        },
        '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
                borderColor: color.lightningYellow
            }
        },
        '& .MuiFormLabel-root': {
            visibility: 'hidden'
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: color.lightningYellow
            }
        },
        '& .MuiInputBase-input.Mui-disabled': {
            color: 'white !important',
            WebkitTextFillColor: 'white'
        }
    };
});

export const AnalyzeBox = styled(Box)({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
});

export const SxDescription1 = {
    marginBottom: '12px',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19px',
    color: color.white
};

export const SxDescription2 = {
    marginBottom: '24px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const SxTitle = {
    color: color.white90,
    fontFamily: '"Inter",sans-serif',
    position: 'relative',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '23px'
};

export const SxDescriptionTask = {
    color: color.white90,
    fontFamily: '"Inter",sans-serif',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '23px'
};

export const SxAnalyze = {
    marginRight: '8px',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '17px',
    color: color.white90
};

export const SxFooter1 = {
    marginTop: '12px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const SxFooter2 = {
    marginBottom: '10px',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '15px',
    color: color.white50
};

export const CustomLabel = styled('label')({
    backgroundColor: color.darkBlue,
    position: 'absolute',
    transform: 'translate(14px, -9px) scale(0.75)',
    transformOrigin: 'top left',
    color: color.yellow60,
    zIndex: '1',
    left: '10px',
    padding: '0px 4px'
});

export const RichTextLabel = styled('label')({
    backgroundColor: color.darkBlue,
    fontFamily: '"Inter",sans-serif',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '23px',
    color: color.yellow60,
    zIndex: '1'
});

export const RichTextSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: color.lightningYellow
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: color.lightningYellow
    }
}));
