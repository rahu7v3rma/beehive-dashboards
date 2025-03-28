import { Meta, Story } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import SignInInput from 'src/shared/SignInInput/Index';
import theme from 'src/theme';

interface InputProps {
    hasError?: boolean;
    label?: string;
    name?: string;
    placeholder?: string;
    value: string;
    type: string;
    errorMessage: string;
    backgroundColor: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    style: {};
}
export default {
    title: 'Shared/SignInInput',
    component: SignInInput,
    argTypes: {
        onChange: { action: 'onChange' }
    },
    args: {}
} as Meta;

const Template: Story<InputProps> = (args) => {
    const [input, setInput] = useState<string>(args.value);

    return (
        <div style={{ backgroundColor: theme.color.lightGray }}>
            <SignInInput
                {...args}
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(event.target.value);
                    args.onChange(event);
                }}
            />
        </div>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    hasError: false,
    label: '',
    name: '',
    placeholder: '',
    value: '',
    type: '',
    errorMessage: '',
    backgroundColor: '',
    style: {}
};
// const Template: Story<SearchInputWrapperProps> = (args) => {
//     const [search, setSearch] = useState<string>(args.search);

//     return (
//         <Provider store={store}>
//             <div
//                 style={{
//                     background: theme.color.lightGrayContainer
//                 }}
//             >
//                 <DateInput
//                     {...args}
//                     search={search}
//                     handleSearch={(
//                         event: React.ChangeEvent<HTMLInputElement>
//                     ) => {
//                         setSearch(event.target.value);
//                         args.handleSearch(event);
//                     }}
//                 />
//             </div>
//         </Provider>
//     );
