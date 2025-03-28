import { Box, TablePagination } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsCommunityContributorsLoading } from 'src/redux/community-contributors/selectors';
import { Label, Loader, SearchInputWrapper } from 'src/shared';
import ContributorRow from '../ContributorsRow';
import { Header, tableStyles, TitleContainer } from './styled';
import { StyledToolTip } from './components';
import SortIcon from 'src/utils/SortIcon';
import { IContributorBreakdown } from 'src/types/community';

export type Props = {
    contributors: IContributorBreakdown[];
};

const CommunityContributors: FunctionComponent<Props> = (props: Props) => {
    const { contributors } = props;
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [sort, setSort] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('');

    const isLoading = useSelector(getIsCommunityContributorsLoading);

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

    const [totalContributors, setTotalContributors] = useState<
        IContributorBreakdown[]
    >([]);
    useEffect(() => {
        setTotalContributors(contributors);
    }, [contributors]);

    const [search, setSearch] = useState<string>('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setSearch(input);

        if (input) {
            const lowercaseQuery = input.toLowerCase();
            const allRows = structuredClone(contributors);
            const filteredRows = allRows.filter((row: IContributorBreakdown) =>
                row.name.toLowerCase().includes(lowercaseQuery)
            );
            setTotalContributors(filteredRows);
        } else {
            setTotalContributors(contributors);
        }
    };

    const handleSort = (_sortBy: string) => {
        setSortBy(_sortBy);

        const _sort = sort === 'asc' ? 'desc' : 'asc';
        setSort(_sort);

        let cont: any = totalContributors.map((c: any) => {
            const _c = structuredClone(c);
            if ('active' in _c) {
                _c.active = _c.active ? 3 : 1;
            } else _c.active = 2;
            return _c;
        });

        cont.sort((a: any, b: any) => {
            if (_sortBy === 'lastWork' || _sortBy === 'lastEngagement') {
                if (_sort === 'asc') {
                    return (a[_sortBy] || '').localeCompare(b[_sortBy] || '');
                } else {
                    return (b[_sortBy] || '').localeCompare(a[_sortBy] || '');
                }
            } else {
                switch (_sort) {
                    case 'asc':
                        return a[_sortBy] - b[_sortBy];
                    case 'desc':
                        return b[_sortBy] - a[_sortBy];
                    default:
                        return 0;
                }
            }
        });

        cont = cont.map((c: any) => {
            switch (c.active) {
                case 3:
                    c.active = true;
                    break;
                case 2:
                    delete c.active;
                    break;
                case 1:
                    c.active = false;
                    break;
            }
            return c;
        });

        setTotalContributors(cont);
    };
    const columnTooltips = {
        active: 'Indicates whether the contributor has activated his user in our system.',
        lastWork: 'The date of the most recent work completed.',
        lastEngagement:
            'The most recent date of interaction of the contributor with our system.',
        reservedWorks:
            'Number of works currently reserved by the contributor but not yet started.',
        worksInReview: 'Number of works currently under review',
        billableHoursRatio:
            'Percentage of hours worked that are billable in relation to Weekly availability hours',
        weeklyAvailability:
            'The number of hours the contributor is available to work per week.',
        hourlyRate: 'The standard hourly rate charged by the contributor.',
        projects: 'List of projects the contributor has been involved with.',
        skills: 'skills possessed by the contributor.'
    };

    return (
        <Box sx={tableStyles.root}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header>
                        <TitleContainer>
                            <Label sxOverrides={tableStyles.titleSX}>
                                Contributors
                            </Label>
                            <Label sxOverrides={tableStyles.subtitleSX}>
                                The following is the history of all the work
                                this contributor interacted with
                            </Label>
                        </TitleContainer>
                        <SearchInputWrapper
                            search={search}
                            handleSearch={handleSearch}
                        />
                    </Header>
                    <TableContainer
                        component={Paper}
                        sx={{
                            ...tableStyles.container,
                            '&::-webkit-scrollbar': {
                                width: 0
                            }
                        }}
                    >
                        <Table
                            stickyHeader
                            sx={tableStyles.table}
                            aria-label="community contributors table"
                        >
                            <TableHead sx={tableStyles.headRow}>
                                <TableRow sx={tableStyles.dataRow}>
                                    <TableCell
                                        sx={{
                                            ...tableStyles.muiTableCell,
                                            ...tableStyles.headCell,
                                            ...tableStyles.headCellMdPlus
                                        }}
                                    >
                                        <Label
                                            component="span"
                                            sxOverrides={tableStyles.headLabel}
                                        >
                                            Name
                                        </Label>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            ...tableStyles.muiTableCell,
                                            ...tableStyles.headCell,
                                            ...tableStyles.headCellXsPlus
                                        }}
                                    >
                                        <Label
                                            component="span"
                                            sxOverrides={tableStyles.headLabel}
                                        >
                                            Country
                                        </Label>
                                    </TableCell>
                                    <StyledToolTip
                                        title={columnTooltips.active}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXsPlus
                                            }}
                                            onClick={() => handleSort('active')}
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Active
                                                {sortBy === 'active' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.lastWork}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXsPlus
                                            }}
                                            onClick={() =>
                                                handleSort('lastWork')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Last work
                                                {sortBy === 'lastWork' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.lastEngagement}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellMd
                                            }}
                                            onClick={() =>
                                                handleSort('lastEngagement')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Last engagement
                                                {sortBy ===
                                                    'lastEngagement' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.reservedWorks}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXsPlus
                                            }}
                                            onClick={() =>
                                                handleSort('reservedWorks')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Reserved work
                                                {sortBy === 'reservedWorks' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.worksInReview}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXsPlus
                                            }}
                                            onClick={() =>
                                                handleSort('worksInReview')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Work in review
                                                {sortBy === 'worksInReview' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={
                                            columnTooltips.billableHoursRatio
                                        }
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellMd
                                            }}
                                            onClick={() =>
                                                handleSort('billableHoursRatio')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Billable hours ratio
                                                {sortBy ===
                                                    'billableHoursRatio' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={
                                            columnTooltips.weeklyAvailability
                                        }
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellMd
                                            }}
                                            onClick={() =>
                                                handleSort('weeklyAvailability')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Weekly availability
                                                {sortBy ===
                                                    'weeklyAvailability' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.hourlyRate}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXs
                                            }}
                                            onClick={() =>
                                                handleSort('hourlyRate')
                                            }
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Hourly rate
                                                {sortBy === 'hourlyRate' && (
                                                    <SortIcon sort={sort} />
                                                )}
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.projects}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellXlPlus
                                            }}
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Projects
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                    <StyledToolTip
                                        title={columnTooltips.skills}
                                        placement="top"
                                    >
                                        <TableCell
                                            sx={{
                                                ...tableStyles.muiTableCell,
                                                ...tableStyles.headCell,
                                                ...tableStyles.headCellLgPlus
                                            }}
                                        >
                                            <Label
                                                component="span"
                                                sxOverrides={
                                                    tableStyles.headLabel
                                                }
                                            >
                                                Skills
                                            </Label>
                                        </TableCell>
                                    </StyledToolTip>
                                </TableRow>
                            </TableHead>
                            <TableBody style={tableStyles.body}>
                                {totalContributors
                                    .slice(
                                        page * rowsPerPage,
                                        (page + 1) * rowsPerPage - 1
                                    )
                                    .map((row: any) => (
                                        <ContributorRow
                                            key={row.id}
                                            row={row}
                                        />
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Container
                        maxWidth={false}
                        sx={tableStyles.paginationContainer}
                        component="div"
                    >
                        <TablePagination
                            sx={{
                                ...tableStyles.pagination,
                                ' svg': tableStyles.caret,
                                '& .MuiSelect-select':
                                    tableStyles.paginationSelectLabel
                            }}
                            component="div"
                            count={totalContributors.length}
                            page={page}
                            rowsPerPageOptions={[10, 20, 50, 100]}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Container>
                </>
            )}
        </Box>
    );
};

export default CommunityContributors;
