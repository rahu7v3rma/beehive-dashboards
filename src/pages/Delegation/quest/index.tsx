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
import { SuccessCriteriaPicker } from './components';
import { DelegateQuestRequest, DelegationObjectType } from 'src/types/delegate';
import { SuccessCriteria, successCriteriaList } from 'src/types/quests';
import {
    RootBox,
    SectionBox,
    SectionBoxNoMargin,
    delegateTitle,
    delegateSubtitle,
    ShortLongInputBox,
    RawInput,
    ShortLongSendBtn,
    ShortLongSendBtnWrapper,
    Image
} from '../styled';
import { ReactComponent as SendIcon } from 'src/assets/icons/send.svg';
import { DelegateSelectors } from 'src/redux/delegate/selectors';
import useAppDispatch from 'src/hooks/useAppDispatch';
import {
    delegateQuest,
    queryShortLongModel,
    getDescriptionAnalysis
} from 'src/redux/delegate/service';
import { signedIn } from 'src/redux/auth/service';
import { useNavigate } from 'react-router-dom';
import { ClientSelectors } from 'src/redux/client/selectors';
import { useSelector } from 'react-redux';
import { getProject } from 'src/redux/projects/selectors';

type Props = Record<string, never>;

export enum QuestDelegationStep {
    QuickStart = 'QuickStart',
    PopulateDescription = 'PopulateDescription',
    ConfirmAnalysis = 'ConfirmAnalysis',
    PopulateSuccessCriteria = 'PopulateSuccessCriteria',
    Done = 'Done'
}

const initialQuestParams = {
    description: null,
    title: null,
    questType: 1, // default quest type is 'feature'
    links: {},
    delegationTimeSeconds: 0,
    projectId: null,
    successCriteria: null
};

