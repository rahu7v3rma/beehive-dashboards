import { Meta, Story } from '@storybook/react';
import {
    FormControlLabel,
    Switch
} from 'src/pages/Delegation/task/components/QaSwitch/styled';

export default {
    title: 'Pages/Delegation/QaSwitch',
    component: Switch,
    argTypes: {
        checked: {
            options: [true, false],
            control: { type: 'radio' }
        }
    },
    args: {}
} as Meta;

const Template: Story = (args) => (
    <FormControlLabel
        checked={args.checked}
        control={<Switch {...args} />}
        label={args.checked ? 'On' : 'Off'}
    />
);

export const Default = Template.bind({});
