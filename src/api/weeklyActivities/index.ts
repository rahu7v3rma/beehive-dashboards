import { ACTIVITIES, DAILY_ACTIVITIES } from '../../constants/weeklyActivities';

export const getWeeklyActivities = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ACTIVITIES);
        }, 300);
    });
};

export const getDailyActivities = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DAILY_ACTIVITIES);
        }, 300);
    });
};
