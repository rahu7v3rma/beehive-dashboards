import { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { Navbar } from 'src/shared';
import { RootBox, ReviewButtons } from './styled';
import ReviewButton from './components/ReviewButton';
import RequestModification from './components/RequestModification';
import ReviewSection from './components/ReviewSection';
import Approve from './components/Approve';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { useParams, useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'src/types/navigation';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';
import { getQuest, getQuestSolution } from 'src/redux/quests/service';

type Props = Record<string, never>;

type Params = {
    id: string;
};

const QuestReview: FunctionComponent<Props> = () => {
    const { id } = useParams<Params>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isRequestModificationVisible, setRequestModificationVisible] =
        useState(false);
    const [areReviewButtonsVisible, setReviewButtonsVisible] = useState(true);
    const [isApproveSectionVisible, setIsApproveSectionVisible] =
        useState(false);

    useEffect(() => {
        if (!id) return;
        dispatch(getQuest({ questId: id }));
        dispatch(getQuestSolution({ questId: id }));
    }, [id, dispatch]);

    const handleApproveClick = () => {
        setIsApproveSectionVisible(true);
        setReviewButtonsVisible(false);
    };

    const handleRequestModificationClick = () => {
        setRequestModificationVisible(true);
        setReviewButtonsVisible(false);
    };

    const handleCancelReview = () => {
        setRequestModificationVisible(false);
        setIsApproveSectionVisible(false);
        setReviewButtonsVisible(true);
    };

    const handleReviewCompletion = useCallback(() => {
        navigate(RoutesEnum.CLIENT_DASHBOARD);
    }, [navigate]);

    useEffect(() => {
        if (!id) {
            dispatch(
                setSnackbarAttributes({
                    snackbarOpen: true,
                    snackbarType: 'error',
                    snackbarMessage: 'Quest ID is missing from the URL'
                })
            );
            return;
        }
    }, [id, handleReviewCompletion, dispatch]);

    return (
        <Navbar>
            <RootBox>
                {/* TL's Solution with Review Buttons */}
                <ReviewSection />
                {areReviewButtonsVisible && (
                    <ReviewButtons>
                        <ReviewButton
                            label="Request Modification"
                            onClick={handleRequestModificationClick}
                        />
                        <ReviewButton
                            label="Approve"
                            onClick={handleApproveClick}
                        />
                    </ReviewButtons>
                )}

                {/* Request Modification Section */}
                {isRequestModificationVisible && (
                    <RequestModification
                        onCancel={handleCancelReview}
                        questId={id || ''}
                        onSuccess={handleReviewCompletion}
                    />
                )}

                {/* Approve Section */}
                {isApproveSectionVisible && (
                    <Approve
                        questId={id || ''}
                        onSuccess={handleReviewCompletion}
                        onCancel={handleCancelReview}
                    />
                )}
            </RootBox>
        </Navbar>
    );
};

export default QuestReview;
