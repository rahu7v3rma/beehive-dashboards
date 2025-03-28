import {
    FunctionComponent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import { Label, Navbar } from 'src/shared';
import doneImage from 'src/assets/images/Done.png';
import { Delegate, DelegateActionButton, Feedback } from '../shared';
import {
    Settings,
    TaskTemplatePicker,
    QaSwitch,
    TaskContext,
    QAInstructions,
    RepositoryPicker
} from './components';
import {
    TaskTemplate,
    DelegateTaskRequest,
    DelegationObjectType
} from 'src/types/delegate';
import {
    RootBox,
    SectionBox,
    RepoPickerBox,
    delegateTitle,
    delegateSubtitle,
    repoTitle,
    ShortLongInputBox,
    RawInput,
    ShortLongSendBtn,
    ShortLongSendBtnWrapper,
    Image,
    orLabel
} from '../styled';
import { ReactComponent as SendIcon } from 'src/assets/icons/send.svg';
import { DelegateSelectors } from 'src/redux/delegate/selectors';
import useAppDispatch from 'src/hooks/useAppDispatch';
import {
    getAllSkills,
    selectRepoId,
    delegate,
    queryShortLongModel,
    getDescriptionAnalysis,
    generateTaskContext,
    calculateTaskTimeEstimation
} from 'src/redux/delegate/service';
import { signedIn } from 'src/redux/auth/service';
import { useNavigate } from 'react-router-dom';
import { TaskContextData } from 'src/types/tasks';
import { ClientSelectors } from 'src/redux/client/selectors';
import { useSelector } from 'react-redux';
import { getProject } from 'src/redux/projects/selectors';

type Props = Record<string, never>;

export enum DelegationStep {
    ChooseRepo = 'ChooseRepo',
    QuickStart = 'QuickStart',
    ChooseFromTemplate = 'ChooseFromTemplate',
    PopulateDescription = 'PopulateDescription',
    ConfirmAnalysis = 'ConfirmAnalysis',
    PopulateContext = 'PopulateContext',
    PopulateSettings = 'PopulateSettings',
    QaByCommuinty = 'QaByCommuinty',
    Done = 'Done'
}

const initialTaskParams = {
    description: null,
    title: null,
    taskClassification: 'Other',
    skills: [],
    chainReview: false,
    maxChainIterations: null,
    chainDescription: null,
    delegationTimeSeconds: 0,
    repositoryId: 0,
    context: null
};

const TaskDelegation: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState<DelegationStep>(DelegationStep.ChooseRepo);
    const [shortLongInput, setShortLongInput] = useState<string>('');
    const [scrollToBottom, setScrollToBottom] = useState<number>(0);
    const [estimation, setEstimation] = useState<number | undefined>(undefined);
    const [createdTaskId, setCreatedTaskId] = useState<string>('');
    const [taskContextData, setTaskContextData] = useState<
        TaskContextData[] | null
    >(null);
    const [taskParams, setTaskParams] =
        useState<DelegateTaskRequest>(initialTaskParams);
    const endRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);
    const renderedAt = Date.now();
    const {
        availableSkills,
        lastAnalysisResponse,
        templates,
        selectedRepoId,
        isLoading,
        loadingDescription
    } = DelegateSelectors();
    const { repositories } = ClientSelectors();
    const { selectedProjectId } = ClientSelectors();
    const selectedProject = useSelector(getProject(selectedProjectId));

    const subtitle = useMemo(() => {
        switch (step) {
            case DelegationStep.ChooseRepo:
            case DelegationStep.QuickStart:
            case DelegationStep.ChooseFromTemplate:
                return 'Choose the repository you want to delegate a task in';
            case DelegationStep.PopulateDescription:
                return 'Edit the suggested title and description and click analyze';
            case DelegationStep.ConfirmAnalysis:
                return 'Review the task description feedback to improve the task details';
            case DelegationStep.PopulateContext:
                return 'Review the suggested task context below and make changes if needed';
            case DelegationStep.PopulateSettings:
            case DelegationStep.QaByCommuinty:
                return 'Validate all settings';
            case DelegationStep.Done:
                return `The task (ID:${createdTaskId}) was added to the queue`;
            default:
                return '';
        }
    }, [step, createdTaskId]);

    //use effects
    useEffect(() => {
        if (!signedIn()) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        scrollToBottom &&
            endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [scrollToBottom]);

    const fetchRemoteData = useCallback(async () => {
        if (!availableSkills || availableSkills.length === 0) {
            await dispatch(getAllSkills());
        }
    }, [dispatch, availableSkills]);

    useEffect(() => {
        dispatch(fetchRemoteData);
    }, [dispatch, fetchRemoteData]);

    // picker handlers
    const handleSelectedTemplate = useCallback(
        (template: TaskTemplate) => {
            setTaskParams({
                ...taskParams,
                description: template.taskDescription,
                title: template.name,
                taskClassification: template.taskClassification,
                skills: template.skills
            });
            setStep(DelegationStep.PopulateDescription);
        },
        [taskParams]
    );

    const handleDataChanged = useCallback(
        (title: string, description: string) => {
            setTaskParams({
                ...taskParams,
                description,
                title
            });
        },
        [taskParams]
    );

    const handleQaChange = useCallback(
        (checked: boolean) => {
            setScrollToBottom(scrollToBottom + 1);
            const updatedParams = {
                ...taskParams,
                chainReview: checked
            };
            setTaskParams(updatedParams);
        },
        [taskParams, setTaskParams, setScrollToBottom, scrollToBottom]
    );

    const handleQaParamsChange = useCallback(
        (maxChainIterations: number, chainDescription: string) => {
            const updatedParams = {
                ...taskParams,
                maxChainIterations,
                chainDescription
            };
            setTaskParams(updatedParams);
        },
        [taskParams]
    );

    const handleTaskClassificationChange = useCallback(
        (taskClassification: string) => {
            setTaskParams({
                ...taskParams,
                taskClassification
            });
        },
        [taskParams]
    );

    const handleSkillsChange = useCallback(
        (skills: string[]) => {
            setTaskParams({
                ...taskParams,
                skills
            });
        },
        [taskParams]
    );

    const handleRepoSelected = useCallback(
        (id: number) => {
            dispatch(selectRepoId(id));
            setTaskParams({
                ...taskParams,
                repositoryId: id
            });
            setStep(
                step === DelegationStep.ChooseFromTemplate
                    ? DelegationStep.ChooseFromTemplate
                    : DelegationStep.QuickStart
            );
        },
        [dispatch, taskParams, step]
    );

    const onTaskDataUpdated = (data: TaskContextData[]) => {
        setTaskContextData(data);
    };

    // async handlers
    const getShortLongModel = useCallback(async () => {
        dispatch(
            queryShortLongModel({
                short_task_description: shortLongInput,
                project: selectedProject.projectName || 'missing'
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setTaskParams({
                        ...taskParams,
                        description: result['description'],
                        title: result['title']
                    });
                    setStep(DelegationStep.PopulateDescription);
                } else {
                    alert('Oops, something went wrong');
                }
            });
    }, [
        dispatch,
        shortLongInput,
        taskParams,
        setTaskParams,
        setStep,
        selectedProject
    ]);

    const queryDescriptionAnalysis = useCallback(async () => {
        dispatch(
            getDescriptionAnalysis({
                title: taskParams.title || '',
                description: taskParams.description || ''
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setStep(DelegationStep.ConfirmAnalysis);
                    setScrollToBottom(scrollToBottom + 1);
                } else {
                    alert(
                        'Unkown error in feedback, you can continue without the feedback analysis'
                    );
                }
            });
    }, [dispatch, taskParams, setStep, setScrollToBottom, scrollToBottom]);

    const queryTaskTimeEstimation = useCallback(async () => {
        dispatch(
            calculateTaskTimeEstimation({
                task_skills: taskParams.skills || [],
                task_description: taskParams.description || ''
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setEstimation(result);
                    setStep(DelegationStep.QaByCommuinty);
                    setScrollToBottom(scrollToBottom + 1);
                }
            })
            .catch(() => {
                console.log('error in time estimation request');
                setStep(DelegationStep.QaByCommuinty);
                setScrollToBottom(scrollToBottom + 1);
            });
    }, [
        dispatch,
        taskParams,
        setEstimation,
        scrollToBottom,
        setScrollToBottom
    ]);

    const getTaskContext = useCallback(async () => {
        const repository = repositories?.find(
            (repo) => repo.id === selectedRepoId
        );
        if (taskContextData) {
            setStep(DelegationStep.PopulateContext);
            setScrollToBottom(scrollToBottom + 1);
            return;
        }
        dispatch(
            generateTaskContext({
                task_description: taskParams.description || '',
                repo_url: repository?.url || ''
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setTaskContextData(result);
                } else {
                    alert(
                        'Unkown error in context generator, you may add youself relevant contexts'
                    );
                }
                setStep(DelegationStep.PopulateContext);
                setScrollToBottom(scrollToBottom + 1);
            })
            .catch(() => {
                alert(
                    'Unkown error in context generator, you may add youself relevant contexts'
                );
                setStep(DelegationStep.PopulateContext);
                setScrollToBottom(scrollToBottom + 1);
            });
    }, [
        dispatch,
        taskParams,
        setStep,
        scrollToBottom,
        setScrollToBottom,
        repositories,
        taskContextData,
        selectedRepoId
    ]);

    const delegateTask = useCallback(async () => {
        dispatch(
            delegate({
                ...taskParams,
                context: (taskContextData || [])
                    .map(function (item) {
                        delete item.edit;
                        return item;
                    })
                    .filter(
                        (c) =>
                            c.file !== '' &&
                            c.entity !== '' &&
                            c.potentialUse !== ''
                    ),
                delegationTimeSeconds: (Date.now() - renderedAt) / 1000
            })
        )
            .unwrap()
            .then((taskId) => {
                if (taskId) {
                    setStep(DelegationStep.Done);
                    setCreatedTaskId(taskId);
                } else {
                    alert('Unkown Error please contact administor');
                }
            })
            .catch(() => {
                alert('Unkown error, coul not delegate the task');
            });
    }, [
        dispatch,
        taskParams,
        setStep,
        renderedAt,
        setCreatedTaskId,
        taskContextData
    ]);

    // The bottom action buttons have various titles, styles and effects, the following memo handles them all
    const actionsData = useMemo(() => {
        switch (step) {
            case DelegationStep.ChooseRepo:
                return {
                    hideSubtitle: true
                };
            case DelegationStep.QuickStart:
                return {
                    hideSubtitle: true,
                    uniqueButtons: true,
                    rightTitle: 'Create from a template',
                    onRightClick: () => {
                        setStep(DelegationStep.ChooseFromTemplate);
                    }
                };
            case DelegationStep.ChooseFromTemplate:
                return {
                    hideSubtitle: true,
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(DelegationStep.QuickStart);
                    }
                };
            case DelegationStep.PopulateDescription:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(DelegationStep.ChooseRepo);
                    },
                    rightTitle: 'Analyze',
                    onRightClick: () => {
                        queryDescriptionAnalysis();
                    },
                    rightDisabled: !taskParams.description || !taskParams.title
                };
            case DelegationStep.ConfirmAnalysis:
                return {
                    leftTitle: 'Reanalyze',
                    onLeftClick: () => {
                        queryDescriptionAnalysis();
                    },
                    rightTitle: 'Next',
                    onRightClick: () => {
                        getTaskContext();
                    }
                };
            case DelegationStep.PopulateContext:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(DelegationStep.ConfirmAnalysis);
                    },
                    rightTitle: 'Next',
                    onRightClick: () => {
                        setStep(DelegationStep.PopulateSettings);
                        setScrollToBottom(scrollToBottom + 1);
                    }
                };
            case DelegationStep.PopulateSettings:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(DelegationStep.PopulateContext);
                    },
                    rightTitle: 'Next',
                    onRightClick: () => {
                        queryTaskTimeEstimation();
                    }
                };
            case DelegationStep.QaByCommuinty:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(DelegationStep.PopulateSettings);
                    },
                    rightTitle: 'Delegate',
                    onRightClick: () => {
                        delegateTask();
                    },
                    estimation: estimation
                };
            case DelegationStep.Done:
                return {
                    hideSubtitle: true,
                    rightTitle: 'Done',
                    onRightClick: () => {
                        setTaskContextData(null);
                        setTaskParams(initialTaskParams);
                        setStep(DelegationStep.ChooseRepo);
                    }
                };
        }
    }, [
        step,
        setStep,
        taskParams,
        scrollToBottom,
        setScrollToBottom,
        getTaskContext,
        delegateTask,
        queryDescriptionAnalysis,
        queryTaskTimeEstimation,
        estimation
    ]);

    return (
        <Navbar>
            <div ref={startRef} />
            <RootBox>
                <Label sxOverrides={delegateTitle}>
                    {step === DelegationStep.Done
                        ? 'Thank you'
                        : 'What would you like to delegate?'}
                </Label>
                <Label sxOverrides={delegateSubtitle}>{subtitle}</Label>
                {(step === DelegationStep.ChooseRepo ||
                    step === DelegationStep.QuickStart ||
                    step === DelegationStep.ChooseFromTemplate) && (
                    <RepoPickerBox>
                        <Label sxOverrides={repoTitle}>Repository </Label>
                        <RepositoryPicker
                            repositories={repositories}
                            setSelectedRepoId={handleRepoSelected}
                            disabled={!repositories}
                        />
                    </RepoPickerBox>
                )}
                {step === DelegationStep.QuickStart && (
                    <>
                        <ShortLongInputBox>
                            <RawInput
                                id="filled-basic"
                                label="Explain the task briefly! we’ll do the rest"
                                variant="filled"
                                value={shortLongInput}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setShortLongInput(e.target.value);
                                }}
                            />
                            {selectedRepoId && shortLongInput && !isLoading && (
                                <ShortLongSendBtnWrapper>
                                    <ShortLongSendBtn
                                        onClick={getShortLongModel}
                                    >
                                        <SendIcon />
                                    </ShortLongSendBtn>
                                </ShortLongSendBtnWrapper>
                            )}
                        </ShortLongInputBox>
                        {!isLoading && (
                            <Label sxOverrides={orLabel}> Or </Label>
                        )}
                    </>
                )}
                {step === DelegationStep.ChooseFromTemplate && (
                    <TaskTemplatePicker
                        handleSelectedTemplate={handleSelectedTemplate}
                        templates={templates.filter(
                            (t) => t.repositoryId === selectedRepoId
                        )}
                    />
                )}
                {(step === DelegationStep.PopulateDescription ||
                    step === DelegationStep.ConfirmAnalysis ||
                    step === DelegationStep.PopulateContext ||
                    step === DelegationStep.PopulateSettings ||
                    step === DelegationStep.QaByCommuinty) && (
                    <Delegate
                        title={taskParams.title}
                        description={taskParams.description}
                        objectType={DelegationObjectType.TASK}
                        handleDataChanged={handleDataChanged}
                    />
                )}
                {step === DelegationStep.ConfirmAnalysis && (
                    <SectionBox>
                        <Label sxOverrides={delegateTitle}>Feedback</Label>
                        <Label sxOverrides={delegateSubtitle}>
                            The following feedback was created by Beehive to
                            improve the quality of your description, and help
                            you define the task better.
                        </Label>
                        <Feedback analysis={lastAnalysisResponse} />
                    </SectionBox>
                )}
                {(step === DelegationStep.PopulateContext ||
                    step === DelegationStep.PopulateSettings ||
                    step === DelegationStep.QaByCommuinty) && (
                    <SectionBox>
                        <Label sxOverrides={delegateTitle}>Task Context</Label>
                        <Label sxOverrides={delegateSubtitle}>
                            Context are relevant objects that the contributor
                            should know of in order to solve your task properly.
                        </Label>
                        <TaskContext
                            initialData={taskContextData || []}
                            onDataUpdated={onTaskDataUpdated}
                        />
                    </SectionBox>
                )}
                {(step === DelegationStep.PopulateSettings ||
                    step === DelegationStep.QaByCommuinty) && (
                    <SectionBox>
                        <Label sxOverrides={delegateTitle}>Settings</Label>
                        <Label sxOverrides={delegateSubtitle}>
                            What skills are required by the contributor? What
                            type of task are you delegating?
                        </Label>
                        <Settings
                            initialSelectedSkills={taskParams.skills}
                            availableSkills={availableSkills}
                            handleTaskClassificationChange={
                                handleTaskClassificationChange
                            }
                            initialTaskClassification={
                                taskParams.taskClassification
                            }
                            handleSkillsChange={handleSkillsChange}
                        />
                    </SectionBox>
                )}
                {step === DelegationStep.QaByCommuinty && (
                    <SectionBox>
                        <Label sxOverrides={delegateTitle}>
                            Community review
                        </Label>
                        <Label sxOverrides={delegateSubtitle}>
                            Do you want the code to run through qa and code
                            review by the community?
                        </Label>
                        <QaSwitch handleQaChange={handleQaChange} />
                        {taskParams.chainReview && (
                            <QAInstructions
                                handleQaParamsChange={handleQaParamsChange}
                            />
                        )}
                    </SectionBox>
                )}
                {step === DelegationStep.Done && <Image src={doneImage} />}
                <DelegateActionButton
                    {...{ ...actionsData, isLoading, loadingDescription }}
                />
            </RootBox>
            <div ref={endRef} />
        </Navbar>
    );
};

export default TaskDelegation;
