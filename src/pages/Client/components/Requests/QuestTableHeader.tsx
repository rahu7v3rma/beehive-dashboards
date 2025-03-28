import { FunctionComponent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TooltipWrapper, tableStyles } from 'src/shared/Table/styled';
import { Label } from 'src/shared';
import SortIcon from 'src/utils/SortIcon';

export interface Props {
    handleSort: (sortBy: string) => void;
    sortBy: string;
    sort: 'asc' | 'desc';
}

const Requests: FunctionComponent<Props> = ({
    handleSort,
    sortBy,
    sort
}: Props) => {
    return (
        <TableHead sx={tableStyles.headRow}>
            <TableRow sx={tableStyles.dataRow}>
                <TableCell
                    sx={{
                        ...tableStyles.muiTableCell,
                        ...tableStyles.headCell,
                        ...tableStyles.rowView
                    }}
                    onClick={() => handleSort('title')}
                >
                    <Label component="span" sxOverrides={tableStyles.baseLabel}>
                        Title
                        {sortBy === 'title' && <SortIcon sort={sort} />}
                    </Label>
                </TableCell>
                <TableCell
                    sx={{
                        ...tableStyles.muiTableCell,
                        ...tableStyles.headCell,
                        ...tableStyles.rowView
                    }}
                    onClick={() => handleSort('dateCreated')}
                >
                    <Label component="span" sxOverrides={tableStyles.baseLabel}>
                        Date Created
                        {sortBy === 'dateCreated' && <SortIcon sort={sort} />}
                    </Label>
                </TableCell>
                <TableCell
                    sx={{
                        ...tableStyles.muiTableCell,
                        ...tableStyles.headCell,
                        ...tableStyles.rowView
                    }}
                    onClick={() => handleSort('netTime')}
                >
                    <TooltipWrapper
                        title={
                            <Label sxOverrides={{ color: 'white' }}>
                                Net times takes up to 48 hours to update, it
                                does not include QA and tech lead time.
                            </Label>
                        }
                        arrow
                    >
                        <div>
                            <Label
                                component="span"
                                sxOverrides={tableStyles.baseLabel}
                            >
                                Net Contributors Time
                                {sortBy === 'netTime' && (
                                    <SortIcon sort={sort} />
                                )}
                            </Label>
                        </div>
                    </TooltipWrapper>
                </TableCell>
                <TableCell
                    sx={{
                        ...tableStyles.muiTableCell,
                        ...tableStyles.headCell,
                        ...tableStyles.rowView
                    }}
                    onClick={() => handleSort('status')}
                >
                    <Label component="span" sxOverrides={tableStyles.baseLabel}>
                        Status
                        {sortBy === 'status' && <SortIcon sort={sort} />}
                    </Label>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default Requests;
