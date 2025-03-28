import { ReactNode, FunctionComponent, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import {
    StyledBox,
    ProfileIconBox,
    MenuListItem,
    ListItemTitleText,
    StyledCloseIcon,
    ListItemOptionText,
    StyledListItemIcon,
    StyledListItemButton
} from './styled';
import { StyledDropDownBox } from './styled';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Popper } from '@mui/material';

export interface Props {
    icon: ReactNode;
    title: string;
    list: {
        ItemIcon: ReactNode;
        option: string;
        onClick: () => void;
        path?: string;
    }[];
}

const DropdownWithIcon: FunctionComponent<Props> = ({ title, icon, list }) => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation().pathname;
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <ProfileIconBox
                ref={anchorRef}
                isOpen={open}
                onClick={() => setOpen(!open)}
            >
                {icon}
            </ProfileIconBox>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-end"
                style={{ zIndex: 5 }}
            >
                <Box pt={1}>
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <List>
                            <StyledBox>
                                <StyledDropDownBox>
                                    <ListItemTitleText primary={title} />
                                    <StyledCloseIcon
                                        onClick={() => setOpen(false)}
                                    />
                                </StyledDropDownBox>
                                {list.map(
                                    (
                                        { ItemIcon, option, onClick, path },
                                        index
                                    ) => (
                                        <MenuListItem
                                            path={path}
                                            currentpath={location}
                                            key={index}
                                            disablePadding
                                        >
                                            <StyledListItemButton
                                                onClick={onClick}
                                            >
                                                <StyledListItemIcon
                                                    path={path}
                                                    currentpath={location}
                                                >
                                                    {ItemIcon}
                                                </StyledListItemIcon>
                                                <ListItemOptionText
                                                    primary={option}
                                                />
                                            </StyledListItemButton>
                                        </MenuListItem>
                                    )
                                )}
                            </StyledBox>
                        </List>
                    </ClickAwayListener>
                </Box>
            </Popper>
        </>
    );
};

export default DropdownWithIcon;
