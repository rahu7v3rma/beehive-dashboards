import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from 'src/shared';
import { Props } from 'src/shared/DropDown';

export default {
    title: 'Shared/Dropdown',
    component: Dropdown,
    args: {},
    argTypes: {}
} as Meta;

const options = [
    {
        value: 'value1',
        title: 'title1',
        backgroundColor: 'red',
        color: 'white'
    },
    {
        value: 'value2',
        title: 'title2',
        backgroundColor: 'blue',
        color: 'gray'
    }
];

const Template: Story<Props> = (args) => {
    const [value, setValue] = useState<string>('value1');
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    return (
        <Dropdown
            {...args}
            options={options}
            value={value}
            handleChange={handleChange}
        />
    );
};

export const Primary = Template.bind({});

Primary.args = {
    width: '150px'
};
