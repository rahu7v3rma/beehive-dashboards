import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedBar, Props } from 'src/shared/Charts/StackedBar';
import theme from 'src/theme';

export default {
    title: 'Shared/Charts/StackedBar',
    component: StackedBar,
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <StackedBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Budget Review',
    data: {
        labels: ['1-7january', '8-14 january', '15-21 january'],
        datasets: [
            {
                label: '',
                data: [12, 45, 33],
                tooltips: [3, 2, 1],
                backgroundColor: theme.color.white,
                boxColor: '',
                type: 'line',
                fill: false,
                borderColor: theme.color.white,
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'aws',
                data: [24, 43, 24],
                backgroundColor: theme.color.lightDimYellowRgba,
                boxColor: theme.color.lightDimYellowRgba
            },
            {
                label: 'Core Team',
                data: [43, 43, 43],
                backgroundColor: theme.color.lightningYellowRgba6,
                boxColor: theme.color.lightningYellowRgba6
            },
            {
                label: 'Contributor',
                data: [22, 43, 46],
                backgroundColor: theme.color.lightningYellow,
                boxColor: theme.color.lightningYellow
            }
        ],
        totalBudget: []
    },
    breadCum: 'Costs / $',
    description: 'The table shows the weekly budget usage by departments'
};
