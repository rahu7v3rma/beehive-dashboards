import { Select } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'src/theme';
import color from 'src/theme/color';

export const MyDropDown = styled(Select)({
    background: `${theme.color.darkBlue} !important`,
    border: 0,
    borderRadius: '16px !important',
    color: 'red !important',
    maxWidth: 'fit-content !important',
    minWidth: '200px',
    padding: '7px 15px !important',
    fontSize: '12px !important',
    lineHeight: '18px !important',
    fontWeight: '400 !important',
    fontFamily: 'Inter !important',
    height: '32px !important',

    '& .MuiSelect-select': {
        borderBottomWidth: 0,
        border: 0,
        paddingRight: '20px !important',
        padding: '16.5px 0'
    },
    '& .MuiSelect-icon': {
        color: theme.color.white30
    },
    '& .MuiInputBase-input.Mui-disabled': {
        WebkitTextFillColor: '#000000'
    }
});

export const CustomInputRow = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
});

export const SaveButton = styled('div')({
    position: 'absolute',
    right: 10
});

export const customTextFieldMenuItem = {
    backgroundColor: 'transparent',
    paddingLeft: '0px',
    paddingRight: '0px'
};

export const inputStyle = {
    border: 'none',
    color: color.white,
    padding: '10px 10px 10px 18px',
    marginBottom: '0px'
};

export const buttonStyle = {
    width: '40px',
    height: '20px',
    borderRadius: '100px',
    color: color.lightningYellow,
    fontSize: '10px',
    fontWeight: '500'
};
