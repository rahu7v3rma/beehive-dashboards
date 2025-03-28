import { FunctionComponent } from 'react';
import { StyledBox } from 'src/pages/Signin/styled';
import { Container, Stack } from '@mui/material';
import { StyledButton } from 'src/shared/SignInInput/styled';

const ActionButtons: FunctionComponent = () => {
    return (
        <StyledBox
            sx={{
                backgroundColor: '#1E1E1E',
                color: 'white'
            }}
        >
            <Container sx={{ padding: '2rem' }}>
                <Stack
                    direction="row"
                    gap={2}
                    justifyContent={'center'}
                    alignContent={'center'}
                    sx={{ margin: '0 auto' }}
                >
                    <StyledButton
                        background="#363842"
                        type="reset"
                        height="2.62rem"
                    >
                        Cancel
                    </StyledButton>

                    <StyledButton
                        type="submit"
                        background="linear-gradient(105.23deg, #FABB18 0%, #C48E02 100%)"
                    >
                        Continue
                    </StyledButton>
                </Stack>
            </Container>
        </StyledBox>
    );
};

export default ActionButtons;
