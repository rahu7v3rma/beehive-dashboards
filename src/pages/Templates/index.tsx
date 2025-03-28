import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import {
    Paper,
    TableBody,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { Label, Navbar } from 'src/shared';
import SearchInput from 'src/shared/SearchInput';
import StyledButton from 'src/shared/StyledButton';
import S, {
    AddRowChip,
    HeaderContainer,
    RootBox,
    StyledAddCircleOutlineIcon,
    SxDescription1,
    SxDescription2,
    TitleBox
} from './styled';

import { AddEditTemplate } from './components';
import {
    getAvailableSkillsFromState,
    getTemplatesFromState
} from 'src/redux/delegate/selectors';
import { useSelector } from 'react-redux';
import { TaskTemplate } from 'src/types/delegate';
import {
    createTaskTemplate,
    fetchTemplates,
    getAllSkills,
    removeTaskTemplate,
    updateTaskTemplate
} from 'src/redux/delegate/service';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { ClientSelectors } from 'src/redux/client/selectors';
import { Repository } from 'src/types/client';

const Templates: FC = () => {
    const dispatch = useAppDispatch();
    const templates = useSelector(getTemplatesFromState);
    const availableSkills = useSelector(getAvailableSkillsFromState);
    const [search, setSearch] = useState<string>('');
    const [rows, setRows] = useState<TaskTemplate[]>(templates);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const { repositories } = ClientSelectors();

    const fetchRemoteData = useCallback(async () => {
        if (!availableSkills || availableSkills.length === 0) {
            await dispatch(getAllSkills());
        }
    }, [dispatch, availableSkills]);

    useEffect(() => {
        dispatch(fetchRemoteData);
        dispatch(fetchTemplates());
    }, [dispatch, fetchRemoteData]);

    useEffect(() => {
        setRows(templates);
    }, [templates]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setRows(
            templates.filter(
                (row: TaskTemplate) =>
                    row.name.includes(event.target.value) ||
                    row.taskDescription.includes(event.target.value)
            )
        );
    };

    const [addEditTemplateModalOpen, setAddEditTemplateModalOpen] =
        useState<boolean>(false);
    const [editTemplateProp, setEditTemplateProp] = useState<
        TaskTemplate | undefined
    >(undefined);
    const onClickAddTemplate = () => {
        setEditTemplateProp(undefined);
        setAddEditTemplateModalOpen(true);
    };
    const onClickEditTemplate = (id: number) => {
        setAddEditTemplateModalOpen(true);
        const row = structuredClone(rows).filter((r) => r.id === id)[0];
        setEditTemplateProp(row);
    };
    const onSaveAddEditTemplate = (data: TaskTemplate) => {
        if (editTemplateProp !== undefined) {
            dispatch(updateTaskTemplate(data));
        } else {
            dispatch(createTaskTemplate(data));
        }
    };

    const onDeleteAddEditTemplate = (data: TaskTemplate) => {
        dispatch(removeTaskTemplate(data));
    };

    const handleRowCopy = (row: TaskTemplate) => {
        setEditTemplateProp(undefined);
        onSaveAddEditTemplate(row);
    };

    return (
        <Navbar>
            <RootBox>
                <HeaderContainer>
                    <TitleBox>
                        <Label sxOverrides={SxDescription1}>
                            Task templates
                        </Label>
                        <Label sxOverrides={SxDescription2}>
                            The following table is the templates for all the
                            tasks in this project
                        </Label>
                    </TitleBox>
                    <SearchInput
                        search={search}
                        handleSearch={handleSearch}
                        width="345px"
                    />
                    <AddRowChip
                        label="Add a new template"
                        deleteIcon={<StyledAddCircleOutlineIcon />}
                        clickable
                        onClick={onClickAddTemplate}
                        onDelete={onClickAddTemplate}
                    />
                    <AddEditTemplate
                        open={addEditTemplateModalOpen}
                        setOpen={setAddEditTemplateModalOpen}
                        onSave={onSaveAddEditTemplate}
                        onCancel={() => {}}
                        edit={editTemplateProp}
                        onDelete={onDeleteAddEditTemplate}
                    />
                </HeaderContainer>

                <TableContainer component={Paper} sx={S.tableContainerSX}>
                    <S.StyledTable aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <S.TableHeadCell align="left">
                                    Repository
                                </S.TableHeadCell>
                                <S.TableHeadCell align="left">
                                    Title
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    Skills
                                </S.TableHeadCell>
                                <S.TableHeadCell align="center">
                                    Task description
                                </S.TableHeadCell>
                                <S.TableHeadCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, idx) => (
                                    <TableRow key={idx}>
                                        <S.TableBodyCell
                                            width={14}
                                            align="left"
                                        >
                                            {
                                                (
                                                    (repositories || []).find(
                                                        (x: Repository) =>
                                                            x.id ===
                                                            row.repositoryId
                                                    ) || { name: '' }
                                                ).name
                                            }
                                        </S.TableBodyCell>
                                        <S.TableBodyCell
                                            width={14}
                                            align="left"
                                        >
                                            {row.name}
                                        </S.TableBodyCell>
                                        <S.TableBodyCell
                                            width={12.5}
                                            align="center"
                                        >
                                            {row.skills.join(', ')}
                                        </S.TableBodyCell>
                                        <S.TableBodyCell
                                            width={42}
                                            align="center"
                                        >
                                            {row.taskDescription}
                                        </S.TableBodyCell>
                                        <S.TableBodyCell
                                            width={8}
                                            align="center"
                                        >
                                            <StyledButton
                                                onClick={() => {
                                                    handleRowCopy(row);
                                                }}
                                            >
                                                <ContentCopyIcon />
                                            </StyledButton>
                                            <StyledButton
                                                onClick={() =>
                                                    onClickEditTemplate(
                                                        row.id || -1
                                                    )
                                                }
                                            >
                                                <EditIcon />
                                            </StyledButton>
                                        </S.TableBodyCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </S.StyledTable>
                    <TablePagination
                        rowsPerPageOptions={[10, 50]}
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
            </RootBox>
        </Navbar>
    );
};

export default Templates;
