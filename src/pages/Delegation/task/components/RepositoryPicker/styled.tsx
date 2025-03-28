import { styled, Box } from '@mui/material';
import theme from 'src/theme';

export const repositoryTitle = {
    font: '600 16px/19px "Inter",sans-serif !important',
    color: theme.color.white90,
    display: 'block',
    margin: '0px 0 12px 0px'
};

export const repositorySubtitle = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white50,
    marginBottom: '20px'
};

export const TitleBox = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled(Box)`
    margin-top: 24px;
    padding: 28px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;
