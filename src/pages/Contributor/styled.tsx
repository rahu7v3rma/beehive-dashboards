import { Box, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'src/theme';
import color from 'src/theme/color';

export const Container = styled('div')({
    padding: '0px'
});

export const SkillWrapperBox = styled('div')({
    padding: '36px'
});

export const ContributorLinkContainer = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: '100px',
    marginTop: '60px',
    marginBottom: '1.5px',
    justifyContent: 'space-between',
    width: '200px'
});

export const MarginOnXaxis = styled('div')({
    marginRight: '50px',
    marginLeft: '30px'
});

export const RowBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const StyledTextField = styled(TextField)`
    && {
        color: ${() => theme.color.white};
        display: flex;
        align-self: flex-end;
        margin-bottom: 15px;
        width: 300px;
    }

    & > div {
        &::before {
            border-bottom-color: ${() => theme.color.white30};
        }
    }
`;

export const TextFieldInputPropStyle = {
    fontFamily: 'Inter',
    color: theme.color.white,
    borderBottomColor: theme.color.white30,
    fontSize: '12px',
    lineHeight: '18px'
};

export const SearchIcon = {
    width: '20px',
    height: '20px'
};

export const HistoryTextAlign = styled('div')({
    margin: '25px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '48px'
});

export const GridStyle = styled(Grid)({
    justifyContent: 'start',
    backgroundColor: color.darkBlue,
    padding: '10px'
});
