import { RootState } from '../store';
import { ClientTypes } from './slice';
import { useSelector } from 'react-redux';

export const rootSelector = (state: RootState) => state.client;

export const ClientSelectors = (): ClientTypes => {
    const selectedProjectId = useSelector(
        (state: RootState) => state.client.selectedProjectId
    );

    const isLoading = useSelector((state: RootState) => state.client.isLoading);

    const repositories = useSelector(
        (state: RootState) => state.client.repositories
    );

    const quests = useSelector((state: RootState) => state.client.quests);
    const totalQuests = useSelector(
        (state: RootState) => state.client.totalQuests
    );

    const workTimeReview = useSelector(
        (state: RootState) => state.client.workTimeReview
    );

    const questsRowsPerPage = useSelector(
        (state: RootState) => state.client.questsRowsPerPage
    );

    const questsSearchQuery = useSelector(
        (state: RootState) => state.client.questsSearchQuery
    );

    const questsStatusFilter = useSelector(
        (state: RootState) => state.client.questsStatusFilter
    );

    return {
        selectedProjectId,
        isLoading,
        repositories,
        quests,
        totalQuests,
        workTimeReview,
        questsRowsPerPage,
        questsSearchQuery,
        questsStatusFilter
    };
};
