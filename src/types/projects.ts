export interface IProject {
    id: string;
    projectName: string;
    status: string;
    trelloBoard: string;
    date: string | null;
}

export interface ITaskTrelloLink {
    taskId: string;
    shortLink: string;
}

export interface IProjectQueue {
    pending: number;
    inReview: number;
    inProgress: number;
    pendingTrelloLinks: ITaskTrelloLink[];
    inProgressTrelloLinks: ITaskTrelloLink[];
    inReviewTrelloLinks: ITaskTrelloLink[];
}

export interface IProjectActivity {
    date: string;
    workItemsSolved: number;
    tasksCompleted: number;
    tasksDelegated: number;
    workItemsReviewed: number;
    workItemsSolvedLinks: ITaskTrelloLink[];
    tasksCompletedLinks: ITaskTrelloLink[];
    tasksDelegatedLinks: ITaskTrelloLink[];
    workItemsReviewedLinks: ITaskTrelloLink[];
}

export interface IProjectContributor {
    id: string;
    name: string;
    country: string;
    active?: boolean;
    lastWork: string;
    lastEngagement: string;
    reservedWorks: number;
    worksInReview: number;
    hourlyRate: string;
    skills: string[];
}

export enum BudgetCategory {
    CORE_TEAM = 'CORE_TEAM',
    TECH_LEAD = 'TECH_LEAD',
    QA_CONTRIBUTOR = 'QA_CONTRIBUTOR',
    CONTRIBUTOR = 'CONTRIBUTOR',
    PROJECT_MANAGER = 'PROJECT_MANAGER',
    UI_UX = 'UI_UX',
    AWS = 'AWS'
}

export interface IProjectBudgetBreakdownReview {
    name: BudgetCategory;
    amount: number;
    hours: number;
}
export interface IProjectBudgetReview {
    date: string;
    budget: IProjectBudgetBreakdownReview[];
}

export interface IProjectDelayedTask {
    id: string;
    createdAt: string;
    updatedAt: string;
    taskName?: string;
    skills: string[];
    status: string;
    billableTime: number;
    priority: string;
    link: ITaskTrelloLink | null;
}

export interface IProjectData {
    id: string;
    queue: IProjectQueue;
    activities: IProjectActivity[];
    contributors: IProjectContributor[];
    budgetReviews: IProjectBudgetReview[];
    delayedTasks: IProjectDelayedTask[];
}

export interface ITasksQueue {
    reserved: number;
    pending: number;
    available: number;
    inReview: number;
    delayed: number;
}

export interface IProjectsList {
    id: string;
    projectName: string;
    averageRating: number;
    priority: string;
    status: string;
    netWorkingTime: string;
    activeContributors: number;
    delegatedTasks: number;
    completedTasks: number;
    totalBudget: number;
    totalExpenese: number;
    lastWorkDate: string;
    lastWorkTime: string;
    tasksQueue: ITasksQueue;
}
