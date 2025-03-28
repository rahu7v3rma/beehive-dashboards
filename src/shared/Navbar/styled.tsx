import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';
import ProjectDetailsBar from './components/ProjectDetailsBar';

interface ProfileIconBoxProps {
    isOpen?: boolean;
}

export const StyledAppBar = styled(AppBar)`
    background-color: ${theme.color.blackRock} !important;
    grid-area: logo;
`;

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const LogoContainer = styled(Box)`
    align-items: center;
`;

export const ProjectsMenu = styled(ProjectDetailsBar)`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const ProfileIconBox = styled(Box)<ProfileIconBoxProps>`
    right: 25px;
    top: 15px;
    border-radius: 19px;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.color.tuna};
    cursor: pointer;
    color: ${({ isOpen }) =>
        isOpen ? theme.color.lightningYellow : theme.color.white};
    z-index: 1000;
    box-sizing: border-box;
`;

export const WaitingTasksBox = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StyledDropDownBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const StyledBox = styled(Box)`
    border-radius: 2px;
    background-color: ${theme.color.darkBlue};
    color: ${theme.color.raisinBlack};
    min-width: 160px;
    right: 25px;
    top: 30px;
    z-index: 999;
`;

export const ToolbarContainer = styled(Box)`
    display: flex;
`;
