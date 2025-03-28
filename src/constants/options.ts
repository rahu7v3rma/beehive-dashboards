export interface Options {
    value: number;
    label: string;
}

export const options: Options[] = [
    {
        value: 40,
        label: '40$/hour'
    },
    {
        value: 50,
        label: '50$/hour'
    }
];

export const TimeZoneOptions: Options[] = [
    {
        value: 1,
        label: '+1'
    },
    {
        value: 2,
        label: '+2'
    }
];

export const HourlyWorkRate: Options[] = [
    {
        value: 40,
        label: '40'
    },
    {
        value: 50,
        label: '50'
    }
];
