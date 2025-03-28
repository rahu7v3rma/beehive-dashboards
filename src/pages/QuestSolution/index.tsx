import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Button, Input, Label, Navbar } from 'src/shared';
import {
    ContentBox,
    ErrorBox,
    Fieldset,
    Legend,
    NotesFieldset,
    NotesLegend,
    RatingSection,
    RequestTitleBox,
    RootBox,
    S
} from './styled';
import color from 'src/theme/color';
import { ReactComponent as AddMessageIcon } from 'src/assets/icons/add-message.svg';
import { useSearchParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { QuestSolutionParams } from 'src/types/questSolution';
import { useAppDispatch } from 'src/hooks';
import { createQuestSolution } from 'src/redux/quest-solution/service';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close-yellow.svg';
import StarsRating from 'src/shared/StarsRating';
import { Rating } from 'src/types/rating';
import { updateRating as updateRatingService } from 'src/redux/rating/service';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';
import { useSelector } from 'react-redux';
import { getQuest as getQuestSelector } from 'src/redux/quests/selectors';
import { getQuest } from 'src/redux/quests/service';
import CommentRating from './Rating/CommentRating';
import { RatingSubject } from 'src/enums/rating';
type Props = Record<string, never>;

const QuestSolution: FunctionComponent<Props> = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title') || 'Request title';
    const id = searchParams.get('id');
    const [prUrls, setPrUrls] = useState<string[]>(['']);
    const [notes, setNotes] = useState<string>('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
    const [isAddPrDisabled, setIsAddPrDisabled] = useState<boolean>(true);
    const [disabledUrls, setDisabledUrls] = useState<boolean[]>([false]);
    const [urlErrors, setUrlErrors] = useState<string[]>([]);
    const [apiResult, setApiResult] = useState<string>('');
    const [apiError, setApiError] = useState<string>('');
    const quest = useSelector(getQuestSelector);
    const [ratings, setRatings] = useState<Rating[]>([]);
    const [isCommentRatingShowing, setIsCommentRatingShowing] =
        useState<boolean>(false);

    const [comment, setComment] = useState<string>('');

    const validateURL = (url: string) => {
        if (
            !/^https?:\/\/(www\.)?github\.com\/\S+\/\S+\/pull\/\d+$/i.test(
                url
            ) &&
            !/^github\.com\/\S+\/\S+\/pull\/\d+$/i.test(url)
        ) {
            return 'Invalid github pull request URL';
        }
        return '';
    };

    const handlePrUrlChange = (index: number, value: string) => {
        const updatedPrUrls = [...prUrls];
        updatedPrUrls[index] = value;
        setPrUrls(updatedPrUrls);

        // Validate URL and update error state
        const updatedErrors = [...urlErrors];
        updatedErrors[index] = validateURL(value);
        setUrlErrors(updatedErrors);

        // Adjust submit button state based on errors
        setIsSubmitDisabled(
            updatedPrUrls.some((url, i) => validateURL(url) || updatedErrors[i])
        );
        setIsAddPrDisabled(
            updatedPrUrls.some((url, i) => validateURL(url) || updatedErrors[i])
        );
    };

    const handleAddPr = () => {
        if (prUrls[prUrls.length - 1].trim() !== '') {
            setPrUrls([...prUrls, '']);
            setDisabledUrls([...disabledUrls, false]);
            setIsSubmitDisabled(false);
            setIsAddPrDisabled(true);
        }

        const updatedDisabledUrls = [...disabledUrls];
        updatedDisabledUrls[prUrls.length - 1] =
            prUrls[prUrls.length - 1].trim() !== '';
        setDisabledUrls(updatedDisabledUrls);
    };

    const handleRemovePr = (index: number) => {
        const updatedPrUrls = [...prUrls];
        const updatedDisabledUrls = [...disabledUrls];
        const updatedErrors = [...urlErrors];

        updatedPrUrls.splice(index, 1);
        updatedDisabledUrls.splice(index, 1);
        updatedErrors.splice(index, 1);

        setPrUrls(updatedPrUrls);
        setDisabledUrls(updatedDisabledUrls);
        setUrlErrors(updatedErrors);

        setIsSubmitDisabled(
            updatedPrUrls.some((url, i) => validateURL(url) || updatedErrors[i])
        );
        setIsAddPrDisabled(
            updatedPrUrls.some((url, i) => validateURL(url) || updatedErrors[i])
        );
    };

    const handleNotesChange = (value: string) => {
        setNotes(value);
    };

    const handleRatingsComplete = (submittedRatings: Rating[]) => {
        setIsCommentRatingShowing(true);
        setRatings(submittedRatings);
        setIsSubmitDisabled(false);
    };

    const updateRating = useCallback(
        async (rating: Rating) => {
            try {
                await dispatch(
                    updateRatingService({
                        subject: rating.subject,
                        score: rating.score,
                        text: rating.text,
                        ratingAuthorizationCode: quest.ratingAuthorizationCode
                    })
                ).unwrap();
                console.log('Rating updated successfully');

                return true;
            } catch (error) {
                console.error('Error updating rating:', error);
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'error',
                        snackbarMessage:
                            'An error occurred while updating your rating. Please try again or contact support if the issue persists.'
                    })
                );
                return false;
            }
        },
        [dispatch, quest]
    );

    const handleSubmit = async () => {
        setApiResult('');
        setApiError('');

        // handle ratings if they exist
        if (ratings.length > 0) {
            const ratingsWithComment = ratings.map((rating) => ({
                ...rating,
                text: comment // Add the comment to all ratings
            }));
            for (const rating of ratingsWithComment) {
                const isRatingUpdated = await updateRating(rating);
                if (!isRatingUpdated) {
                    setIsSubmitDisabled(false);
                    setIsAddPrDisabled(false);
                    return;
                }
            }
        }
        const data: QuestSolutionParams = {
            pullRequestUrls: prUrls.filter((url) => url.trim() !== ''),
            notes,
            questId: id || ''
        };
        dispatch(createQuestSolution(data))
            .unwrap()
            .then((result) => {
                if (result) {
                    setApiResult('Successfully submitted quest solution');
                    setIsSubmitDisabled(true);
                    setIsAddPrDisabled(true);
                }
            })
            .catch(() => {
                setApiError('An api error occured while submitting solution');
            });
    };

    const solutionQuestions = [
        {
            subject: RatingSubject.QUEST_DESCRIPTION,
            text: 'How would you rate the request description?'
        }
    ];

    useEffect(() => {
        if (!id) return;
        try {
            dispatch(getQuest({ questId: id }));
        } catch (error) {
            console.error('Error fetching quest:', error);
        }
    }, [dispatch, id]);

    return (
        <Navbar>
            <RootBox>
                <Label sxOverrides={S.title}>Submit request</Label>
                <RequestTitleBox>
                    <Label sxOverrides={S.subTitleFirst}>Request title</Label>
                    <Label sxOverrides={S.subTitleSecond}>
                        {title || 'No Title Provided'}{' '}
                    </Label>
                </RequestTitleBox>
                <Label sxOverrides={S.description}>
                    Complete your work, paste the Pull Request (PR) in the box
                    below, and submit your solution.
                </Label>
                <ContentBox>
                    {prUrls.map((prUrl, index) => (
                        <Fieldset sx={S.fieldset} key={index}>
                            <Legend sx={S.legend}>Pull request URL</Legend>
                            <Input
                                inputStyle={S.input}
                                placeholder="https://"
                                value={prUrl}
                                onChange={(e) =>
                                    handlePrUrlChange(index, e.target.value)
                                }
                                disabled={disabledUrls[index]}
                            />
                            {index !== 0 && (
                                <Label
                                    sxOverrides={S.deleteLabel}
                                    onClick={() => handleRemovePr(index)}
                                >
                                    <CloseIcon />
                                </Label>
                            )}
                            {urlErrors[index] && ( // Display validation error for the specific input
                                <span style={{ color: 'red' }}>
                                    {urlErrors[index]}
                                </span>
                            )}
                        </Fieldset>
                    ))}
                    <Button
                        color={color.darkMintYellow}
                        styles={
                            isAddPrDisabled ? S.prBtnDisabled : S.prBtnEnabled
                        }
                        onClick={handleAddPr}
                        disabled={isAddPrDisabled}
                    >
                        Add another PR
                        <AddMessageIcon style={S.addMessageIcon} />
                    </Button>
                    <NotesFieldset sx={S.fieldset}>
                        <NotesLegend sx={S.legend}>Add Notes</NotesLegend>
                        <MDEditor
                            style={S.editor}
                            height={100}
                            value={notes}
                            onChange={(v) => handleNotesChange(v || '')}
                            preview={'edit'}
                            visibleDragbar={false}
                            toolbarBottom={true}
                        />
                    </NotesFieldset>
                </ContentBox>

                {prUrls.some((url) => url.trim() !== '') && (
                    <RatingSection>
                        <StarsRating
                            onRatingsComplete={handleRatingsComplete}
                            questions={solutionQuestions}
                        />
                        {isCommentRatingShowing && (
                            <CommentRating
                                value={comment}
                                onChange={setComment}
                            />
                        )}
                    </RatingSection>
                )}

                {apiError && <ErrorBox style={S.errorMsg}>{apiError}</ErrorBox>}
                {apiResult && <span style={S.apiResult}>{apiResult}</span>}

                <Button
                    type="button"
                    styles={
                        isSubmitDisabled || !ratings.length
                            ? S.submitBtnDisabled
                            : S.submitBtnEnabled
                    }
                    disabled={!ratings.length || isSubmitDisabled}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </RootBox>
        </Navbar>
    );
};
export default QuestSolution;
