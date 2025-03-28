import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import DelayedRow from '../../pages/ProjectDashboard/components/DelayedWorkRow';
import { tableStyles } from './styled';
import { Label, SearchInputWrapper } from 'src/shared';
import { ReactComponent as TrelloIcon } from 'src/assets/icons/trello-icon.svg';
import { ReactComponent as AppLogo } from 'src/assets/icons/small-app-logo.svg';
import {
    TableControlsContainer,
    TableEditContainer
} from 'src/pages/Community/CommunityContributors/styled';
import {
    IProjectData,
    IProjectDelayedTask,
    ITaskTrelloLink
} from 'src/types/projects';

export interface Props {
    projectData: IProjectData;
    setTrelloLinks: (links: ITaskTrelloLink[] | null) => void;
}

const DelayedTask: FunctionComponent<Props> = ({
    projectData,
    setTrelloLinks
}: Props) => {
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPageWorkDelay] = useState<number>(10);
    const delayedTasks = projectData?.delayedTasks;

    const filteredTasks = useMemo(() => {
        if (search) {
            const lowercaseQuery = search.toLowerCase();
            const filteredRows = (delayedTasks || []).filter(
                (row: IProjectDelayedTask) =>
                    row.taskName?.toLowerCase().includes(lowercaseQuery)
            );
            return filteredRows;
        } else {
            return delayedTasks;
        }
    }, [search, delayedTasks]);

    useEffect(() => {
        setPage(0);
    }, [search, delayedTasks]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setSearch(input);
    };

    const handleChangePage = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        pageChanged: number
    ) => {
        setPage(pageChanged);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPageWorkDelay(parseInt(event.target.value, 10));
        setPage(0);
    };

    const delayedTaskSlice = (filteredTasks || []).slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage - 1
    );
    return (
        <Box sx={tableStyles.root}>
            <TableControlsContainer sx={tableStyles.tableControls}>
                <TableEditContainer>
                    <SearchInputWrapper
                        search={search}
                        handleSearch={handleSearch}
                    />
                </TableEditContainer>
            </TableControlsContainer>
            <TableContainer component={Paper} sx={tableStyles.container}>
                <Table
                    stickyHeader
                    sx={tableStyles.table}
                    aria-label="simple table"
                >
                    <TableHead sx={tableStyles.headRow}>
                        <TableRow sx={tableStyles.dataRow}>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Time created
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Task name
                                </Label>
                                <Box sx={{ width: '5px' }} />
                                <TrelloIcon />
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Task ID
                                </Label>
                                <Box sx={{ width: '5px' }} />
                                <AppLogo />
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Skill type
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Task status
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Billable time
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Priority
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.rowView,
                                    ...tableStyles.pointer
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Last updated
                                </Label>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={tableStyles.body}>
                        {delayedTaskSlice.map((row, i) => (
                            <DelayedRow
                                row={row}
                                key={i}
                                setTrelloLinks={setTrelloLinks}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                sx={{
                    ...tableStyles.pagination,
                    ...tableStyles.paginationLabel,
                    ' svg': tableStyles.caret,
                    '& .MuiTablePagination-select': tableStyles.paginationSelect
                }}
                count={(filteredTasks || []).length}
                page={page}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default DelayedTask;
