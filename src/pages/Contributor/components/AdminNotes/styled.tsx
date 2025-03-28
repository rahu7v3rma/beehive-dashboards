import { styled } from '@mui/system';
import {
    Box,
    Chip,
    IconButton,
    Table,
    TableCell,
    TextField,
    Typography
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import SyncIcon from '@mui/icons-material/Sync';
import theme from 'src/theme';

const HeaderContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 63px;
`;

const TitleContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const titleSX = {
    color: theme.color.white90,
    fontFamily: '"Inter",sans-serif',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px'
};

const subtitleSX = {
    color: theme.color.white50,
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '12px',
    marginTop: '10px'
};

const TableControlsContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-top: 4px;
    padding-bottom: 4px;
`;

const TableEditContainer = styled(Box)`
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const AddRowChip = styled(Chip)`
    && {
        background-color: rgba(255, 220, 168, 0.1);
        border-radius: 16px;
        color: ${theme.color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
    }
`;

const DiscardChip = styled(Chip)`
    && {
        background-color: ${theme.color.lightOrangyRed};
        border-radius: 16px;
        color: ${theme.color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
        margin-left: 5px;
    }
`;

const SaveChip = styled(Chip)`
    && {
        background-color: rgba(147, 255, 120, 0.1);
        border-radius: 16px;
        color: ${theme.color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
        margin-left: 5px;
    }
`;

const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: ${theme.color.lightningYellow};
    }
`;

const StyledSyncIcon = styled(SyncIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: #ff675b;
    }
`;

const StyledCheckCircleOutlineIcon = styled(CheckCircleOutlineIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: ${theme.color.freshGreen};
    }
`;

const SearchInput = styled(TextField)`
    && {
        border: 0.5px solid transparent;
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
        width: 300px;
    }
`;

const searchLabelSX = {
    color: theme.color.white50,
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '18px'
};

const searchInputSX = {
    color: theme.color.white50,
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '18px'
};

const StyledSearchIcon = styled(SearchIcon)`
    color: ${theme.color.white70};
    width: 20px;
    height: 20px;
`;

const EditChip = styled(Chip)`
    && {
        background-color: rgba(255, 220, 168, 0.1);
        border-radius: 16px;
        color: ${theme.color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
        margin-left: 35px;
    }
`;

const StyledEditIcon = styled(EditIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: ${theme.color.lightningYellow};
    }
`;

const tableContainerSX = {
    marginTop: '20px',
    backgroundColor: '#1E202A',
    paddingX: '20px'
};

const StyledTable = styled(Table)`
    min-width: 650px;
`;

const TableHeadCell = styled(TableCell)`
    &.MuiTableCell-root {
        border-bottom: 0.5px solid #363842;
    }
    && {
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        padding: 25px;
        width: 10%;
    }
`;

const TableBodyCell = styled(TableCell)<{ width: number }>`
    &.MuiTableCell-root {
        border-bottom: 0.5px solid #363842;
    }
    && {
        color: rgba(255, 255, 255, 0.5);
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 15px;
        padding: 25px;
        width: ${(a) => a.width}%;
    }
`;

const RowInput = styled(TextField)`
    && {
        border: 0.5px solid rgba(255, 255, 255, 0.3);
        width: 100%;
    }
    && ::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(90%) hue-rotate(180deg);
    }
`;

const rowInputSX = {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '18px'
};

const RowEditBox = styled(Box)`
    display: flex;
`;

const StyledIconButton = styled(IconButton)`
    && {
        width: 35px;
        height: 35px;
        border-radius: 35px;
        background-color: rgba(255, 220, 168, 0.1);
        margin-left: 5px;
    }
`;

const StyledRowEditIcon = styled(EditIcon)`
    && {
        fill: ${theme.color.lightningYellow};
        transform: scale(0.7);
    }
`;

const StyledContentCopyIcon = styled(ContentCopyIcon)`
    && {
        transform: scale(0.6);
        fill: ${theme.color.lightningYellow};
        position: relative;
        left: 1px;
    }
`;

const StyledDeleteOutlineIcon = styled(DeleteOutlineIcon)`
    && {
        transform: scale(0.8);
        fill: ${theme.color.orangyRed};
    }
`;

const tablePaginationSX = {
    '& .MuiTablePagination-select': { position: 'relative', top: 2 },
    '& .MuiSelect-icon': { fill: 'rgba(255, 255, 255, 0.5)' },
    marginY: '25px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '12px'
};

const tablePaginationItems = {
    MenuProps: {
        sx: {
            '.MuiPaper-root': {
                backgroundColor: theme.color.darkBlue,
                color: theme.color.white70
            }
        }
    }
};

const SortableTableHead = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font:
        500 12px/15px 'Inter',
        sans-serif;
`;

const SaveLoaderContainer = styled(Box)`
    margin-left: 8px;
    display: flex;
    align-items: center;
    width: 72px;
    height: 32px;
    justify-content: center;
`;

const S = {
    AddRowChip,
    DiscardChip,
    EditChip,
    HeaderContainer,
    RowEditBox,
    RowInput,
    rowInputSX,
    SaveChip,
    SearchInput,
    searchInputSX,
    searchLabelSX,
    StyledAddCircleOutlineIcon,
    StyledCheckCircleOutlineIcon,
    StyledContentCopyIcon,
    StyledDeleteOutlineIcon,
    StyledEditIcon,
    StyledIconButton,
    StyledRowEditIcon,
    StyledSearchIcon,
    StyledSyncIcon,
    StyledTable,
    subtitleSX,
    TableBodyCell,
    tableContainerSX,
    TableControlsContainer,
    TableEditContainer,
    TableHeadCell,
    tablePaginationSX,
    tablePaginationItems,
    TitleContainer,
    titleSX,
    SortableTableHead,
    SaveLoaderContainer
};

export default S;
