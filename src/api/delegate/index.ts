import { getRepositories } from '../apiCaller';

export const fetchRepositories = () => {
    return new Promise((resolve) => {
        resolve(getRepositories());
    });
};
