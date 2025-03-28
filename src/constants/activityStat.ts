import { IActivityStat } from '../types/activityStat';

export interface IActivityRange {
    from: Date | null;
    to: Date | null;
}

export const ACTIVITIES_STATS_1: IActivityStat[] = [
    {
        label: 'Time billed',
        value: {
            value: '3 hours',
            percent: '+11%'
        }
    },
    {
        label: 'Work viewed',
        value: {
            value: '453',
            percent: '+9%'
        }
    },
    {
        label: 'Work completed',
        value: {
            value: '32',
            percent: '-90%'
        }
    },
    {
        label: 'Average work duration',
        value: {
            value: '22h 22m',
            percent: '-22%'
        }
    },
    {
        label: 'Average work earned $',
        value: {
            value: '$4.56',
            percent: '-9%'
        }
    },
    {
        label: 'Average work deadline missed',
        value: {
            value: '12%',
            percent: '-90%'
        }
    },
    {
        label: '% of work revoked',
        value: {
            value: '6%',
            percent: '+9%'
        }
    },
    {
        label: 'Cancelled',
        value: {
            value: '3',
            percent: '+11%'
        }
    },
    {
        label: 'Skipped',
        value: {
            value: '453',
            percent: '-9%'
        }
    },
    {
        label: 'Submitted',
        value: {
            value: '555',
            percent: '-90%'
        }
    }
];

export const ACTIVITIES_STATS_2: IActivityStat[] = [
    {
        label: 'Time billed',
        value: {
            value: '4 hours',
            percent: '+12%'
        }
    },
    {
        label: 'Work viewed',
        value: {
            value: '455',
            percent: '+10%'
        }
    },
    {
        label: 'Work completed',
        value: {
            value: '36',
            percent: '-91%'
        }
    },
    {
        label: 'Average work duration',
        value: {
            value: '23h 23m',
            percent: '-23%'
        }
    },
    {
        label: 'Average work earned $',
        value: {
            value: '$5.56',
            percent: '-10%'
        }
    },
    {
        label: 'Average work deadline missed',
        value: {
            value: '13%',
            percent: '-93%'
        }
    },
    {
        label: '% of work revoked',
        value: {
            value: '7%',
            percent: '+10%'
        }
    },
    {
        label: 'Cancelled',
        value: {
            value: '4',
            percent: '+12%'
        }
    },
    {
        label: 'Skipped',
        value: {
            value: '455',
            percent: '-6%'
        }
    },
    {
        label: 'Submitted',
        value: {
            value: '556',
            percent: '-91%'
        }
    }
];
