import { styled } from '@mui/system';
import { Box, Button, IconButton, MenuItem, Popper } from '@mui/material';
import theme from 'src/theme';

export const DetailsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1px'
});

export const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    text-transform: none;
    font-size: 20px;
    font-weight: bold;
    color: ${theme.color.white70} !important;
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledIconButton = styled(IconButton)({
    marginLeft: '8px',
    color: theme.color.lightningYellow
});

export const StyledPopperBox = styled(Box)`
    position: absolute;
    background-color: ${theme.color.raisinBlack};
    color: ${theme.color.white70};
    border-radius: 4px;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    transform: translateX(-50%);
    max-height: 600px;
    overflow-y: auto;
`;

export const MenuTitle = styled(MenuItem)`
    color: ${theme.color.white};
    font-weight: bold;
    pointer-events: none;
    text-align: left;
`;
export const StyledMenuItem = styled(MenuItem)`
    text-align: center;
`;

export const ProjectsPopper = styled(Popper)(() => ({
    zIndex: 100
}));
