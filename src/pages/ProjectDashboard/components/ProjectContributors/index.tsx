import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContributorRow from '../ContributorsRow';
import { tableStyles } from './styled';
import { Label, SearchInputWrapper } from 'src/shared';
import {
    TableControlsContainer,
    TableEditContainer
} from 'src/pages/Community/CommunityContributors/styled';
import SortIcon from 'src/utils/SortIcon';
import { IProjectContributor, IProjectData } from 'src/types/projects';

export interface Props {
    projectData: IProjectData;
    handleSort: (sortBy: string) => void;
    sort: string;
    sortBy: string | null;
}

const ProjectContributors: FunctionComponent<Props> = ({
    projectData,
    handleSort,
    sort,
    sortBy
}: Props) => {
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(20);
    const pageStart = page * rowsPerPage;
    const pageEnd = (page + 1) * rowsPerPage - 1;
    const contributors = projectData?.contributors;

    const filteredContributors = useMemo(() => {
        if (search && contributors) {
            const lowercaseQuery = search.toLowerCase();
            const filteredRows = contributors.filter(
                (row: IProjectContributor) =>
                    row.name.toLowerCase().includes(lowercaseQuery)
            );
            return filteredRows;
        } else {
            return contributors || [];
        }
    }, [search, contributors]);

    useEffect(() => {
        setPage(0);
    }, [search, contributors]);

    const contributorsSlice = filteredContributors.slice(pageStart, pageEnd);
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
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
                                    ...tableStyles.firstHeadCell,
                                    ...tableStyles.headCell
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Name
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Country
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('active')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Active
                                    {sortBy === 'active' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.headCellLg,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('lastWork')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Last work
                                    {sortBy === 'lastWork' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.headCellXl,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('lastEngagement')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Last Engagement
                                    {sortBy === 'lastEngagement' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.headCellMd,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('reservedWorks')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Reserved works
                                    {sortBy === 'reservedWorks' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.headCellMd,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('worksInReview')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Works in review
                                    {sortBy === 'worksInReview' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.pointer
                                }}
                                onClick={() => handleSort('hourlyRate')}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Hourly rate
                                    {sortBy === 'hourlyRate' && (
                                        <SortIcon sort={sort} />
                                    )}
                                </Label>
                            </TableCell>
                            <TableCell
                                sx={{
                                    ...tableStyles.muiTableCell,
                                    ...tableStyles.headCell,
                                    ...tableStyles.lastHeadCell
                                }}
                            >
                                <Label
                                    component="span"
                                    sxOverrides={tableStyles.baseLabel}
                                >
                                    Skills
                                </Label>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={tableStyles.body}>
                        {contributorsSlice.map((row, i) => (
                            <ContributorRow row={row} key={i} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{
                    ...tableStyles.pagination,
                    ...tableStyles.paginationLabel,
                    ' svg': tableStyles.caret,
                    '& .MuiTablePagination-select': tableStyles.paginationSelect
                }}
                component="div"
                count={filteredContributors.length}
                page={page}
                rowsPerPageOptions={[5, 20, 50, 100]}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default ProjectContributors;
