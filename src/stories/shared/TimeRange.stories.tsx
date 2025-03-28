import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { TIME_RANGES } from 'src/constants/timeranges';
import TimeRange, { CustomRange, TimeRangeProps } from 'src/shared/TimeRange';
import theme from 'src/theme';

export default {
    title: 'Shared/TimeRange',
    component: TimeRange,
    args: {}
} as Meta;

const Template: Story<TimeRangeProps> = (args) => {
    const [activeTimeRangeLabel, setActiveTimeRangeLabel] =
        useState<string>('');
    const [customRange, setCustomRange] = useState<CustomRange>({
        from: '',
        to: ''
    });
    const onTimeRangeChange = (id: string) => {
        setActiveTimeRangeLabel(id);
    };
    return (
        <Box bgcolor={theme.color.darkBluebg}>
            <TimeRange
                {...args}
                activeLabel={activeTimeRangeLabel}
                customRange={customRange}
                setCustomRange={setCustomRange}
                onTimeRangeChange={onTimeRangeChange}
            />
        </Box>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    items: TIME_RANGES,
    hasCustomRange: true
};
