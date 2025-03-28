import {
    Repository,
    TaskAnalysisRequestParams,
    TaskTemplate
} from 'src/types/delegate';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const rootSelector = (state: RootState) => state.delegate;

export const getRepositoriesFromState = (state: RootState) =>
    rootSelector(state)?.repositories;

export const getSelectedRepoIdFromState = (state: RootState) =>
    rootSelector(state)?.selectedRepoId;

export const getAvailableSkillsFromState = (state: RootState) =>
    rootSelector(state)?.availableSkills || [];

export const getTemplatesFromState = (state: RootState) =>
    rootSelector(state)?.templates;

export const getDescriptionAnalysisFromState = (state: RootState) =>
    rootSelector(state)?.lastAnalysisResponse;

export const getDescriptionLastRequestFromState = (state: RootState) =>
    rootSelector(state)?.lastAnalysisRequest;

export const getIsLoading = (state: RootState) =>
    rootSelector(state)?.isLoading;

export const getError = (state: RootState) => rootSelector(state)?.error;

export const getLoadingDescription = (state: RootState) =>
    rootSelector(state)?.loadingDescription;

interface DelegateSelectorsType {
    lastAnalysisRequest: TaskAnalysisRequestParams | null;
    lastAnalysisResponse: string[] | null;
    repositories: Repository[] | null;
    availableSkills: string[];
    templates: TaskTemplate[];
    isLoading: boolean;
    error: string | null;
    selectedRepoId: number | null;
    loadingDescription: string | null;
}

export const DelegateSelectors = (): DelegateSelectorsType => {
    const lastAnalysisRequest = useSelector(
        (state: RootState) => state.delegate.lastAnalysisRequest
    );

    const lastAnalysisResponse = useSelector(
        (state: RootState) => state.delegate.lastAnalysisResponse
    );

    const repositories = useSelector(
        (state: RootState) => state.delegate.repositories
    );

    const availableSkills = useSelector(
        (state: RootState) => state.delegate.availableSkills
    );

    const templates = useSelector(
        (state: RootState) => state.delegate.templates
    );

    const isLoading = useSelector(
        (state: RootState) => state.delegate.isLoading
    );

    const error = useSelector((state: RootState) => state.delegate.error);

    const loadingDescription = useSelector(
        (state: RootState) => state.delegate.loadingDescription
    );

    const selectedRepoId = useSelector(
        (state: RootState) => state.delegate.selectedRepoId
    );

    return {
        lastAnalysisRequest,
        lastAnalysisResponse,
        repositories,
        availableSkills,
        templates,
        isLoading,
        error,
        loadingDescription,
        selectedRepoId
    };
};
