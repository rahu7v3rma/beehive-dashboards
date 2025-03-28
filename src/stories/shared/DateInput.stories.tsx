import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from 'src/redux/store';

import { DateInput } from 'src/shared';
import { SearchInputWrapperProps } from 'src/shared/DateInput/SearchInputWrapper';
import theme from 'src/theme';

export default {
    title: 'Shared/DateInput',
    component: DateInput,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<SearchInputWrapperProps> = (args) => {
    const [search, setSearch] = useState<string>(args.search);

    return (
        <Provider store={store}>
            <div
                style={{
                    background: theme.color.lightGrayContainer
                }}
            >
                <DateInput
                    {...args}
                    search={search}
                    handleSearch={(
                        event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                        setSearch(event.target.value);
                        args.handleSearch(event);
                    }}
                />
            </div>
        </Provider>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    search: 'Test',
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) =>
        console.log(event)
};
