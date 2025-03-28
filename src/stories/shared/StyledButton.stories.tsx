import { Box, styled } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { StyledButton } from 'src/shared';
import { Props } from 'src/shared/StyledButton';
import color from 'src/theme/color';

export default {
    title: 'Shared/StyledButton',
    component: StyledButton,
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
        <StyledButton {...args} />
    </Container>
);

export const Primary = Template.bind({});

Primary.args = {
    children: <span style={{ color: 'white' }}>StyledButton</span>,
    onClick: () => alert('StyledButton'),
    width: '200px',
    height: '50px'
};
