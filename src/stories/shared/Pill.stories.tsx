import { Meta, Story } from '@storybook/react';
import { Pill } from '../../shared';
import { Props } from '../../shared/Pill';

export default {
    title: 'Shared/Pill',
    component: Pill,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Tailwind',
    mode: true,
    selectedPill: () => {}
};
