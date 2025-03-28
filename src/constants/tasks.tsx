import randomDate from 'src/utils/dateFormat/RandomDate';
import { ITask, Task } from '../types/tasks';

export const TASK: ITask = {
    pending: 54,
    in_review: 25,
    in_progress: 43
};

export const TaskTypes: string[] = [
    'Build a React component',
    'Create a Django view',
    'Build a React page',
    'Code review',
    'Build a scraper',
    'Make changes to a React page',
    'Change back-end logic',
    'Get data from an external API'
];

export const TABLE_HEADER_CELLS: Task = {
    Project: '',
    'Time created': new Date(),
    'Task name': '',
    Rating: 0,
    'Net working time': 0,
    'Description & Feedback': ''
};

export const REQUIRES_MODIFICATIONS: Task[] = [...Array(30)].map((_, i) => {
    return {
        Project: `Atomic ${i}`,
        'Time created': randomDate(new Date(2022, 1, 1), new Date(2023, 1, 1)),
        Rating: 3,
        'Task name': `REQUIRES_MODIFICATIONS - The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",  The first line of Lorem Ipsum, "Lorem ipsum dolor sit am”dadadaadad ${i}`,
        'Net working time': Math.floor(Math.random() * 100),
        'Description & Feedback':
            'The first line of Lorem Ipsum, Lorem ipsum dolor sit amet. The second line of Lorem Ipsum, Lorem ipsum dolor sit amet.'
    };
});

export const IN_REVIEW: Task[] = [...Array(30)].map((_, i) => {
    return {
        Project: `Atomic ${i}`,
        'Time created': randomDate(new Date(2022, 1, 1), new Date(2023, 1, 1)),
        Rating: 3,
        'Task name': `IN_REVIEW - The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",  The first line of Lorem Ipsum, "Lorem ipsum dolor sit am”dadadaadad ${i}`,
        'Net working time': Math.floor(Math.random() * 100),
        'Description & Feedback':
            'The first line of Lorem Ipsum, Lorem ipsum dolor sit amet. The second line of Lorem Ipsum, Lorem ipsum dolor sit amet.'
    };
});

export const RESERVED_TASKS: Task[] = [...Array(30)].map((_, i) => {
    return {
        Project: `Atomic ${i}`,
        'Time created': randomDate(new Date(2022, 1, 1), new Date(2023, 1, 1)),
        Rating: 3,
        'Task name': `RESERVED_TASKS - The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",  The first line of Lorem Ipsum, "Lorem ipsum dolor sit am”dadadaadad ${i}`,
        'Net working time': Math.floor(Math.random() * 100),
        'Description & Feedback':
            'The first line of Lorem Ipsum, Lorem ipsum dolor sit amet. The second line of Lorem Ipsum, Lorem ipsum dolor sit amet.'
    };
});

export const URGENT_TASKS: Task[] = [...Array(30)].map((_, i) => {
    return {
        Project: `Atomic ${i}`,
        'Time created': randomDate(new Date(2022, 1, 1), new Date(2023, 1, 1)),
        Rating: 3,
        'Task name': `URGENT_TASKS - The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",  The first line of Lorem Ipsum, "Lorem ipsum dolor sit am”dadadaadad ${i}`,
        'Net working time': Math.floor(Math.random() * 100),
        'Description & Feedback':
            'The first line of Lorem Ipsum, Lorem ipsum dolor sit amet. The second line of Lorem Ipsum, Lorem ipsum dolor sit amet.'
    };
});

export const WORK_COMPLETED: Task[] = [...Array(30)].map((_, i) => {
    return {
        Project: `Atomic ${i}`,
        'Time created': randomDate(new Date(2022, 1, 1), new Date(2023, 1, 1)),
        Rating: 3,
        'Task name': `WORK_COMPLETED - The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",  The first line of Lorem Ipsum, "Lorem ipsum dolor sit am”dadadaadad ${i}`,
        'Net working time': Math.floor(Math.random() * 100),
        'Description & Feedback':
            'The first line of Lorem Ipsum, Lorem ipsum dolor sit amet. The second line of Lorem Ipsum, Lorem ipsum dolor sit amet.'
    };
});
