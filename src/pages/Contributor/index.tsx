import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Navbar } from '../../shared';
import { SkillItems } from '../../constants/skills';
import Skills from 'src/shared/SkillsV2';
import { SkillWrapperBox } from './styled';
import { GridStyle, MarginOnXaxis } from './styled';
import { FunctionComponent } from 'react';
import { SOCIAL_LINKS } from 'src/constants/labels';
import ContributorLink from './components/ContributorLinks';
import { useCallback, useEffect, useState } from 'react';
import { Label, Loader } from '../../shared';
import { HistoryText, labelStyle } from '../ProjectDashboard/styled';
import { HistoryTextAlign } from './styled';
import {
    getAllContributorsWorkHistoryFromState,
    getIsLoading
} from 'src/redux/project-contributors/selectors';
import { useSelector } from 'react-redux';
import { InputAdornment, TablePagination } from '@mui/material';
import WorkHistory from './components/WorkHistory';
import { tableStyles } from './components/WorkHistory/styled';
import { getAllContributorsWorkHistory } from 'src/redux/project-contributors/service';
import { useAppDispatch } from 'src/hooks';
import {
    RowBox,
    SearchIcon,
    StyledTextField,
    TextFieldInputPropStyle
} from './styled';
import { Search } from '@mui/icons-material';
import { IWorkHistory, sortWorkHistory } from 'src/types/contributors';
import theme from 'src/theme';
import AdminNotes from './components/AdminNotes';
import ContributorDetails from './components/ContributorDetails';
import Ratings from './components/Ratings';

type Props = Record<string, never>;

const ContributorBoard: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getIsLoading);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(0);
    const [searchText, setSearchText] = useState<string>('');
    const contributors = useSelector(getAllContributorsWorkHistoryFromState);
    const [contributorState, setContributorState] = useState<IWorkHistory[]>(
        []
    );
    const [sort, setSort] = useState<string>('asc');
    const [sortBy, setSortBy] = useState<sortWorkHistory | null>(null);

    const fetchAllContributors = useCallback(async () => {
        await dispatch(getAllContributorsWorkHistory());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAllContributors);
    }, [dispatch, fetchAllContributors]);

    useEffect(() => {
        setContributorState(contributors);
    }, [contributors]);

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

    const onSearchTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setSearchText(event.target.value);
    };

    const getFilterContributor = () => {
        if (!!searchText) {
            return contributorState.filter((item: IWorkHistory) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            );
        } else {
            return contributorState;
        }
    };

    const pageContributors = getFilterContributor().slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage
    );

    const handleSort = (_sortBy: sortWorkHistory) => {
        setSortBy(_sortBy);
        const _sort = sort === 'asc' ? 'desc' : 'asc';
        const statusSortingOrder = [
            'solved',
            'in-review',
            'in-progress',
            'cancelled'
        ];
        setSort(_sort);

        let cont: IWorkHistory[] = structuredClone(contributorState);

        cont = cont.map((c: any) => {
            return c;
        });

        cont.sort((a: IWorkHistory, b: IWorkHistory) => {
            let bSortBy =
                typeof b[_sortBy] === 'string'
                    ? Number(
                          (b[_sortBy] as string)
                              .replace('hour', '')
                              .replace('$', '')
                      )
                    : Number(b[_sortBy]);
            let aSortBy =
                typeof a[_sortBy] === 'string'
                    ? Number(
                          (a[_sortBy] as string)
                              .replace('hour', '')
                              .replace('$', '')
                      )
                    : Number(a[_sortBy]);
            if (b.skills && a.skills) {
                bSortBy = b.skills.length;
                aSortBy = a.skills.length;
            }
            switch (_sort) {
                case 'desc':
                    return _sortBy === 'status'
                        ? statusSortingOrder.indexOf(b.status) -
                              statusSortingOrder.indexOf(a.status)
                        : bSortBy - aSortBy;
                case 'asc':
                    return sortBy === 'status'
                        ? statusSortingOrder.indexOf(a.status) -
                              statusSortingOrder.indexOf(b.status)
                        : aSortBy - bSortBy;
                default:
                    return 0;
            }
        });

        setContributorState(cont);
    };

    return (
        <Navbar>
            <Container
                maxWidth={false}
                sx={{
                    mt: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: '200px'
                }}
                component="div"
            >
                <ContributorDetails />
                <Container maxWidth={false} sx={{ mt: '20px' }} component="div">
                    <SkillWrapperBox>
                        <GridStyle>
                            <Grid item>
                                <Skills availableSkills={SkillItems} />
                            </Grid>
                        </GridStyle>
                    </SkillWrapperBox>
                </Container>
                <ContributorLink SOCIAL_LINKS={SOCIAL_LINKS} />
            </Container>
            <Container sx={{ mt: '70px' }} />
            <MarginOnXaxis>
                <RowBox>
                    <HistoryTextAlign>
                        <Label sxOverrides={HistoryText}>Work history</Label>
                        <Label sxOverrides={labelStyle}>
                            The following is the history of all the work this
                            contributor interacted with
                        </Label>
                    </HistoryTextAlign>
                    <StyledTextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search
                                        style={SearchIcon}
                                        htmlColor={theme.color.white}
                                    />
                                </InputAdornment>
                            ),
                            style: TextFieldInputPropStyle
                        }}
                        onChange={onSearchTextChange}
                        value={searchText}
                        variant="standard"
                        placeholder="Search..."
                    />
                </RowBox>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <WorkHistory
                            contributors={pageContributors}
                            handleSort={handleSort}
                            sort={sort}
                            sortBy={sortBy}
                        />
                        <Container
                            maxWidth={false}
                            sx={tableStyles.paginationContainer}
                            component="div"
                        >
                            <TablePagination
                                sx={{
                                    ...tableStyles.pagination,
                                    '.MuiTablePagination-select': {
                                        padding: 0,
                                        marginTop: '5px'
                                    },
                                    ' svg': tableStyles.caret
                                }}
                                component="div"
                                count={getFilterContributor().length}
                                page={page}
                                rowsPerPageOptions={[5, 20, 50, 100]}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Container>
                    </>
                )}
                <AdminNotes />
                <Container sx={{ mt: '50px' }} />
                <Ratings />
            </MarginOnXaxis>
        </Navbar>
    );
};

export default ContributorBoard;
