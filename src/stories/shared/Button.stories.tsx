import React from 'react';
import { Meta, Story } from '@storybook/react';

import theme from '../../theme';
import { Button } from '../../shared';
import { Props } from '../../shared/Button';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
    color: theme.color.royalBlue,
    width: '340px',
    onClick: () => {}
};
