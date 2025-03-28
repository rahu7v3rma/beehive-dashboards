import { Meta, Story } from '@storybook/react';

import AddOptions, { Props } from 'src/shared/AddOptions';

export default {
    title: 'Shared/AddOptions',
    component: AddOptions,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <AddOptions {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    selectOptions: ['React', 'React Native']
};
