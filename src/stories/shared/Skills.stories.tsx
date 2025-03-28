import { Meta, Story } from '@storybook/react';
import { Skills } from '../../shared';
import { Props } from '../../shared/Skills';

export default {
    title: 'Shared/Skills',
    component: Skills,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Skills {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    availableSkills: ['React', 'Tailwind', 'Python']
};
