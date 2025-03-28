import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import { ProjectActivity } from '../../shared';
import { ITaskTrelloLink } from 'src/types/projects';

export default {
    title: 'Shared/ProjectActivity',
    component: ProjectActivity,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story = (args) => (
    <Provider store={store}>
        <ProjectActivity
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setTrelloLinks={function (links: ITaskTrelloLink[] | null): void {}}
            projectData={null}
            {...args}
        />
    </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'This is a nav bar component'
};
