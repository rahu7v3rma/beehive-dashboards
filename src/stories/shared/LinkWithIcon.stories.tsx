import { Meta, Story } from '@storybook/react';
import AppLogo from '../../assets/icons/app-logo.svg';

import { LinkWithIcon } from 'src/shared';
import { Props } from 'src/shared/LinkWithIcon';

export default {
    title: 'Shared/LinkWithIcon',
    component: LinkWithIcon,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => <LinkWithIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    link: 'https://app.caas.ai/',
    icon: AppLogo,
    linkName: 'trelloaccountname'
};
