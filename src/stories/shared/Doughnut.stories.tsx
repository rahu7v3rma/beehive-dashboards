import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DoughnutChart, Props } from 'src/shared/Charts/Doughnut';

export default {
    title: 'Shared/Charts/Doughnut',
    component: DoughnutChart,
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <DoughnutChart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: [59, 11, 7],
    backgroundColor: [
        'rgba(250, 187, 24, 0.4)',
        'rgba(250, 187, 24, 0.6)',
        '#FABB18'
    ]
};
