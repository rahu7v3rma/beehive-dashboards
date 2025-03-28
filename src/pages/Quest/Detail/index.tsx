import { FunctionComponent, useEffect } from 'react';
import { Navbar } from 'src/shared';
import { RootBox } from './styled';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getQuest } from 'src/redux/quests/service';
import {
    getQuest as getQuestSelector,
    getIsLoading as getIsLoadingSelector
} from 'src/redux/quests/selectors';
import Header from './components/Header';
import HeaderSkeleton from './components/Skeletons/HeaderSkeleton';
import DescriptionSection from './components/DescriptionSection';
import DescriptionSectionSkeleton from './components/Skeletons/DescriptionSectionSkeleton';
import QuestHistory from '../components/History';
type Props = Record<string, never>;

type Params = {
    id: string;
};

const QuestDetail: FunctionComponent<Props> = () => {
    const { id } = useParams<Params>();
    const dispatch = useAppDispatch();

    const quest = useSelector(getQuestSelector);
    const isLoading = useSelector(getIsLoadingSelector);

    useEffect(() => {
        if (!id) return;
        dispatch(getQuest({ questId: id }));
    }, [id, dispatch]);

    return (
        <Navbar>
            <RootBox>
                {isLoading || !quest ? (
                    <>
                        <HeaderSkeleton />
                        <DescriptionSectionSkeleton />
                    </>
                ) : (
                    <>
                        <Header quest={quest} />
                        <DescriptionSection quest={quest} />
                        <QuestHistory questId={quest.id} />
                    </>
                )}
            </RootBox>
        </Navbar>
    );
};

export default QuestDetail;
