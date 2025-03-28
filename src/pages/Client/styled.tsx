import { Chip, Table, Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';
import AddCommentIcon from '@mui/icons-material/AddComment';
import NotificationIcon from '@mui/icons-material/Notifications';

export const S: { [key: string]: React.CSSProperties } = {
    sectionSubtitle: {
        marginBottom: '0.1rem',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        marginRight: '10px',
        color: theme.color.white50,
        textWrap: 'nowrap'
    },
    sectionTitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        color: theme.color.white90,
        marginLeft: '0px',
        marginBottom: '10px'
    },
    chatModalDialogContentSx: {
        margin: 0,
        padding: 0
    },
    chatModalDialogSx: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
};

export const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    height: 'fit-content',
    paddingBottom: 50
});

export const SectionHeader = styled('div')({
    margin: '0px 25px',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 100px',
    justifyContent: 'space-between'
});

export const SectionHeaderLabels = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1100px'
});

export const SectionContentBox = styled(Box)`
    padding: 0 100px 0 100px;
`;

export const TabelWrapper = styled(Table)({
    background: '#1E202A'
});

export const SectionHeaderActions = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 40
});

export const AddRowChip = styled(Chip)`
    && {
        margin-top: 15px;
        background-color: rgba(255, 220, 168, 0.1);
        border-radius: 16px;
        color: ${theme.color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
    }
`;

export const StyledAddCommentIcon = styled(AddCommentIcon)`
    && {
        width: 15px;
        height: 15px;
        fill: ${theme.color.lightningYellow};
    }
`;

export const StyledNotificationIcon = styled(NotificationIcon)`
    && {
        width: 15px;
        height: 15px;
        fill: ${theme.color.lightningYellow};
    }
`;

// export const TabelCellWrapper = styled(TableCell)({
//     fontFamily: 'Inter',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     fontSize: '12px',
//     lineHeight: '15px',
//     color: '#FFFFFFE5',
//     padding: '24px',
//     borderBottom: '0.5px solid #363842'
// });

// export const TabelCellRowWrapper = styled(TabelCellWrapper)({
//     fontWeight: 400,
//     fontSize: '12px',
//     lineHeight: '15px',
//     color: '#FFFFFF80',
//     borderBottom: '0.5px solid #363842'
// });

// export const TablePaginationWrapper = styled(TablePagination)({
//     color: 'white',
//     p: {
//         fontFamily: 'Inter',
//         fontStyle: 'normal',
//         fontWeight: 400,
//         fontSize: '12px',
//         lineHeight: '12px',
//         color: '#FFFFFF80'
//     },
//     '.MuiInputBase-input': {
//         color: '#FFFFFF80'
//     }
// });
