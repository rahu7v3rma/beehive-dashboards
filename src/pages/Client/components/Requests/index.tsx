import {
    FunctionComponent,
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { tableStyles } from 'src/shared/Table/styled';
import QuestTableHeader from './QuestTableHeader';
import QuestTableRow from './QuestTableRow';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { fetchProjectQuests } from 'src/redux/client/service';
import { ClientSelectors } from 'src/redux/client/selectors';
import { setQuestsRowsPerPage } from 'src/redux/client/slice';
import { ClientQuest } from 'src/types/client';

export interface Props {}

const Requests: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<number>(0);
    const [sortBy, setSortBy] = useState<string>('');
    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortedQuests, setSortedQuests] = useState<ClientQuest[]>([]);

    const {
        quests,
        totalQuests,
        selectedProjectId,
        questsRowsPerPage,
        questsSearchQuery,
        questsStatusFilter
    } = ClientSelectors();

    const handleChangePage = useCallback(
        (
            _event: React.MouseEvent<HTMLButtonElement> | null,
            pageChanged: number
        ) => {
            dispatch(
                fetchProjectQuests({
                    page: pageChanged,
                    resultsPerPage: questsRowsPerPage,
                    q: questsSearchQuery,
                    statusFilters: questsStatusFilter || []
                })
            )
                .unwrap()
                .then(() => {
                    setPage(pageChanged);
                });
        },
        [
            dispatch,
            setPage,
            questsRowsPerPage,
            questsSearchQuery,
            questsStatusFilter
        ]
    );

    const handleChangeRowsPerPage = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const newRowsPerPage = parseInt(event.target.value);
            dispatch(setQuestsRowsPerPage(newRowsPerPage));
        },
        [dispatch]
    );

    const pagedQuests = useMemo(() => {
        return sortedQuests
            ? sortedQuests.slice(
                  page * questsRowsPerPage,
                  (page + 1) * questsRowsPerPage
              )
            : [];
    }, [sortedQuests, questsRowsPerPage, page]);

    useEffect(() => {
        if (quests) {
            setSortedQuests(quests);
        }
    }, [quests]);

    // lazy initial fetch
    useEffect(() => {
        // lazy fetch first page only in case a the project was changed
        if (selectedProjectId) {
            dispatch(
                fetchProjectQuests({
                    page: 0,
                    resultsPerPage: questsRowsPerPage,
                    q: questsSearchQuery,
                    statusFilters: questsStatusFilter || []
                })
            ).then(() => {
                setPage(0);
            });
        }
    }, [
        dispatch,
        selectedProjectId,
        questsRowsPerPage,
        questsSearchQuery,
        questsStatusFilter
    ]);

    const handleSort = useCallback(
        (sortedBy: string) => {
            setSortBy(sortedBy);
            const sortDirection = sort === 'asc' ? 'desc' : 'asc';
            setSort(sortDirection);

            const sorted = [...sortedQuests].sort((a, b) => {
                if (sortedBy === 'title') {
                    return sortDirection === 'asc'
                        ? a.quest.title.localeCompare(b.quest.title)
                        : b.quest.title.localeCompare(a.quest.title);
                }
                if (sortedBy === 'dateCreated') {
                    return sortDirection === 'asc'
                        ? a.quest.created.localeCompare(b.quest.created)
                        : b.quest.created.localeCompare(a.quest.created);
                }
                if (sortedBy === 'netTime') {
                    return sortDirection === 'asc'
                        ? a.netTime - b.netTime
                        : b.netTime - a.netTime;
                }
                if (sortedBy === 'status') {
                    return sortDirection === 'asc'
                        ? a.quest.status - b.quest.status
                        : b.quest.status - a.quest.status;
                }
                return 0;
            });

            setSortedQuests(sorted);
        },
        [sortedQuests, sort]
    );

    return (
        <Box sx={tableStyles.root}>
            <TableContainer component={Paper} sx={tableStyles.container}>
                <Table
                    stickyHeader
                    sx={tableStyles.table}
                    aria-label="simple table"
                >
                    <QuestTableHeader
                        handleSort={handleSort}
                        sortBy={sortBy}
                        sort={sort}
                    />
                    <TableBody style={tableStyles.body}>
                        {pagedQuests.map((q, i) => (
                            <QuestTableRow clientQuest={q} key={i} />
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
                count={totalQuests || 0}
                page={page}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                onPageChange={handleChangePage}
                rowsPerPage={questsRowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default Requests;
