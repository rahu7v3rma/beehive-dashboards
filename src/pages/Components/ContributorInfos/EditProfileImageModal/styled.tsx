import { Box } from '@mui/material';
import { styled } from '@mui/system';
import color from 'src/theme/color';

export const StyledBox = styled(Box)({
    flex: 1,
    display: 'flex',
    marginRight: '25%',
    marginLeft: '25%',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 0
});

export const btnText = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '17px',
    color: color.white90
};

export const btnStyle = {
    marginTop: '10px',
    width: '126px',
    borderRadius: '4px',
    height: '42px'
};

export const btnCanStyle = {
    marginTop: '10px',
    marginRight: '10px',
    width: '126px',
    borderRadius: '4px',
    height: '42px'
};

export const RowBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});
