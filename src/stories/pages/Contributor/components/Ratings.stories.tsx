import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';
import Ratings from 'src/pages/Contributor/components/Ratings';

export default {
    title: 'Pages/Contributor/Ratings',
    component: Ratings,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story = (args) => (
    <Provider store={store}>
        <Ratings {...args} />
    </Provider>
);

export const Primary = Template.bind({});
