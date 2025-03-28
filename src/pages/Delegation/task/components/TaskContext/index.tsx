import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import {
    Box,
    Paper,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

import { useAppDispatch } from 'src/hooks';

import S from './styled';

import { setSnackbarAttributes } from 'src/redux/snackbar/slice';
import theme from 'src/theme';
import { TaskContextData } from 'src/types/tasks';

interface TaskContextProps {
    initialData: TaskContextData[];
    onDataUpdated: (data: TaskContextData[]) => void;
}

const newTaskItem: TaskContextData = {
    file: '',
    entity: '',
    potentialUse: '',
    edit: true
};

const TaskContext: FC<TaskContextProps> = ({ initialData, onDataUpdated }) => {
    const dispatch = useAppDispatch();
    const [rows, setRows] = useState<TaskContextData[]>([
        ...initialData,
        newTaskItem
    ]);
    const [tempRows, setTempRows] = useState<TaskContextData[]>(initialData);
    const [error, setError] = useState<boolean>(false);

    const isEmptyRowExist = (_rows: TaskContextData[]) => {
        return _rows.filter((item) => item.file === '').length === 0;
    };

    const removeEmptyRow = useCallback(() => {
        const newtempRows = tempRows.filter((item) => item.file);
        return newtempRows;
    }, [tempRows]);

    const addEmptyRow = (_rows: TaskContextData[]) => {
        if (isEmptyRowExist(_rows)) {
            _rows.push(newTaskItem);
            return _rows;
        } else {
            return _rows;
        }
    };

    useEffect(() => {
        if (isEmptyRowExist(initialData)) {
            initialData.push(newTaskItem);
        }
        setTempRows(initialData);
        setRows(initialData);
    }, [initialData]);

    const handleDeleteModel = (index: number) => {
        let _rows = structuredClone(tempRows);
        _rows.splice(index, 1);
        setTempRows(_rows);
        setRows(_rows);
        onDataUpdated(_rows);
        dispatch(
            setSnackbarAttributes({
                snackbarOpen: true,
                snackbarType: 'success',
                snackbarMessage: 'Note Deleted Successfully'
            })
        );
    };

    const handleRowEdit = (index: number) => {
        const getRowAfterRemoveEmpty = removeEmptyRow();
        let _rows = structuredClone(getRowAfterRemoveEmpty);
        _rows = _rows.map((item, i) => {
            if (index === i) {
                item.edit = true;
            }
            return item;
        });
        setTempRows(_rows);
    };

    const handleRowChange = (index: number, field: string, value: string) => {
        setError(false);
        let _rows: any = structuredClone(tempRows);
        _rows[index][field] = value;
        setTempRows(_rows);
    };

    const onCopyClick = useCallback(
        (row: TaskContextData, index: number) => {
            const _row = structuredClone(row);
            const getRowAfterRemoveEmpty = removeEmptyRow();
            const adminNoteList = structuredClone(getRowAfterRemoveEmpty);
            const indexOfItem = index + 1;
            _row.edit = true;
            adminNoteList.splice(indexOfItem, 0, _row);
            setTempRows(adminNoteList);
            dispatch(
                setSnackbarAttributes({
                    snackbarOpen: true,
                    snackbarType: 'success',
                    snackbarMessage: 'Note Copied Successfully'
                })
            );
        },
        [dispatch, removeEmptyRow]
    );

    const handleTableDiscard = () => {
        const newRow = addEmptyRow(rows);
        setTempRows(newRow);
    };

    const handleTableSave = (index: number) => {
        let _rows = structuredClone(tempRows);
        if (
            !_rows[index].entity ||
            !_rows[index].file ||
            !_rows[index].potentialUse
        ) {
            setError(true);
            return;
        }
        setError(false);
        _rows = _rows.map((item, i) => {
            if (index === i) {
                item.edit = false;
            }
            return item;
        });
        onDataUpdated(_rows);
        const newRow = addEmptyRow(_rows);
        setTempRows(newRow);
        setRows(newRow);
    };

    const renderRows = (inputRows: TaskContextData[]) =>
        inputRows.map((row, index) => (
            <TableRow key={index}>
                {row.edit ? (
                    <>
                        <S.TableBodyCell align="center">
                            <S.RowInput
                                InputProps={{
                                    sx: S.rowInputSX,
                                    placeholder: '/src/utils/date.ts'
                                }}
                                variant="outlined"
                                size="small"
                                rows={5}
                                multiline
                                value={row.file}
                                error={error && !row.file}
                                onChange={(e) =>
                                    handleRowChange(
                                        index,
                                        'file',
                                        e.target.value
                                    )
                                }
                            />
                            {error && !row.file && (
                                <Typography
                                    variant={'subtitle2'}
                                    style={{ color: theme.color.brightRed }}
                                >
                                    Missing field
                                </Typography>
                            )}
                        </S.TableBodyCell>
                        <S.TableBodyCell align="left">
                            <S.RowInput
                                InputProps={{
                                    sx: S.rowInputSX,
                                    placeholder: 'formatDate'
                                }}
                                variant="outlined"
                                size="small"
                                rows={5}
                                multiline
                                value={row.entity}
                                error={error && !row.entity}
                                onChange={(e) =>
                                    handleRowChange(
                                        index,
                                        'entity',
                                        e.target.value
                                    )
                                }
                            />
                            {error && !row.entity && (
                                <Typography
                                    variant={'subtitle2'}
                                    style={{ color: theme.color.brightRed }}
                                >
                                    Missing field
                                </Typography>
                            )}
                        </S.TableBodyCell>
                        <S.TableBodyCell align="left">
                            <S.RowInput
                                InputProps={{
                                    sx: S.rowInputSX,
                                    placeholder: 'Date presentaions'
                                }}
                                rows={5}
                                multiline
                                variant="outlined"
                                size="small"
                                value={row.potentialUse}
                                error={error && !row.potentialUse}
                                onChange={(e) =>
                                    handleRowChange(
                                        index,
                                        'potentialUse',
                                        e.target.value
                                    )
                                }
                            />
                            {error && !row.potentialUse && (
                                <Typography
                                    variant={'subtitle2'}
                                    style={{ color: theme.color.brightRed }}
                                >
                                    Missing field
                                </Typography>
                            )}
                        </S.TableBodyCell>
                    </>
                ) : (
                    <>
                        <S.TableBodyCell align="center">
                            {row.file}
                        </S.TableBodyCell>
                        <S.TableBodyCell
                            width={20}
                            align="center"
                            style={{
                                color: theme.color.chineseGold,
                                textDecorationLine: 'underline'
                            }}
                        >
                            {row.entity}
                        </S.TableBodyCell>
                        <S.TableBodyCell align="left">
                            {row.potentialUse}
                        </S.TableBodyCell>
                    </>
                )}

                {row.edit ? (
                    <S.TableBodyCell align="center">
                        <S.RowEditBox>
                            <S.DiscardChip
                                label="Cancel"
                                deleteIcon={<></>}
                                clickable
                                onClick={() => handleTableDiscard()}
                                onDelete={() => handleTableDiscard()}
                            />
                            <S.SaveChip
                                label="Save"
                                deleteIcon={<></>}
                                clickable
                                onClick={() => handleTableSave(index)}
                                onDelete={() => handleTableSave(index)}
                            />
                        </S.RowEditBox>
                    </S.TableBodyCell>
                ) : (
                    <S.TableBodyCell align="center">
                        <S.RowEditBox>
                            <S.StyledIconButton
                                onClick={() => {
                                    onCopyClick(row, index);
                                }}
                            >
                                <S.StyledContentCopyIcon />
                            </S.StyledIconButton>
                            <S.StyledIconButton
                                onClick={() => handleRowEdit(index)}
                            >
                                <S.StyledRowEditIcon />
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

    return (
        <Fragment>
            <Box>
                <TableContainer component={Paper} sx={S.tableContainerSX}>
                    <S.StyledTable aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <S.TableHeadCell align="center">
                                    <S.SortableTableHead>
                                        File
                                    </S.SortableTableHead>
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    Entity
                                </S.TableHeadCell>
                                <S.TableHeadCell align="left">
                                    Potential use
                                </S.TableHeadCell>
                                <S.TableHeadCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>{renderRows(tempRows)}</TableBody>
                    </S.StyledTable>
                </TableContainer>
            </Box>
        </Fragment>
    );
};

export default TaskContext;
