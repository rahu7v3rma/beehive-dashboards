export enum IContributorState {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    PENDING = 'PENDING'
}

export interface IContributor {
    id?: string;
    name: string;
    country: string;
    active?: boolean;
    last_work: Date;
    last_engagement: Date;
    reserved_work: number;
    work_in_review: number;
    hourly_rate: string;
    skills: string[];
    rating?: number;
    joining_date?: string;
    links?: string[];
    reviews?: number;
    country_code?: string;
    local_time?: string;
    weekly_hours?: number;
    image?: string;
}

export interface AdminNotesType {
    id?: number;
    adminName: string;
    title: string;
    date: Date;
    note: string;
    edit?: boolean;
}
export interface IContributorRating {
    label: string;
    value: number;
    count: number;
}

export interface IWorkHistory {
    id: string;
    name: string;
    skills: string[];
    project: string;
    duration: string;
    price: string;
    iteration: string;
    rating: number;
    reviews: number;
    status: string;
}

export type sortWorkHistory =
    | 'duration'
    | 'iteration'
    | 'price'
    | 'rating'
    | 'status'
    | 'skills';

export const titleMapping: {
    [key: string]: sortWorkHistory;
} = {
    Duration: 'duration',
    Iterations: 'iteration',
    Skills: 'skills',
    Price: 'price',
    Rating: 'rating',
    Status: 'status'
};

export enum WorkHistoryHeaders {
    ID = 'ID',
    NAME = 'Name',
    SKILLS = 'Skills',
    PROJECT = 'Project',
    DURATION = 'Duration',
    PRICE = 'Price',
    ITERATIONS = 'Iterations',
    RATING = 'Rating',
    STATUS = 'Status'
}