const QuestDelegation: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState<QuestDelegationStep>(
        QuestDelegationStep.QuickStart
    );
    const [scrollToBottom, setScrollToBottom] = useState<number>(0);
    const [createdQuestId, setCreatedQuestId] = useState<string>('');
    const [shortLongInput, setShortLongInput] = useState<string>('');
    const [successCriteria, setSuccessCriteria] = useState<
        SuccessCriteria[] | null
    >(successCriteriaList);
    const [questParams, setQuestParams] =
        useState<DelegateQuestRequest>(initialQuestParams);
    const endRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);
    const renderedAt = Date.now();
    const { isLoading, lastAnalysisResponse, loadingDescription } =
        DelegateSelectors();
    const { selectedProjectId } = ClientSelectors();
    const selectedProject = useSelector(getProject(selectedProjectId));
    const headline = useMemo(() => {
        switch (step) {
            case QuestDelegationStep.QuickStart:
                return 'What would you like to develop?';
            case QuestDelegationStep.PopulateDescription:
            case QuestDelegationStep.ConfirmAnalysis:
            case QuestDelegationStep.PopulateSuccessCriteria:
                return 'Edit your request';
            case QuestDelegationStep.Done:
                return `Thank you`;
            default:
                return '';
        }
    }, [step]);

    const subtitle = useMemo(() => {
        switch (step) {
            case QuestDelegationStep.QuickStart:
                return '';
            case QuestDelegationStep.PopulateDescription:
                return 'Edit the suggested title and description and click analyze';
            case QuestDelegationStep.ConfirmAnalysis:
            case QuestDelegationStep.PopulateSuccessCriteria:
                return 'Review the description feedback to improve the request details';
            case QuestDelegationStep.Done:
                return `Your request (ID:${createdQuestId}) was added to the queue`; // TODO: branch url cannot supply
            default:
                return '';
        }
    }, [step, createdQuestId]);

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

    // picker handlers
    const handleDataChanged = useCallback(
        (title: string, description: string) => {
            setQuestParams({
                ...questParams,
                description,
                title
            });
        },
        [questParams]
    );

    const onSuccessCriteriaUpdated = (data: SuccessCriteria[]) => {
        setSuccessCriteria(data);
    };

    // async handlers
    const getShortLongModel = useCallback(async () => {
        dispatch(
            queryShortLongModel({
                short_task_description: shortLongInput,
                project: selectedProject?.projectName || '',
                type: 'quest'
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setQuestParams({
                        ...questParams,
                        description: result['description'],
                        title: result['title']
                    });
                    setStep(QuestDelegationStep.PopulateDescription);
                } else {
                    alert('Oops, something went wrong');
                }
            })
            .catch((err) => {
                alert(
                    'Error generating detailed description' +
                        (err.description !== undefined
                            ? ': ' + err.description
                            : '')
                );
                setQuestParams({
                    ...questParams,
                    description: '',
                    title: shortLongInput
                });
                setStep(QuestDelegationStep.PopulateDescription);
            });
    }, [
        dispatch,
        shortLongInput,
        questParams,
        setQuestParams,
        setStep,
        selectedProject
    ]);

    const queryDescriptionAnalysis = useCallback(async () => {
        dispatch(
            getDescriptionAnalysis({
                title: questParams.title || '',
                description: questParams.description || '',
                type: 'quest'
            })
        )
            .unwrap()
            .then((result) => {
                if (result) {
                    setStep(QuestDelegationStep.ConfirmAnalysis);
                    setScrollToBottom(scrollToBottom + 1);
                } else {
                    alert(
                        'Unkown error in feedback, you can continue without the feedback analysis'
                    );
                }
            })
            .catch((err) => {
                alert(
                    'Error generating feedback analysis ' +
                        (err.description !== undefined
                            ? ': ' + err.description
                            : '')
                );
                setStep(QuestDelegationStep.PopulateSuccessCriteria);
                setScrollToBottom(scrollToBottom + 1);
            });
    }, [dispatch, questParams, setStep, setScrollToBottom, scrollToBottom]);

    const getSuccessCriteria = useCallback(async () => {
        if (successCriteria) {
            setStep(QuestDelegationStep.PopulateSuccessCriteria);
            setScrollToBottom(scrollToBottom + 1);
            return;
        }

        setSuccessCriteria(successCriteriaList);
    }, [
        successCriteria,
        setStep,
        scrollToBottom,
        setScrollToBottom,
        setSuccessCriteria
    ]);

    const delegateQuestOnClick = useCallback(async () => {
        dispatch(
            delegateQuest({
                ...questParams,
                successCriteria: (successCriteria || [])
                    .filter((c) => c.checked === true)
                    .map((c) => {
                        // Construct a new object without the 'checked' attribute
                        return {
                            title: c.title,
                            description: c.description,
                            explanation: c.explanation
                        };
                    }),
                delegationTimeSeconds: (Date.now() - renderedAt) / 1000,
                projectId: selectedProjectId
            })
        )
            .unwrap()
            .then((questId) => {
                if (questId) {
                    setStep(QuestDelegationStep.Done);
                    setCreatedQuestId(questId);
                } else {
                    alert('Unkown Error please contact administor');
                }
            })
            .catch(() => {
                alert('Unkown error, coul not delegate the task');
            });
    }, [
        dispatch,
        questParams,
        setStep,
        renderedAt,
        setCreatedQuestId,
        successCriteria,
        selectedProjectId
    ]);

    // The bottom action buttons have various titles, styles and effects, the following memo handles them all
    const actionsData = useMemo(() => {
        switch (step) {
            case QuestDelegationStep.QuickStart:
                return {
                    hideSubtitle: true
                };
            case QuestDelegationStep.PopulateDescription:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(QuestDelegationStep.QuickStart);
                    },
                    rightTitle: 'Analyze',
                    onRightClick: () => {
                        queryDescriptionAnalysis();
                    },
                    rightDisabled:
                        !questParams.description || !questParams.title
                };
            case QuestDelegationStep.ConfirmAnalysis:
                return {
                    leftTitle: 'Reanalyze',
                    onLeftClick: () => {
                        queryDescriptionAnalysis();
                    },
                    rightTitle: 'Next',
                    onRightClick: () => {
                        getSuccessCriteria();
                    }
                };
            case QuestDelegationStep.PopulateSuccessCriteria:
                return {
                    leftTitle: 'Back',
                    onLeftClick: () => {
                        setStep(QuestDelegationStep.ConfirmAnalysis);
                    },
                    rightTitle: 'Delegate',
                    onRightClick: () => {
                        setSuccessCriteria(successCriteria);
                        delegateQuestOnClick();
                    }
                };
            case QuestDelegationStep.Done:
                return {
                    hideSubtitle: true,
                    rightTitle: 'Done',
                    onRightClick: () => {
                        setSuccessCriteria(successCriteriaList);
                        setQuestParams(initialQuestParams);
                        setShortLongInput('');
                        setStep(QuestDelegationStep.QuickStart);
                    }
                };
        }
    }, [
        step,
        setStep,
        questParams,
        successCriteria,
        getSuccessCriteria,
        delegateQuestOnClick,
        queryDescriptionAnalysis
    ]);

    return (
        <Navbar>
            <div ref={startRef} />
            <RootBox>
                <Label sxOverrides={delegateTitle}>{headline}</Label>
                <Label sxOverrides={delegateSubtitle}>{subtitle}</Label>
                {step === QuestDelegationStep.QuickStart && (
                    <ShortLongInputBox>
                        <RawInput
                            id="filled-basic"
                            label="Explain your request briefly! we’ll do the rest"
                            variant="filled"
                            value={shortLongInput}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setShortLongInput(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (
                                    e.key === 'Enter' &&
                                    selectedProjectId &&
                                    shortLongInput &&
                                    !isLoading
                                ) {
                                    e.preventDefault(); // Prevents a new line if multiline
                                    getShortLongModel();
                                }
                            }}
                        />
                        {selectedProjectId && shortLongInput && !isLoading && (
                            <ShortLongSendBtnWrapper>
                                <ShortLongSendBtn onClick={getShortLongModel}>
                                    <SendIcon />
                                </ShortLongSendBtn>
                            </ShortLongSendBtnWrapper>
                        )}
                    </ShortLongInputBox>
                )}
                {(step === QuestDelegationStep.PopulateDescription ||
                    step === QuestDelegationStep.ConfirmAnalysis ||
                    step === QuestDelegationStep.PopulateSuccessCriteria) && (
                    <Delegate
                        title={questParams.title}
                        description={questParams.description}
                        objectType={DelegationObjectType.QUEST}
                        handleDataChanged={handleDataChanged}
                        titleDisabled={[
                            QuestDelegationStep.PopulateSuccessCriteria,
                            QuestDelegationStep.Done
                        ].includes(step)}
                        descriptionDisabled={[
                            QuestDelegationStep.PopulateSuccessCriteria,
                            QuestDelegationStep.Done
                        ].includes(step)}
                    />
                )}
                {step === QuestDelegationStep.ConfirmAnalysis && (
                    <SectionBox>
                        <Label sxOverrides={delegateTitle}>Feedback</Label>
                        <Label sxOverrides={delegateSubtitle}>
                            The following feedback was created by Beehive to
                            improve the quality of your description, and help
                            you solve the request faster.
                        </Label>
                        <Feedback analysis={lastAnalysisResponse} />
                    </SectionBox>
                )}
                {step === QuestDelegationStep.PopulateSuccessCriteria && (
                    <SectionBoxNoMargin>
                        <Label sxOverrides={delegateTitle}>
                            Success Criteria
                        </Label>
                        <Label sxOverrides={delegateSubtitle}>
                            Choose the success criteria that need to be required
                            for your wish.
                        </Label>
                        <SuccessCriteriaPicker
                            initialData={successCriteria || []}
                            onDataChange={onSuccessCriteriaUpdated}
                            isDisabled={false}
                        />
                    </SectionBoxNoMargin>
                )}
                {step === QuestDelegationStep.Done && <Image src={doneImage} />}
                <DelegateActionButton
                    {...{ ...actionsData, isLoading, loadingDescription }}
                />
            </RootBox>
            <div ref={endRef} />
        </Navbar>
    );
};

export default QuestDelegation;
