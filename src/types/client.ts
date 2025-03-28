export interface ClientQuest {
    quest: Quest;
    netTime: number;
    iteration: number;
    progress: number;
    trelloLink?: string;
}

export const QuestStatusMap = ['New', 'In process', 'In review', 'Done'];

export interface Quest {
    id: string;
    status: number;
    questType: string;
    title: string;
    description: string;
    created: string;
    projectId: number;
    links: string[];
}

export interface Project {
    id: string;
    name: string;
    trelloLink: string;
}

export interface Repository {
    id: number;
    name: string;
    url: string;
    project: Project;
}
