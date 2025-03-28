import { DELAYED_WORK } from 'src/constants/delayedWork';
import { TASK } from '../../constants/tasks';
import { TASK_DETAILS } from 'src/constants/taskDetails';

export const getTasksCount = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(TASK);
        }, 300);
    });
};

export const getDelayedTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DELAYED_WORK);
        }, 5000);
    });
};

export const getTaskCompleteDetails = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(TASK_DETAILS);
        }, 300);
    });
};
