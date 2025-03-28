import { AddEditTemplateErrors } from 'src/types/templates';
import { templatesType } from 'src/types/templates';

export const Templates: templatesType[] = [
    {
        id: 1,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 1',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 2,
        date: new Date('2022'),
        title: 'Animate hand and allow swipe in last part of help page 2',
        skills: 'Python',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 3,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 3',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 4,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 4',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 5,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 5',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 6,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 6',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    },
    {
        id: 7,
        date: new Date(),
        title: 'Animate hand and allow swipe in last part of help page 7',
        skills: 'React, Macbook',
        description:
            "I'm going to write an amazing feedback on some king who once did a really good job. He liked to take care of everyone and write code on a very high level. He also paid attention to the details and did his job with full responsibility"
    }
];

export const REPOSITORIES: string[] = ['md-app', 'md-backend'];

export const TASK_TYPES: string[] = ['Scraping', 'Task'];

export const QA_TIMES_OPTIONS: string[] = ['1', '2', '3', '4', '5'];

export const initialAddEditErrors: AddEditTemplateErrors = {
    skills: '',
    name: '',
    taskDescription: ''
};
