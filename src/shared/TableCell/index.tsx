import React from 'react';
import TableCell from '@mui/material/TableCell';

import { tableStyles } from './styled';
import { Label } from 'src/shared';
import SortIcon from 'src/utils/SortIcon';

interface Props<sortItems> {
    title: string;
    handleSort?: (sortBy: sortItems) => void;
    sortBy?: sortItems | null;
    sort?: string;
    sx?: React.CSSProperties;
    titleMapping?: { [key: string]: sortItems };
}

function TableCellS<sortItems>({
    title,
    handleSort,
    sortBy,
    sort,
    sx = {},
    titleMapping = {}
}: Props<sortItems>) {
    return (
        <TableCell
            sx={{
                ...tableStyles.muiTableCell,
                ...tableStyles.headCell,
                ...tableStyles.centerItems,
                ...sx
            }}
            onClick={() =>
                handleSort ? handleSort(titleMapping[title]) : undefined
            }
        >
            <Label component="span" sxOverrides={tableStyles.baseLabel}>
                {title}
                {sort && sortBy && sortBy === titleMapping[title] && (
                    <SortIcon sort={sort} />
                )}
            </Label>
        </TableCell>
    );
}

export default TableCellS;
