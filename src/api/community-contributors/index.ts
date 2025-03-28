import { COMMUNITY_CONTRIBUTORS } from 'src/constants/community-contributors';

export const getCommunityContributors = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(COMMUNITY_CONTRIBUTORS);
        }, 300);
    });
};
