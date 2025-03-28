import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import WeeklyActivity from 'src/pages/Community/components/WeeklyActivity';

export default {
    title: 'Shared/WeeklyActivity',
    component: WeeklyActivity,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story = (args) => (
    <Provider store={store}>
        <WeeklyActivity {...args} />
    </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a nav bar component'
};
