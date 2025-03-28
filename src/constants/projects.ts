import {
    IProject,
    IProjectActivity,
    IProjectBudgetReview,
    IProjectContributor,
    IProjectDelayedTask,
    IProjectQueue,
    BudgetCategory
} from 'src/types/projects';

export const PROJECTS: { projects: IProject[] } = {
    projects: [
        {
            id: '1',
            projectName: 'Project name 1',
            status: 'Active',
            trelloBoard: 'Cuckoo Trello board',
            date: 'since 3/4/2019'
        },
        {
            id: '2',
            projectName: 'Project name 2',
            status: 'UnActive',
            trelloBoard: 'Cuckoo Trello board',
            date: '5/2/2020'
        },
        {
            id: '3',
            projectName: 'Project name 3',
            status: 'Active',
            trelloBoard: 'TestTrello board',
            date: '6/2/2021'
        },
        {
            id: '4',
            projectName: 'Project name 3',
            status: 'UnActive',
            trelloBoard: 'Test Trello board',
            date: '2/1/2019'
        }
    ]
};

export const PROJECT_QUEUE: IProjectQueue = {
    pending: 3,
    inReview: 8,
    inProgress: 10,
    pendingTrelloLinks: [],
    inProgressTrelloLinks: [],
    inReviewTrelloLinks: []
};

export const PROJECT_CONTRIBUTORS: { contributors: IProjectContributor[] } = {
    contributors: [
        {
            id: 'dkhfdahf',
            name: 'Name',
            country: 'US',
            lastWork: 'none',
            lastEngagement: 'none',
            reservedWorks: 0,
            worksInReview: 0,
            hourlyRate: '',
            skills: []
        }
    ]
};

export const PROJECT_DELAYED_TASKS: { delayedTasks: IProjectDelayedTask[] } = {
    delayedTasks: [
        {
            id: 'adfjhaksd444',
            createdAt: '2 days 14h 25m',
            updatedAt: '14h 25m ago',
            taskName: 'Task name',
            status: 'Pending',
            billableTime: 720,
            priority: '2',
            skills: ['React Native'],
            link: null
        }
    ]
};

export const PROJECT_ACTIVITY: { activities: IProjectActivity[] } = {
    activities: [
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        },
        {
            date: 'Monday,November 26',
            workItemsSolved: 24,
            tasksCompleted: 43,
            tasksDelegated: 54,
            workItemsReviewed: 78,
            workItemsSolvedLinks: [],
            tasksCompletedLinks: [],
            tasksDelegatedLinks: [],
            workItemsReviewedLinks: []
        }
    ]
};

export const PROJECT_BUDGET: { budgetReviews: IProjectBudgetReview[] } = {
    budgetReviews: [
        {
            date: '2023-3',
            budget: [
                {
                    name: BudgetCategory.CONTRIBUTOR,
                    amount: 100,
                    hours: 1
                },
                {
                    name: BudgetCategory.TECH_LEAD,
                    amount: 200,
                    hours: 2
                }
            ]
        },
        {
            date: '2023-4',
            budget: [
                {
                    name: BudgetCategory.CONTRIBUTOR,
                    amount: 200,
                    hours: 2
                },
                {
                    name: BudgetCategory.TECH_LEAD,
                    amount: 300,
                    hours: 3.5
                }
            ]
        }
    ]
};
