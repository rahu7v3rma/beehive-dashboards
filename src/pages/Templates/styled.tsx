import { styled } from '@mui/system';
import { Box, Chip, Table, TableCell, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import color from 'src/theme/color';

export const RootBox = styled(Box)`
    padding: 128px 100px;
`;

export const TitleBox = styled('div')`
    width: fit-content;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SxDescription1 = {
    width: 'fit-content',
    margin: '0px 0px 10px',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19px',
    color: color.white
};

export const SxDescription2 = {
    width: 'fit-content',
    fontFamily: 'Inter',
    fontSize: '12px',
    lineHeight: '15px',
    color: color.white50
};

export const AddRowChip = styled(Chip)`
    && {
        margin-left: 200px;
        margin-right: 20px;
        background-color: rgba(255, 220, 168, 0.1);
        border-radius: 16px;
        color: ${color.lightningYellow};
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 18px;
        padding-right: 4px;
    }
`;

export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
    && {
        width: 20px;
        height: 20px;
        fill: ${color.lightningYellow};
    }
`;

const tableContainerSX = {
    marginTop: '20px',
    backgroundColor: color.darkBlue,
    paddingX: '20px'
};

const StyledTable = styled(Table)`
    min-width: 650px;
`;

const TableHeadCell = styled(TableCell)`
    &.MuiTableCell-root {
        border-bottom: 0.5px solid ${color.tuna};
    }
    && {
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        padding: 16px;
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
        padding: 16px 0px;
        width: ${(a) => a.width}%;
    }
`;

const tablePaginationSX = {
    '& .MuiTablePagination-select': { position: 'relative', top: 2 },
    '& .MuiSelect-icon': { fill: 'rgba(255, 255, 255, 0.5)' },
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: '"Inter",sans-serif',
    fontSize: 12,
    lineHeight: '12px'
};

const tablePaginationItems = {
    MenuProps: {
        sx: {
            '.MuiPaper-root': {
                backgroundColor: color.darkBlue,
                color: color.white70
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

const S = {
    StyledTable,
    TableBodyCell,
    tableContainerSX,
    TableHeadCell,
    tablePaginationSX,
    tablePaginationItems,
    SortableTableHead
};

export default S;
