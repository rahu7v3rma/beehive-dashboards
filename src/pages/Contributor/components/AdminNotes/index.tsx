import { Fragment, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    TablePagination,
    Paper,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress
} from '@mui/material';

import { Label } from 'src/shared';
import {
    getIsAdminNotesLoading,
    getAllAdminNotesFromState
} from 'src/redux/project-contributors/selectors';
import { AdminNotesType } from 'src/types/contributors';
import { useAppDispatch } from 'src/hooks';
import {
    getAllAdminNotes,
    saveAdminNotes
} from 'src/redux/project-contributors/service';

import S from './styled';

import convertDateDiffInReadableFormat from 'src/utils/dateFormat';
import SortIcon from 'src/utils/SortIcon';
import DeleteModal from 'src/shared/DeleteModal';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';

const AdminNotes = () => {
    const isAdminNotesLoading = useSelector(getIsAdminNotesLoading);
    const allAdminNotes: AdminNotesType[] = useSelector(
        getAllAdminNotesFromState
    );
    const [sort, setSort] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [deleteRow, setDeleteRow] = useState<number>(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllAdminNotes());
    }, [dispatch]);

    const [rows, setRows] = useState<AdminNotesType[]>(allAdminNotes);
    const [tempRows, setTempRows] = useState<AdminNotesType[]>(allAdminNotes);
    useEffect(() => {
        setRows(allAdminNotes);
        setTempRows(allAdminNotes);
    }, [allAdminNotes]);

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onClose = () => {
        setOpen(!open);
    };

    const [search, setSearch] = useState<string>('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setSearch(input);

        if (input) {
            let _allRows = structuredClone(allAdminNotes);
            _allRows = _allRows.filter(
                (row) =>
                    row.adminName.toLowerCase().includes(input) ||
                    row.note.toLowerCase().includes(input) ||
                    row.title.toLowerCase().includes(input)
            );
            setRows(_allRows);
        } else {
            setRows(allAdminNotes);
        }
    };

    const [shouldTableEdit, setTableEdit] = useState<boolean>(false);

    const handleTableSave = () => {
        let _rows = structuredClone(tempRows);
        _rows.forEach((row) => {
            row.edit = false;
        });
        _rows = _rows.filter(
            (row) => row.adminName && row.date && row.note && row.title
        );
        dispatch(saveAdminNotes(_rows))
            .unwrap()
            .then(() => setTableEdit(false));
    };

    const handleRowDelete = () => {
        const _rows = structuredClone(tempRows);
        _rows.splice(page * rowsPerPage + deleteRow, 1);
        setTempRows(_rows);
        setOpen(false);
        dispatch(
            setSnackbarAttributes({
                snackbarOpen: true,
                snackbarType: 'success',
                snackbarMessage: 'Note Deleted Successfully'
            })
        );
    };
    const handleDeleteModel = (index: number) => {
        setOpen(true);
        setDeleteRow(index);
    };

    const handleRowEdit = (index: number) => {
        let _rows = structuredClone(tempRows);
        _rows[page * rowsPerPage + index].edit =
            !_rows[page * rowsPerPage + index].edit;
        setTempRows(_rows);
    };

    const handleRowAdd = () => {
        const _rows = structuredClone(tempRows);
        _rows.unshift({
            adminName: '',
            title: '',
            date: new Date(),
            note: '',
            edit: true
        });
        setTempRows(_rows);
        setPage(0);
    };

    const handleRowChange = (index: number, field: string, value: string) => {
        let _rows: any = structuredClone(tempRows);
        _rows[index][field] = value;
        setTempRows(_rows);
    };

    const handleTableDiscard = () => {
        setTempRows(rows);
        setTableEdit(false);
    };

    const onCopyClick = useCallback(
        (row: AdminNotesType, index: number) => {
            const adminNoteList = structuredClone(tempRows);
            const indexOfItem = index + 1;
            adminNoteList.splice(indexOfItem, 0, row);
            setTempRows(adminNoteList);
            dispatch(
                setSnackbarAttributes({
                    snackbarOpen: true,
                    snackbarType: 'success',
                    snackbarMessage: 'Note Copied Successfully'
                })
            );
        },
        [tempRows, dispatch]
    );

    const renderRows = (inputRows: AdminNotesType[]) =>
        inputRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
                <TableRow key={index}>
                    {shouldTableEdit && row.edit ? (
                        <>
                            <S.TableBodyCell width={10} align="center">
                                <S.RowInput
                                    InputProps={{
                                        sx: S.rowInputSX
                                    }}
                                    variant="outlined"
                                    size="small"
                                    value={row.adminName}
                                    onChange={(e) =>
                                        handleRowChange(
                                            index,
                                            'adminName',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.TableBodyCell>
                            <S.TableBodyCell width={20} align="left">
                                <S.RowInput
                                    InputProps={{
                                        sx: S.rowInputSX
                                    }}
                                    variant="outlined"
                                    size="small"
                                    value={row.title}
                                    onChange={(e) =>
                                        handleRowChange(
                                            index,
                                            'title',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.TableBodyCell>
                            <S.TableBodyCell width={10} align="center">
                                <S.RowInput
                                    InputProps={{
                                        sx: S.rowInputSX
                                    }}
                                    variant="outlined"
                                    size="small"
                                    value={row.date}
                                    type="date"
                                    onChange={(e) =>
                                        handleRowChange(
                                            index,
                                            'date',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.TableBodyCell>
                            <S.TableBodyCell width={60} align="left">
                                <S.RowInput
                                    InputProps={{
                                        sx: S.rowInputSX
                                    }}
                                    variant="outlined"
                                    size="small"
                                    value={row.note}
                                    onChange={(e) =>
                                        handleRowChange(
                                            index,
                                            'note',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.TableBodyCell>
                        </>
                    ) : (
                        <>
                            <S.TableBodyCell width={10} align="center">
                                {row.adminName}
                            </S.TableBodyCell>
                            <S.TableBodyCell width={20} align="left">
                                {row.title}
                            </S.TableBodyCell>
                            <S.TableBodyCell width={10} align="center">
                                {convertDateDiffInReadableFormat(
                                    row.date,
                                    'ago'
                                )}
                            </S.TableBodyCell>
                            <S.TableBodyCell width={60} align="left">
                                {row.note}
                            </S.TableBodyCell>
                        </>
                    )}
                    {shouldTableEdit && (
                        <S.TableBodyCell align="center" width={10}>
                            <S.RowEditBox>
                                <S.StyledIconButton
                                    onClick={() => handleRowEdit(index)}
                                >
                                    <S.StyledRowEditIcon />
                                </S.StyledIconButton>
                                <S.StyledIconButton
                                    onClick={() => {
                                        onCopyClick(row, index);
                                        navigator.clipboard.writeText(
                                            row.title
                                        );
                                    }}
                                >
                                    <S.StyledContentCopyIcon />
                                </S.StyledIconButton>
                                <S.StyledIconButton
                                    onClick={() => handleDeleteModel(index)}
                                >
                                    <S.StyledDeleteOutlineIcon />
                                </S.StyledIconButton>
                            </S.RowEditBox>
                        </S.TableBodyCell>
                    )}
                </TableRow>
            ));

    const sortData = shouldTableEdit ? tempRows : rows;
    const handleSort = (_sortBy: string) => {
        setSortBy(_sortBy);

        const _sort = sort === 'asc' ? 'desc' : 'asc';
        setSort(_sort);

        let cont: any = sortData.map((c: any) => {
            const _c = structuredClone(c);
            return _c;
        });

        cont.sort((a: any, b: any) => {
            if (_sortBy === 'date') {
                switch (_sort) {
                    case 'asc':
                        return b[_sortBy] - a[_sortBy];
                    case 'desc':
                        return a[_sortBy] - b[_sortBy];
                    default:
                        return 0;
                }
            } else {
                return a[_sortBy] < b[_sortBy] ? 1 : -1;
            }
        });

        shouldTableEdit ? setTempRows(cont) : setRows(cont);
    };

    return (
        <Fragment>
            <Box>
                <S.HeaderContainer>
                    <S.TitleContainer>
                        <Label sxOverrides={S.titleSX}>Admin notes</Label>
                        <Label sxOverrides={S.subtitleSX}>
                            The following is the history of all the notes by
                            Beehive administrators
                        </Label>
                    </S.TitleContainer>
                    <S.TableControlsContainer>
                        <S.TableEditContainer>
                            {shouldTableEdit ? (
                                <>
                                    <S.AddRowChip
                                        label="Add a row"
                                        deleteIcon={
                                            <S.StyledAddCircleOutlineIcon />
                                        }
                                        clickable
                                        onClick={handleRowAdd}
                                        onDelete={handleRowAdd}
                                    />
                                    <S.DiscardChip
                                        label="Discard"
                                        deleteIcon={<S.StyledSyncIcon />}
                                        clickable
                                        onClick={handleTableDiscard}
                                        onDelete={handleTableDiscard}
                                    />
                                    {isAdminNotesLoading ? (
                                        <S.SaveLoaderContainer>
                                            <CircularProgress size={20} />
                                        </S.SaveLoaderContainer>
                                    ) : (
                                        <S.SaveChip
                                            label="Save"
                                            deleteIcon={
                                                <S.StyledCheckCircleOutlineIcon />
                                            }
                                            clickable
                                            onClick={handleTableSave}
                                            onDelete={handleTableSave}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    <S.SearchInput
                                        label="Search"
                                        InputProps={{
                                            endAdornment: (
                                                <S.StyledSearchIcon />
                                            ),
                                            sx: S.searchInputSX
                                        }}
                                        InputLabelProps={{
                                            sx: S.searchLabelSX
                                        }}
                                        variant="standard"
                                        value={search}
                                        onChange={handleSearch}
                                    />
                                    <S.EditChip
                                        label="Edit"
                                        deleteIcon={<S.StyledEditIcon />}
                                        clickable
                                        onClick={() => setTableEdit(true)}
                                        onDelete={() => setTableEdit(true)}
                                    />
                                </>
                            )}
                        </S.TableEditContainer>
                    </S.TableControlsContainer>
                </S.HeaderContainer>
                <TableContainer component={Paper} sx={S.tableContainerSX}>
                    <S.StyledTable aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <S.TableHeadCell align="center">
                                    <S.SortableTableHead
                                        onClick={() => handleSort('AdminName')}
                                    >
                                        Admin Name
                                        {sortBy === 'AdminName' && (
                                            <SortIcon sort={sort} />
                                        )}
                                    </S.SortableTableHead>
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    Title
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    <S.SortableTableHead
                                        onClick={() => handleSort('date')}
                                    >
                                        Date
                                        {sortBy === 'date' && (
                                            <SortIcon sort={sort} />
                                        )}
                                    </S.SortableTableHead>
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    Note
                                </S.TableHeadCell>
                                {shouldTableEdit && <S.TableHeadCell />}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderRows(shouldTableEdit ? tempRows : rows)}
                        </TableBody>
                    </S.StyledTable>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        sx={S.tablePaginationSX}
                        SelectProps={S.tablePaginationItems}
                    />
                </TableContainer>
            </Box>
            <DeleteModal
                hasCrossIcon={false}
                open={open}
                onClose={onClose}
                title="Are you sure you want to delete this item?"
                handleDelete={handleRowDelete}
            />
        </Fragment>
    );
};

export default AdminNotes;
