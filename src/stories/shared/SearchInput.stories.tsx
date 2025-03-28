import { Meta, Story } from '@storybook/react';

import { SearchInputWrapper } from 'src/shared';
import { SearchInputWrapperProps } from 'src/shared/SearchInput/SearchInputWrapper';

export default {
    title: 'Shared/SearchInput',
    component: SearchInputWrapper,
    argTypes: {
        handleSearch: { action: 'handleSearch' }
    },
    args: {}
} as Meta;

const Template: Story<SearchInputWrapperProps> = (args) => (
    <SearchInputWrapper {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    search: 'some query'
};
