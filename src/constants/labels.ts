import Github from '../assets/icons/github.svg';
import TrelloBoard from '../assets/icons/trelloBoard.svg';
import MessageBox from '../assets/icons/messageBox.svg';
import AppLogo from '../assets/icons/app-logo.svg';
import { ILabels } from 'src/types/labels';

export const labels: string[] = ['Pending', 'In review', 'In progress'];

export const Lables = {
    delayedWorkTitle: 'Delayed tasks breakdown',
    delayedWorkDesc:
        'This table shows tasks that are delayed by the following rules: Backlog > over 48h, Pending > over 24h, In progress >  over 48h, In review > over 24h',
    activityTitle: 'Activity',
    workInteraction: 'Work interaction'
};

export const SOCIAL_LINKS: ILabels[] = [
    {
        url: 'https://app.caas.ai/',
        icon: TrelloBoard,
        link: 'trelloaccountname'
    },
    {
        url: 'https://app.caas.ai/',
        icon: Github,
        link: 'githubaccountname'
    },
    {
        url: 'https://app.caas.ai/',
        icon: MessageBox,
        link: 'kingdavid@gmail.com'
    },
    {
        url: 'https://app.caas.ai/',
        icon: AppLogo,
        link: 'ldfldkfjlkadf'
    }
];
