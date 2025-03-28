import { Meta, Story } from '@storybook/react';
import theme from 'src/theme';
import { StatusChip } from '../../shared';
import { Props } from '../../shared/StatusChip';

export default {
    title: 'Shared/StatusChip',
    component: StatusChip,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <StatusChip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Work items solved',
    indicatorColor: theme.color.lightningYellow
};
