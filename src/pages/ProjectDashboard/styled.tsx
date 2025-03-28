import {
    Chip,
    Select,
    TableCell,
    Table,
    TablePagination,
    Box
} from '@mui/material';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import theme from '../../theme';
import { CProps } from './components/TaskQueue';

export const EntriesWrapper = styled('div')({
    marginTop: 50,
    paddingLeft: 50,
    height: '800px',
    overflowY: 'scroll'
});

export const InputWrapper = styled('div')({
    marginTop: '50px',
    width: '500px',
    marginLeft: '50px'
});

export const SelectWrapper = styled(Select)({
    width: '200px',
    height: '0px !important',
    marginBottom: '20px',
    color: 'white',
    '.MuiSelect-root': {
        margin: '0px'
    }
});

export const ProjectActivityBox = styled(Box)({
    height: '385px',
    display: 'flex',
    marginTop: '48px',
    width: '100%',
    marginBottom: '60px',
    paddingLeft: '100px'
});

export const DetailsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginTop: '83px',
    paddingLeft: '100px',
    paddingRight: '100px'
});

export const ChipWrapper = styled(Chip)({
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    background: theme.color.darkMintGreen,
    color: theme.color.freshGreen
});

export const FlexWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%'
});

export const FlexWrapperColumn = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    width: '30%'
});

export const AvatarWithText = styled('div')({
    display: 'flex',
    alignItems: 'center',
    width: '25%'
});

export const labelStyle = {
    marginBottom: '0.1rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
    marginRight: '10px',
    color: theme.color.white50,
    wordWrap: 'break-word',
    pl: 1
};

export const boardNameStyle = {
    ...labelStyle,
    marginLeft: '12px'
};

export const projectText = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    color: theme.color.white90,
    marginBottom: '-25px'
};

export const projectTextValue = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    color: theme.color.white90,
    marginTop: '16px'
};

export const HistoryText = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    color: theme.color.white90,
    marginLeft: '0px',
    marginBottom: '10px'
};

export const HistoryTextAlign = styled('div')({
    margin: '0px 25px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '48px',
    padding: '0 100px',
    maxWidth: '700px',
    marginBottom: '-50px'
});

export const TabelWrapper = styled(Table)({
    background: '#1E202A'
});

export const TabelCellWrapper = styled(TableCell)({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#FFFFFFE5',
    padding: '24px',
    borderBottom: '0.5px solid #363842'
});

export const TabelCellRowWrapper = styled(TabelCellWrapper)({
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#FFFFFF80',
    borderBottom: '0.5px solid #363842'
});

export const TablePaginationWrapper = styled(TablePagination)({
    color: 'white',
    p: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        color: '#FFFFFF80'
    },
    '.MuiInputBase-input': {
        color: '#FFFFFF80'
    }
});

export const ProjectActivityCard = styled(Card)({
    backgroundColor: theme.color.darkBlue,
    marginBottom: 43,
    height: '385px',
    width: '74%'
});

export const Container = styled('div')({
    backgroundColor: theme.color.darkBlue,
    color: theme.color.white,
    width: '13%',
    height: '385px',
    marginRight: '15px',
    display: 'flex',
    flexDirection: 'column'
});

export const ChartWrapper = styled('div')({
    width: '100px',
    height: '100px',
    marginLeft: '36px'
});

export const LegendWrapper = styled('div')({
    backgroundColor: theme.color.darkGray,
    color: theme.color.white,
    cursor: 'pointer',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '12px',
    paddingTop: '7px',
    minWidth: '140px',
    width: '118px',
    height: '32px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '16px',
    lineHeight: '18px'
});

export const LegendVerticalWrapper = styled(LegendWrapper)({
    marginRight: '10px'
});

export const LegendContent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    minWidth: '140px',
    width: '74px',
    height: '18px',
    paddingLeft: '6px',
    flexGrow: 0,
    font: "12px/18px 'Inter',sans-serif !important",
    color: theme.color.white90
});

export const LegendContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '4px',
    marginTop: '18px',
    justifyContent: 'space-between'
});

export const LegendDot = styled('div')(({ color }: CProps) => ({
    backgroundColor: color,
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    marginTop: '3px',
    marginLeft: '10px',
    marginRight: '3px',
    top: '50%'
}));

export const LegendVerticalContainer = styled(LegendContainer)({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '10px',
    marginTop: '5px'
});

export const ActivityWrapper = styled('div')({
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center'
});

export const StatusIcons = styled('div')(({ color }: CProps) => ({
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    background: color,
    marginLeft: '15px'
}));

export const BudgetReviewBox = styled(Box)`
    padding: 0 100px 0 100px;
`;
