import { SelectChangeEvent } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { Dropdown2 } from 'src/shared';
import { Props } from 'src/shared/Dropdown2';

export default {
    title: 'Shared/Dropdown2',
    component: Dropdown2,
    args: {},
    argTypes: {}
} as Meta;

const Template: Story<Props> = (args) => {
    const [value, setValue] = useState<Props['value']>('');
    const [error, setError] = useState<Props['error']>(
        value === '' ? 'error' : ''
    );
    const onChange = (event: SelectChangeEvent) => {
        const _value = event.target.value;
        if (_value === '') setError('error');
        else setValue(event.target.value);
    };
    return (
        <Dropdown2
            {...args}
            options={['value1', 'value2']}
            value={value}
            onChange={onChange}
            error={error}
        />
    );
};

export const Primary = Template.bind({});

Primary.args = {
    width: 100,
    height: 30
};
