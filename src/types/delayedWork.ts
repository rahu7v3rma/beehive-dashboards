export interface IDelayedWork {
    id?: string;
    created_at: string;
    updated_at: string;
    task_name?: string;
    skills: string[];
    status: string;
    billable_time: string;
    priority: string;
}
