export type Routes = 'PROJECT_DASHBOARD' | 'CONTRIBUTOR' | 'COMMUNITY';

export enum RoutesEnum {
    PROJECT_DASHBOARD = '/projects',
    CLIENT_DASHBOARD = '/overview',
    CHAT = '/chat',
    LOGIN = '/login',
    CONTRIBUTOR = '/contributor',
    COMMUNITY = '/community',
    SignIn = '/signin',
    DELEGATE_TASK = '/delegate/task',
    DELEGATE_QUEST = '/delegate/quest',
    QUEST_REVIEW = '/quest/review/:id',
    QUEST_DETAIL = '/quest/:id',
    Profile = '/profile',
    TECH_LEAD = '/tech-lead',
    CONTRIBUTOR_PROFILE = '/contributor-profile',
    TASKS = '/tasks',
    TASK_DETAIL = 'task/:id',
    TEMPLATES = '/templates',
    BUGS = '/bugs',
    QUEST_SOLUTION = '/quest-solution'
}
