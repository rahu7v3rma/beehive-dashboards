import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Navbar } from '../../shared';
import { Props } from '../../shared/Navbar';

export default {
    title: 'Shared/Navbar',
    component: Navbar,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a nav bar component'
};
