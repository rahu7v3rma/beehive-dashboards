import { Meta, Story } from '@storybook/react';
import BillableHoursRatio, {
    BillableHoursRatioProps
} from 'src/shared/BillableHoursRatio';

export default {
    title: 'Shared/BillableHoursRatio',
    component: BillableHoursRatio,
    argTypes: {},
    args: {}
} as Meta;

const Template: Story<BillableHoursRatioProps> = (args) => (
    <BillableHoursRatio {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    ratio: 0.3
};
