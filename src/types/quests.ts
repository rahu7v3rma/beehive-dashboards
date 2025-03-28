import { QuestType, QuestStatus, QuestActivityType } from 'src/enums/quests';

export interface Quest {
    Project: string;
    'Time created': Date;
    'Quest name': string;
    'Net working time': number;
    Description: string;
}

export type SuccessCriteria = {
    title: string;
    description: string;
    explanation?: string | null;
    checked?: boolean;
};

export interface QuestActivity {
    id: string;
    user: string;
    activityType: QuestActivityType;
    details: {
        text?: string;
        statusChange?: {
            from: QuestStatus;
            to: QuestStatus;
        };
    };
    created: string;
}

export interface RequestModificationsRequest {
    feedback: string;
}

export interface RequestApproveRequest {
    feedback: string;
}

export interface QuestSchema {
    id: string;
    created: string;
    delegatingUserId: string;
    description: string;
    title: string;
    status: QuestStatus;
    questType: QuestType;
    links: {
        documentation: string;
    };
    projectId?: number;
    delegationTimeSeconds?: number | null;
    successCriteria: SuccessCriteria[];
    activities: QuestActivity[];
    iteration?: number;
    progress?: number;
    trelloLink?: string;
    averageRatingScore?: number;
    ratingAuthorizationCode: string | null;
}

export interface QuestSolutionPullRequest {
    id: string;
    prUrl: string;
}

export interface QuestSolution {
    id: string;
    notes: string;
    userId: string;
    questSolutionPrs: QuestSolutionPullRequest[];
    ratingAuthorizationCode: string | null;
}

export const successCriteriaList: SuccessCriteria[] = [
    {
        title: 'Responsive Design',
        description:
            'Ensure the website or application looks and works well across various devices and screen sizes.'
    },
    {
        title: 'Cross-browser Compatibility',
        description:
            'Ensure the website or application functions correctly on different desktop & mobile web browsers.'
    },
    {
        title: 'Data integrity',
        description: 'Verify data accuracy and consistency.'
    },
    {
        title: 'Performance Optimization',
        description: 'Aim for fast loading times and smooth performance.'
    },
    {
        title: 'Accessibility',
        description:
            'Ensure the website or app is accessible to users with disabilities.'
    },
    {
        title: 'Security Measures',
        description: 'Implement custom security measures.'
    },
    {
        title: 'Custom Documentation',
        description: 'Provide additional documentation for the codebase.'
    }
];
