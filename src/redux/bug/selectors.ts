import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Bug } from 'src/types/bugs';

export const rootSelector = (state: RootState) => state.bug;

interface BugSelectorsType {
    bugs: Bug[];
    isLoading: boolean;
    error: string | null;
}

export const BugSelectors = (): BugSelectorsType => {
    const bugs = useSelector((state: RootState) => state.bug.bugs);

    const isLoading = useSelector((state: RootState) => state.bug.isLoading);

    const error = useSelector((state: RootState) => state.bug.error);

    return {
        bugs,
        isLoading,
        error
    };
};
