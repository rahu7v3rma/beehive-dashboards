import { FunctionComponent } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WorkHistoryRow from '../WorkHistoryRow';
import {
    IWorkHistory,
    sortWorkHistory,
    titleMapping,
    WorkHistoryHeaders
} from 'src/types/contributors';
import { tableStyles } from './styled';
import { TableCell } from 'src/shared';

export interface Props {
    contributors: IWorkHistory[];
    handleSort: (sortBy: sortWorkHistory) => void;
    sort: string;
    sortBy: sortWorkHistory | null;
}

const WorkHistory: FunctionComponent<Props> = ({
    contributors,
    handleSort,
    sort,
    sortBy
}: Props) => {
    return (
        <TableContainer component={Paper} sx={tableStyles.container}>
            <Table
                stickyHeader
                sx={tableStyles.table}
                aria-label="simple table"
            >
                <TableHead sx={tableStyles.headRow}>
                    <TableRow sx={tableStyles.dataRow}>
                        <TableCell
                            title={WorkHistoryHeaders.ID}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell
                            }}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.NAME}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.firstHeadCell,
                                ...tableStyles.headCell
                            }}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.SKILLS}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.firstHeadCell,
                                ...tableStyles.headCell,
                                ...tableStyles.pointer
                            }}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            titleMapping={titleMapping}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.PROJECT}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCellLg,
                                ...tableStyles.headCell
                            }}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.DURATION}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell,
                                ...tableStyles.pointer
                            }}
                            titleMapping={titleMapping}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.PRICE}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell,
                                ...tableStyles.pointer
                            }}
                            titleMapping={titleMapping}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.ITERATIONS}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell,
                                ...tableStyles.pointer
                            }}
                            titleMapping={titleMapping}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.RATING}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell,
                                ...tableStyles.pointer
                            }}
                            titleMapping={titleMapping}
                        />
                        <TableCell
                            title={WorkHistoryHeaders.STATUS}
                            sortBy={sortBy}
                            handleSort={handleSort}
                            sort={sort}
                            sx={{
                                ...tableStyles.muiTableCell,
                                ...tableStyles.headCell,
                                ...tableStyles.lastHeadCell,
                                ...tableStyles.pointer
                            }}
                            titleMapping={titleMapping}
                        />
                    </TableRow>
                </TableHead>
                <TableBody style={tableStyles.body}>
                    {contributors.map((row, index) => (
                        <WorkHistoryRow row={row} key={index} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WorkHistory;
