import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';
import { BudgetReview } from '../../shared';

export default {
    title: 'Shared/BudgetReview',
    component: BudgetReview,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story = (args) => (
    <Provider store={store}>
        <BudgetReview projectData={null} {...args} />
    </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a budget review component'
};
