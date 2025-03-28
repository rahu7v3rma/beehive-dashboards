import { Meta, Story } from '@storybook/react';

import { AmountStackGraph } from '../../shared';
import { Props } from '../../shared/AmountStackGraph';
import styled from 'styled-components';
import { Box } from '@mui/material';
import color from 'src/theme/color';
import { AMOUNT_GRAPH_DATA } from 'src/constants/amountStackGraph';

export default {
    title: 'Shared/AmountStackGraph',
    component: AmountStackGraph
} as Meta;

const Container = styled(Box)`
    background-color: ${color.darkBlue};
    padding: 100px;
`;

const Template: Story<Props> = (args) => (
    <Container>
        <AmountStackGraph {...args} />
    </Container>
);

export const Primary = Template.bind({});

Primary.args = {
    data: AMOUNT_GRAPH_DATA
};
