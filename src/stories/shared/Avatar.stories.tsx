import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Avatar } from '../../shared';
import AvatarImage from '../../assets/images/avatar.png';
import { Props } from '../../shared/Avatar';

export default {
    title: 'Shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {}
} as Meta;

const name = 'Avatar';

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Image = Template.bind({});

Image.args = {
    image: AvatarImage
};

export const Initial = Template.bind({});

Initial.args = {
    name: name.charAt(0)
};

export const Size = Template.bind({});

Size.args = {
    size: '50px',
    name: name.charAt(0)
};
