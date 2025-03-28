import { SuccessCriteria } from './quests';
import { TaskContextData } from './tasks';

export interface TaskAnalysisRequestParams {
    title: string;
    description: string;
    type?: string;
}

export interface TaskLongShortGeneratorParams {
    short_task_description: string;
    project: string;
    type?: string;
}

export interface TaskContextGeneratorParams {
    task_description: string;
    repo_url: string;
}

export interface TaskTimeEstimationParams {
    task_description: string;
    task_skills: string[];
}

export interface Repository {
    id: number;
    name: string;
    url: string;
    projectId: number;
}

export interface TaskTemplate {
    id?: number;
    name: string;
    taskDescription: string;
    taskType?: number;
    taskClassification: string;
    skills: string[];
    repositoryId?: number;
}

export interface DelegateTaskRequest {
    description: string | null;
    title: string | null;
    taskClassification: string | null;
    skills: string[];
    chainReview: boolean;
    maxChainIterations: number | null;
    chainDescription: string | null;
    delegationTimeSeconds: number;
    repositoryId: number;
    context: TaskContextData[] | null;
}

export enum TaskClassification {
    CREATE_COMPONENT = 'Create a component',
    MODIFY_COMPONENT = 'Modify/fix a component',
    CREATE_PAGE = 'Create a page/screen',
    MODIFY_PAGE = 'Modify/fix a page/screen',
    MODIFY_DESIGN = 'Change to match design',
    CREATE_ANIMATION = 'Creating an animation',
    CREATE_EVENT = 'Write events to Mixpanel/monitoring',
    CREATE_DATA_MODEL = 'Create/modify a data model',
    CREATE_ENDPOINT = 'Create/Modify an endpoint',
    CREATE_DJANGO_VIEW = 'Create a django view',
    MODIFY_DJANGO_VIEW = 'Modify/Fix a django view',
    CREATE_ALGORITHM = 'Write an algorithm / business logic',
    CREATE_SCRAPER = 'Scraping',
    CREATE_API_CONNECTOR = 'Connect a screen/component to an API/view/functionality',
    REFACTOR_CODE = 'Refactor existing code',
    CREATE_TEST_CASE = 'Write test cases',
    CREATE_AUTH = 'Authorization/Authentication',
    OTHER = 'Other',
    UNCERTAIN = 'Uncertain'
}

export interface DelegateQuestRequest {
    description: string | null;
    title: string | null;
    projectId: string | null;
    links: { [key: string]: string };
    questType?: number;
    delegationTimeSeconds: number;
    successCriteria: SuccessCriteria[] | null;
}

export enum DelegationObjectType {
    TASK = 'task',
    QUEST = 'quest'
}
