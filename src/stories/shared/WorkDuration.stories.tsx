import { Meta, Story } from '@storybook/react';
import { WORK_DURATION } from 'src/constants/workDuration';
import WorkDuration from 'src/pages/ProjectDashboard/components/WorkDuration';
import { IWorkDuration } from 'src/types/workDuration';

export default {
    title: 'Shared/WorkDuration',
    component: WorkDuration,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<IWorkDuration> = (args) => (
    <WorkDuration workDuration={{ ...args }} />
);

export const Primary = Template.bind({});

Primary.args = WORK_DURATION;
