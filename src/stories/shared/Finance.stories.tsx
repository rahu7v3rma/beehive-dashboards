import { Meta, Story } from '@storybook/react';

import { Finance } from '../../shared';
import { Props } from '../../shared/Finance';
import styled from 'styled-components';
import { Box } from '@mui/material';
import color from 'src/theme/color';
import { AMOUNT_GRAPH_DATA } from 'src/constants/amountStackGraph';

export default {
    title: 'Shared/Finance',
    component: Finance
} as Meta;

const Container = styled(Box)`
    background-color: ${color.darkBlue};
    padding: 100px;
`;

const Template: Story<Props> = (args) => (
    <Container>
        <Finance {...args} />
    </Container>
);

export const Primary = Template.bind({});

Primary.args = {
    totalBudget: 30000,
    totalExpense: 47000,
    amountGraphData: AMOUNT_GRAPH_DATA
};
