import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal from '../../shared/Modal';
import { Props } from '../../shared/Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const ModalTemplate = Template.bind({});

ModalTemplate.args = {
    children: 'Modal'
};
