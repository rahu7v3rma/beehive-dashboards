import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Label } from '../../shared';
import { Props } from '../../shared/Label';

export default {
    title: 'Shared/Label',
    component: Label,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a custom label component'
};
