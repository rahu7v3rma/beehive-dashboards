import { Meta, Story } from '@storybook/react';

import { CustomSelect } from 'src/shared';
import { Props } from 'src/shared/CustomSelect';

export default {
    title: 'Shared/CustomSelect',
    component: CustomSelect,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <CustomSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    options: ['React', 'React Native'],
    backgroundColor: 'white',
    textColor: 'black',
    focusColor: 'blue'
};
