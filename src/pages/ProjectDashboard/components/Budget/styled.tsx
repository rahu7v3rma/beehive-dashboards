import { Box } from '@mui/material';
import { styled } from '@mui/system';
import color from 'src/theme/color';
import theme from 'src/theme/index';

export const Container = styled(Box)({
    backgroundColor: `${theme.color.darkBlue}`,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '35px',
    padding: '36px',
    width: '25%'
});

export const TitleContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row'
});

export const Divider = styled(Box)({
    backgroundColor: `${theme.color.tuna}`,
    height: '1px',
    marginTop: '10px',
    width: '100%'
});

export const RowView = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '28px'
});

export const GridView = styled(Box)({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '40px'
});

export const ColumnView = styled(Box)({
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
});

export const MiddleColumnView = styled(Box)({
    alignItems: 'center',
    display: 'flex',
    flex: 1.5,
    flexDirection: 'column'
});

export const VerticalDivider = styled(Box)({
    backgroundColor: `${theme.color.tuna}`,
    height: '30px',
    width: '1px'
});

export const dividerStyle = {
    marginTop: '35px'
};

export const marginText = {
    marginTop: '10px'
};

export const titleText = {
    color: color.white90,
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600'
};

export const colorTitleText = {
    color: color.pirateGold,
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    marginLeft: '28px'
};

export const avgTaskText = {
    color: color.white90,
    fontFamily: 'Inter',
    fontSize: '12px'
};

export const avgTaskColorText = {
    color: color.pirateGold,
    fontFamily: 'Inter',
    fontSize: '12px'
};

export const offWhiteText = {
    color: color.white50,
    fontFamily: 'Inter',
    fontSize: '10px'
};

export const whiteText = {
    color: color.white,
    fontFamily: 'Inter',
    fontSize: '12px'
};

export const white90Text = {
    color: color.white90,
    fontFamily: 'Inter',
    fontSize: '12px'
};
