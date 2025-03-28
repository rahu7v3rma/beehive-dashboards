export interface ICommunityContributor {
    id?: string;
    name: string;
    country: string;
    active?: boolean;
    last_work: Date;
    last_engagement: Date;
    reserved_work: number;
    work_in_review: number;
    hourly_rate: string;
    weekly_availability: Date;
    billable_hours_ratio: number;
    skills: string[];
    projects: string[];
    rating?: number;
}
