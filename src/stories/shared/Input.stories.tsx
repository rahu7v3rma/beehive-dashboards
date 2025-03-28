import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input } from '../../shared';
import theme from '../../theme';

interface InputProps {
    hasError?: boolean;
    iconBack?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    backgroundColor?: string;
}

export default {
    title: 'Shared/Input',
    component: Input,
    argTypes: {
        onChange: { action: 'onChange' }
    },
    args: {}
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    hasError: false,
    iconBack: '/icons/Search.svg',
    label: 'Search',
    placeholder: 'Search',
    backgroundColor: theme.color.white
};
