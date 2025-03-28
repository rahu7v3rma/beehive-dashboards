import { Dispatch, SetStateAction } from 'react';
import { JSX } from 'react/jsx-runtime';

export interface ITask {
    pending: number;
    in_review: number;
    in_progress: number;
}

export interface ITasks {
    name:
        | 'Tasks'
        | 'Pending'
        | 'In progress'
        | 'In review'
        | 'Available'
        | 'Contributors'
        | 'Working';
    number: number;
}

export type Tab = {
    label: string;
    component: JSX.Element;
};

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface Task {
    Project: string;
    'Time created': Date;
    Rating: number;
    'Task name': string;
    'Net working time': number;
    'Description & Feedback': string;
}

export interface TasksTableProps {
    title: string;
    subtitle: string;
    allTasks: Task[];
    tasksState: Task[];
    setTasksState: Dispatch<SetStateAction<Task[]>>;
    onReadMoreClick: () => void;
}

export type InReviewProps = {
    onReadMoreClick: () => void;
};

export type TaskContextData = {
    file: string;
    entity: string;
    potentialUse: string;
    edit?: boolean;
};

export type RequiresModificationsProps = InReviewProps;
export type ReserverdTasksProps = InReviewProps;
export type UrgentTasksProps = InReviewProps;
export type WorkCompletedProps = InReviewProps;
