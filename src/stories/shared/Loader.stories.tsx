import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Loader } from '../../shared';
import { Props } from '../../shared/Loader';

export default {
    title: 'Shared/Loader',
    component: Loader,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a sample loader component'
};
