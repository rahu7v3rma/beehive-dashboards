import { Meta, Story } from '@storybook/react';

import UploadFile, { Props } from '../../shared/UploadFile';

export default {
    title: 'Shared/UploadFile',
    component: UploadFile,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <UploadFile {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
