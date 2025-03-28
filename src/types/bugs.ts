export interface Bug {
    id: string;
    created?: string;
    module: string;
    title: string;
    description: string;
    type: string;
    attachments: string[];
    stepsToReproduce: string[];
    version: string;
    priority: number;
    reporter: string;
    status: string;
    projectId: number;
}
