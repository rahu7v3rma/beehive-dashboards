import { TextField } from '@mui/material';
import theme from 'src/theme';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const searchInputStyles = {
    searchLabelSX: {
        color: theme.color.white50,
        fontFamily: '"Inter",sans-serif',
        fontSize: 12,
        lineHeight: '18px'
    },
    searchInputSX: {
        color: theme.color.white50,
        fontFamily: '"Inter",sans-serif',
        fontSize: 12,
        lineHeight: '18px'
    }
};
export const SearchInput = styled(TextField)(
    (props: { width?: string }) => `
    && {
        border: 0.5px solid transparent;
        border-bottom: 0.5px solid ${theme.color.white30};
        width: ${props.width || '300px'};
    }
`
);

export const StyledSearchIcon = styled(SearchIcon)`
    color: ${theme.color.white70};
    width: 20px;
    height: 20px;
`;
