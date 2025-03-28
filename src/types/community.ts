export interface ISkillBreakdown {
    name: string;
    count: number;
}

export interface IContributorBreakdown {
    id: string;
    name: string;
    country: string;
    active?: boolean;
    lastWork: string;
    lastEngagement: string;
    reservedWorks: number;
    worksInReview: number;
    hourlyRate: string;
    weeklyAvailability: number;
    billableHoursRatio: number;
    skills: string[];
    projects: string[];
}
