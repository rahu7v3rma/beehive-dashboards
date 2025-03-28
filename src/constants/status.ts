import theme from 'src/theme';

export type StatusValues = 'active' | 'unavailable';

interface IContributorstatus {
    value: StatusValues;
    title: 'Active' | 'Unavailable';
    backgroundColor: string;
    color: string;
}

export const Status: IContributorstatus[] = [
    {
        value: 'active',
        title: 'Active',
        backgroundColor: theme.color.darkMintGreen,
        color: theme.color.brightGreen
    },
    {
        value: 'unavailable',
        title: 'Unavailable',
        backgroundColor: theme.color.darkMintRed,
        color: theme.color.orangyRed
    }
];
