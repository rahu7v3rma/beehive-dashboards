import { ChangeEvent, Dispatch, FC, useEffect, useMemo, useState } from 'react';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete2.svg';
import { initialAddEditErrors } from 'src/constants/templates';
import { Actions, MultiLineInput, Label, SkillsV2 } from 'src/shared';
import { AddEditTemplateErrors } from 'src/types/templates';
import * as S from './styled';
import { useSelector } from 'react-redux';
import {
    getAvailableSkillsFromState,
    getSelectedRepoIdFromState
} from 'src/redux/delegate/selectors';
import {
    RepositoryPicker,
    TaskClassificationPicker
} from 'src/pages/Delegation/task/components';
import { TaskTemplate } from 'src/types/delegate';
import {
    RichTextLabel,
    RichTextSwitch
} from 'src/pages/Delegation/shared/Delegate/styled';
import MDEditor from '@uiw/react-md-editor';
import color from 'src/theme/color';
import { ClientSelectors } from 'src/redux/client/selectors';

export interface AddEditTemplateProps {
    open: boolean;
    setOpen: Dispatch<boolean>;
    onSave: (data: TaskTemplate) => void;
    onCancel: () => void;
    edit?: TaskTemplate;
    onDelete: (data: TaskTemplate) => void;
}

const AddEditTemplate: FC<AddEditTemplateProps> = (props) => {
    const { open, setOpen, onSave, onCancel, edit, onDelete } = props;
    const [richTextEditorSwitch, setRichTextEditorSwitch] =
        useState<boolean>(false);
    const availableSkills = useSelector(getAvailableSkillsFromState);
    const initialRepoId = useSelector(getSelectedRepoIdFromState);
    const { repositories } = ClientSelectors();

    const initialValues: TaskTemplate = {
        skills: [],
        repositoryId: edit ? edit.repositoryId : initialRepoId,
        name: '',
        taskDescription: '',
        taskType: 2,
        taskClassification: 'Other'
    };

    const [addEditData, setAddEditData] = useState<TaskTemplate>(
        edit ? edit : initialValues
    );
    const [addEditErrors, setAddEditErrors] =
        useState<AddEditTemplateErrors>(initialAddEditErrors);

    const onSaveSkills = (skills: string[]) => {
        setAddEditData({ ...addEditData, skills });
    };

    const onChangeInput = (
        event: ChangeEvent<HTMLInputElement>,
        inputType: string
    ) => {
        setAddEditData({ ...addEditData, [inputType]: event.target.value });
    };
    const onClickCancel = () => {
        setAddEditErrors(initialAddEditErrors);
        setAddEditData(initialValues);
        onCancel();
        setOpen(false);
    };
    const errors = useMemo(
        () => ({
            skills: addEditData.skills.length > 0 ? '' : 'Skill is required',
            name: addEditData.name ? '' : 'Title is required',
            taskDescription: addEditData.taskDescription
                ? ''
                : 'Description is required',
            repository: addEditData.repositoryId ? '' : 'Repo is required'
        }),
        [addEditData]
    );

    const onClickSave = () => {
        setAddEditErrors(initialAddEditErrors);
        if (Object.values(errors).every((e) => !e)) {
            onSave(addEditData);
            setAddEditData(initialValues);
            setOpen(false);
        } else {
            setAddEditErrors(errors);
        }
    };

    const onClickDelete = () => {
        onDelete(addEditData);
        setAddEditData(initialValues);
        setOpen(false);
    };
    useEffect(() => {
        if (edit !== undefined) {
            setAddEditData(edit);
        }
    }, [edit]);

    function setSelectedRepoId(id: number): void {
        setAddEditData({ ...addEditData, repositoryId: id });
        setAddEditErrors({ ...addEditErrors, repository: '' });
    }

    function handleTaskClassificationChange(taskClassification: string): void {
        setAddEditData({ ...addEditData, taskClassification });
    }

    return (
        <S.MuiModal open={open} onClose={onCancel} hideBackdrop>
            <S.Container>
                <S.TitleAndEditControls>
                    <S.TitlesBox>
                        <Label sxOverrides={S.headingLabel}>
                            {!!edit ? 'Edit' : 'Add'} a template
                        </Label>
                        <Label sxOverrides={S.subHeadingLabel}></Label>
                    </S.TitlesBox>
                    {edit && (
                        <S.EditControlsBox>
                            <Label
                                sxOverrides={S.deleteLabel}
                                onClick={onClickDelete}
                            >
                                Delete <DeleteIcon />
                            </Label>
                        </S.EditControlsBox>
                    )}
                </S.TitleAndEditControls>
                <S.SkillsAndTaskSettingsBox>
                    <S.SkillsWrapper>
                        <SkillsV2
                            availableSkills={availableSkills}
                            initialSelectedSkills={addEditData.skills}
                            onSave={onSaveSkills}
                            error={
                                addEditData.skills.length === 0
                                    ? addEditErrors.skills
                                    : ''
                            }
                        />
                    </S.SkillsWrapper>
                    <S.TaskSettingsBox>
                        {addEditErrors.repository !== '' && (
                            <Label sxOverrides={S.typeSelectErrorLabelSx}>
                                {addEditErrors.repository}
                            </Label>
                        )}
                        <S.TaskRepositoryBox>
                            <Label sxOverrides={S.taskRepositoryLabel}>
                                Repository
                            </Label>
                            <RepositoryPicker
                                initialRepoId={addEditData.repositoryId}
                                repositories={repositories}
                                setSelectedRepoId={setSelectedRepoId}
                            />
                        </S.TaskRepositoryBox>

                        <S.TaskTypeBox>
                            <Label sxOverrides={S.taskTypeLabel}>
                                Task Type
                            </Label>
                            <S.TaskTypeDropdownWrapper>
                                <TaskClassificationPicker
                                    handleTaskClassificationChanged={
                                        handleTaskClassificationChange
                                    }
                                    initialTaskClassification={
                                        addEditData.taskClassification ||
                                        'Other'
                                    }
                                />
                                {addEditErrors.taskClassification === '' && (
                                    <Label
                                        sxOverrides={S.typeSelectErrorLabelSx}
                                    >
                                        {addEditErrors.taskClassification}
                                    </Label>
                                )}
                            </S.TaskTypeDropdownWrapper>
                        </S.TaskTypeBox>
                    </S.TaskSettingsBox>
                </S.SkillsAndTaskSettingsBox>
                <S.TitleInputWrapper>
                    <MultiLineInput
                        label="Task title"
                        input={addEditData.name}
                        onChangeInput={(event) => {
                            onChangeInput(event, 'name');
                        }}
                        error={addEditErrors.name}
                    />
                </S.TitleInputWrapper>
                <S.DescriptionInputWrapper>
                    <MultiLineInput
                        label="Task description"
                        input={addEditData.taskDescription}
                        onChangeInput={(event) => {
                            onChangeInput(event, 'taskDescription');
                        }}
                        error={addEditErrors.taskDescription}
                        multine={true}
                        rows={20}
                    />
                </S.DescriptionInputWrapper>
                <RichTextLabel>&nbsp;Rich text editor&nbsp;</RichTextLabel>
                <RichTextSwitch
                    checked={richTextEditorSwitch}
                    onChange={(e, checked) => setRichTextEditorSwitch(checked)}
                />
                {richTextEditorSwitch && (
                    <div>
                        <MDEditor
                            style={{
                                backgroundColor: color.darkBlue,
                                color: color.white
                            }}
                            value={addEditData.taskDescription}
                            height="100%"
                            minHeight={300}
                            preview={'edit'}
                            visibleDragbar={false}
                            onChange={(v) => {
                                setAddEditData({
                                    ...addEditData,
                                    taskDescription: v || ''
                                });
                            }}
                        />
                    </div>
                )}
                <S.ActionsContainer>
                    <Actions
                        onClickCancel={onClickCancel}
                        onClickSave={onClickSave}
                    />
                </S.ActionsContainer>
                <S.PlaceholderBox>
                    <Label sxOverrides={S.placeholderLabel}>
                        Use {'{{PLACEHOLDER}}'} to create a placeholder. Learn
                        more{' '}
                        <Label sxOverrides={S.placeholderHereLink}>here</Label>
                    </Label>
                </S.PlaceholderBox>
            </S.Container>
        </S.MuiModal>
    );
};

export default AddEditTemplate;
