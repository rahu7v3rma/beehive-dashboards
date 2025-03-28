export interface templatesType {
    id: number;
    date: Date;
    title: string;
    skills: string;
    description: string;
}

export type AddEditTemplateData = {
    id?: number;
    skills: string[];
    repository?: number;
    taskClassification?: string;
    name: string;
    taskDescription: string;
};

export type AddEditTemplateErrors = {
    skills: string;
    repository?: string;
    taskClassification?: string;
    name: string;
    taskDescription: string;
};
