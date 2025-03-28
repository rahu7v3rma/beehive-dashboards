import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { Switch } from '../../shared';

export default {
    title: 'Shared/Switch',
    component: Switch,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story = (args) => (
    <Provider store={store}>
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.87)',
                height: '100vh',
                padding: 20
            }}
        >
            <Switch label="Explore tasks outside your skill set" {...args} />
        </div>
    </Provider>
);

export const Primary = Template.bind({});
