import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Link } from '../../shared';
import { Props } from '../../shared/Link';

export default {
    title: 'Shared/Link',
    component: Link,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a link component.',
    href: 'https://www.google.com'
};
