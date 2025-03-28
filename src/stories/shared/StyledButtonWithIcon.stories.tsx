import { Box, styled } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { StyledButtonWithIcon } from 'src/shared';
import { Props } from 'src/shared/StyledButtonWithIcon';
import color from 'src/theme/color';

export default {
    title: 'Shared/StyledButtonWithIcon',
    component: StyledButtonWithIcon,
    argTypes: {},
    args: {}
} as Meta;

const Container = styled(Box)`
    background-color: ${color.darkBlue};
    display: inline-block;
    padding: 100px;
`;

const Template: Story<Props> = (args) => (
    <Container>
        <StyledButtonWithIcon {...args} />
    </Container>
);

export const Primary = Template.bind({});

Primary.args = {
    children: <span style={{ color: 'white' }}>StyledButtonWithIcon</span>,
    onClick: () => alert('StyledButtonWithIcon'),
    width: '300px',
    height: '50px'
};
