import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import theme from 'src/theme';

interface ProfileIconBoxProps {
    isOpen?: boolean;
}

interface StyledListItemIconProps {
    path?: string;
    currentpath: string;
}

interface MenuListItemProps {
    path?: string;
    currentpath: string;
}

export const StyledBox = styled(Box)`
    border-radius: 2px;
    background-color: ${theme.color.raisinBlack};
    color: ${theme.color.raisinBlack};
    min-width: 160px;
    box-sizing: border-box;
`;

export const ProfileIconBox = styled(Box)<ProfileIconBoxProps>`
    border-radius: 19px;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.tuna};
    cursor: pointer;
    color: ${({ isOpen }) =>
        isOpen ? theme.color.lightningYellow : theme.color.white};
`;

export const StyledListItemButton = styled(ListItem)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px;
    gap: 2px;
`;

export const StyledDropDownBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 6px;
    gap: 4px;
`;

export const ListItemTitleText = styled(ListItemText)`
    & .MuiTypography-root {
        font-weight: bold;
        color: white;
        margin: 0;
    }
    flex: 1;
`;

export const ListItemOptionText = styled(ListItemText)`
    margin: 0;
    text-align: left;
    font-size: 12px;
    color: ${theme.color.midGray};
    cursor: pointer;

    & .MuiTypography-root {
        margin: 0;
    }
`;

export const MenuListItem = styled(ListItem)<MenuListItemProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0;
    background: ${({ path, currentpath }) =>
        path === currentpath
            ? theme.color.fadedYellow
            : theme.color.raisinBlack};
    border-bottom: 1px solid
        ${({ path, currentpath }) =>
            path === currentpath
                ? theme.color.fadedYellow
                : theme.color.grayBlue};
`;

export const StyledCloseIcon = styled(CloseIcon)`
    cursor: pointer;
    width: 12px;
    height: 12px;
    fill: ${theme.color.midGray};
    margin-left: auto;
`;

export const StyledListItemIcon = styled(ListItemIcon)<StyledListItemIconProps>`
    & .MuiListItemIcon-root {
        minwidth: unset;
        margin-right: 0;
        width: 24px;
        justify-content: flex-start;
    }
    color: ${({ path, currentpath }) =>
        path === currentpath
            ? theme.color.lightningYellow
            : theme.color.midGray};
    min-width: 24px;
    margin-right: 0.5px;
    display: flex;
    justify-content: flex-start;
`;
