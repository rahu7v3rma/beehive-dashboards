import { Meta, Story } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import MultiLineInput from '../../shared/MultiLineInput';
interface InputProps {
    label: string;
    input: string;
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    multine?: boolean;
    rows?: number;
    error?: string;
}
export default {
    title: 'Shared/MultiLineInput',
    component: MultiLineInput,
    argTypes: {
        onChange: { action: 'onChange' }
    },
    args: {}
} as Meta;

const Template: Story<InputProps> = (args) => {
    const [input, setInput] = useState<string>(args.input);
    return (
        <MultiLineInput
            {...args}
            input={input}
            onChangeInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInput(event.target.value);
                args.onChangeInput(event);
            }}
        />
    );
};

export const Primary = Template.bind({});

Primary.args = {
    label: '',
    input: '',
    multine: false,
    rows: 0,
    error: ''
};
