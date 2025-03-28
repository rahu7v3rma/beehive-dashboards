import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { QuestSolutionParams } from 'src/types/questSolution';

export const rootSelector = (state: RootState) => state.questSolution;

export const getQuestSolution = (state: RootState) =>
    rootSelector(state)?.questSolution;

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getError = (state: RootState) => rootSelector(state)?.error;

export const getLoadingDescription = (state: RootState) =>
    rootSelector(state)?.loadingDescription;

interface QuestSolutionSelectorType {
    isLoading: boolean;
    loadingDescription: string | null;
    error: string | null;
    questSolution: QuestSolutionParams[];
}

export const QuestSolutionSelector = (): QuestSolutionSelectorType => {
    const isLoading = useSelector(
        (state: RootState) => state.delegate.isLoading
    );

    const loadingDescription = useSelector(
        (state: RootState) => state.delegate.loadingDescription
    );

    const error = useSelector((state: RootState) => state.delegate.error);

    const questSolution = useSelector(
        (state: RootState) => state.delegate.questSolution
    );

    return {
        isLoading,
        loadingDescription,
        error,
        questSolution
    };
};
