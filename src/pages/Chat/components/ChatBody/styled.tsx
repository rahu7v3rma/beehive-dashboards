import { styled } from '@mui/system';
import theme from 'src/theme';

export const StyledChatBody = styled('div')`
    overflow: scroll;
    height: calc(100% - 50px);
    ::-webkit-scrollbar-track {
        backgroundcolor: ${theme.color.charcoalBlack};
    }
`;
