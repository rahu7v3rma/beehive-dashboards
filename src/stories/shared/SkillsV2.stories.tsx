import { Meta, Story } from '@storybook/react';
import { SkillsV2 } from '../../shared';
import { Props } from '../../shared/SkillsV2';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import theme from 'src/theme';

export default {
    title: 'Shared/SkillsV2',
    component: SkillsV2,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<Props> = (args) => (
    <Provider store={store}>
        <div
            style={{
                background: theme.color.lightGrayContainer
            }}
        >
            <SkillsV2 {...args} />
        </div>
    </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
    availableSkills: ['React', 'Tailwind', 'Python'],
    linkTitle: 'Add Skills',
    onSave: (data) => console.log(data),
    error: ''
};
