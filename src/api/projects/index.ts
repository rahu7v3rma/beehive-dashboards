import {
    PROJECTS,
    PROJECT_ACTIVITY,
    PROJECT_BUDGET,
    PROJECT_CONTRIBUTORS,
    PROJECT_DELAYED_TASKS,
    PROJECT_QUEUE
} from 'src/constants/projects';
import {
    getProjects,
    getProjectQueue,
    getProjectActivity,
    getProjectContributors,
    getProjectDelayedTasks,
    getProjectBudgetReview,
    mock
} from '../apiCaller';
import {
    ACTIVITIES_STATS_1,
    ACTIVITIES_STATS_2,
    IActivityRange
} from 'src/constants/activityStat';

export const fetchProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECTS : getProjects());
        }, 300);
    });
};

export const fetchProjectQueue = (id: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECT_QUEUE : getProjectQueue(id));
        }, 300);
    });
};

export const fetchProjectActivity = (id: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECT_ACTIVITY : getProjectActivity(id));
        }, 300);
    });
};

export const fetchProjectContributors = (id: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECT_CONTRIBUTORS : getProjectContributors(id));
        }, 300);
    });
};

export const fetchProjectBudgetReview = (id: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECT_BUDGET : getProjectBudgetReview(id));
        }, 300);
    });
};

export const fetchProjectDelayedTasks = (id: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? PROJECT_DELAYED_TASKS : getProjectDelayedTasks(id));
        }, 300);
    });
};

export const fetchActivityStats = (params: IActivityRange) => {
    const date = new Date();
    date.setDate(date.getDate() - 13);
    return new Promise((resolve) => {
        setTimeout(() => {
            if (params.from && params.from > date) {
                resolve(ACTIVITIES_STATS_1);
            } else {
                resolve(ACTIVITIES_STATS_2);
            }
        }, 300);
    });
};

export const fetchProjectBudget = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PROJECT_BUDGET);
        }, 300);
    });
};
