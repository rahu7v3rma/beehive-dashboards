import { Meta, Story } from '@storybook/react';
import { Props } from '../../shared/Modal';
import DeleteModal from 'src/shared/DeleteModal';

export default {
    title: 'Shared/DeleteModal',
    component: DeleteModal,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <DeleteModal {...args} />;

export const ModalTemplate = Template.bind({});
