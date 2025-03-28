import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';

import theme from '../../theme';
import { Icon } from '../../shared';
import { Props } from '../../shared/Icon';

export default {
    title: 'Shared/Icon',
    component: Icon,
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    borderRadius: '10px',
    bgColor: theme.color.royalBlue,
    width: '40px',
    height: '40px',
    source: <Menu />,
    color: theme.color.white,
    border: `2px solid ${theme.color.black}`
};
