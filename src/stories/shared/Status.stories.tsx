import { Meta, Story } from '@storybook/react';
import { Status } from '../../shared';
import { Props } from '../../shared/Status';

export default {
    title: 'Shared/Status',
    component: Status,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Status {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    status: 'solved'
};
