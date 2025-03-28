import { ACTIVITIES, ACTIVITY } from '../../constants/activities';

export const getActivities = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ACTIVITIES);
        }, 300);
    });
};

export const getActivity = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ACTIVITY);
        }, 300);
    });
};
