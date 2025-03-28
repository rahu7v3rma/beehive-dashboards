import { FunctionComponent } from 'react';
import {
    LogoContainer,
    ProjectsMenu,
    StyledAppBar,
    StyledToolbar,
    ToolbarContainer
} from './styled';
import Box from '@mui/material/Box';
import { ReactComponent as AppLogo } from './../../assets/icons/app-logo.svg';
import { ReactComponent as PersonIcon } from './../../assets/icons/person.svg';
import { ReactComponent as DelegateIcon } from './../../assets/icons/delegate.svg';
import { ReactComponent as AdminBoardIcon } from './../../assets/icons/admin_board.svg';
import { ReactComponent as MainBoardIcon } from './../../assets/icons/main_board.svg';
import { ReactComponent as CommunityIcon } from './../../assets/icons/community.svg';
import { ReactComponent as HelpNavbarIcon } from './../../assets/icons/help_navbar.svg';
import { ReactComponent as SignoutIcon } from './../../assets/icons/signout.svg';
import { ReactComponent as TemplatesIcon } from './../../assets/icons/templates.svg';
import { ReactComponent as BeeIcon } from './../../assets/icons/bee.svg';
import { Link } from 'react-router-dom';
import DropdownWithIcon from './components/DropdownWithIcon';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'src/redux/auth/service';
import { RoutesEnum } from 'src/types/navigation';
import { isAdmin } from 'src/redux/auth/service';

export type Props = {
    children: React.ReactNode;
};

const Navbar: FunctionComponent<Props> = ({ children }) => {
    const admin = isAdmin();
    const navigate = useNavigate();

    const handleSignout = () => {
        signOut().then(() => {
            navigate('/login');
        });
    };

    const menuItemsList = [
        {
            ItemIcon: <DelegateIcon />,
            option: 'Delegate',
            onClick: () => {
                navigate('/delegate/task');
            },
            path: RoutesEnum.DELEGATE_TASK
        },
        {
            ItemIcon: <TemplatesIcon />,
            option: 'Templates',
            onClick: () => {
                navigate('/templates');
            },
            path: RoutesEnum.TEMPLATES
        },
        {
            ItemIcon: <MainBoardIcon />,
            option: 'Main board',
            onClick: () => {
                navigate('/overview');
            },
            path: RoutesEnum.CLIENT_DASHBOARD
        },
        ...(admin
            ? [
                  {
                      ItemIcon: <AdminBoardIcon />,
                      option: 'Admin board',
                      onClick: () => {
                          navigate('/projects');
                      },
                      path: RoutesEnum.PROJECT_DASHBOARD
                  },
                  {
                      ItemIcon: <CommunityIcon />,
                      option: 'Community',
                      onClick: () => {
                          navigate('/community');
                      },
                      path: RoutesEnum.COMMUNITY
                  },
                  {
                      ItemIcon: <BeeIcon />,
                      option: 'Beehive dashboards',
                      onClick: () => {
                          window.open(
                              'https://app.caas.ai/dashboard#/',
                              '_blank'
                          );
                      },
                      path: 'https://app.caas.ai/dashboard#/'
                  }
              ]
            : []),
        {
            ItemIcon: <HelpNavbarIcon />,
            option: 'Help',
            onClick: () => {
                window.open('https://docs.caas.ai/community', '_blank');
            },
            path: 'https://docs.caas.ai/community'
        },

        {
            ItemIcon: <SignoutIcon />,
            option: 'Sign out',
            onClick: handleSignout,
            path: '/login'
        }
    ];

    return (
        <ToolbarContainer>
            <StyledAppBar>
                <StyledToolbar>
                    <LogoContainer>
                        <Link to="https://project.caas.ai/overview">
                            <AppLogo />
                        </Link>
                    </LogoContainer>
                    <ProjectsMenu />
                    <DropdownWithIcon
                        icon={<PersonIcon />}
                        list={menuItemsList}
                        title="Settings"
                    />
                </StyledToolbar>
            </StyledAppBar>
            <Box
                component="main"
                sx={{
                    minWidth: '100%',
                    minHeight: '100vh',
                    backgroundColor: theme.color.codGray
                }}
            >
                {children}
            </Box>
        </ToolbarContainer>
    );
};

export default Navbar;
