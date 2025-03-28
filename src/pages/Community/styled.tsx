import { styled, Box, ListItem } from '@mui/material';
import theme from 'src/theme';

export const SkillsBox = styled(Box)`
    margin-top: 120px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    width: 100%;
`;

export const OverviewBox = styled(Box)`
    width: 15%;
    height: 315px;
    background-color: ${theme.color.darkBlue};
    margin-right: 15px;
`;

export const countStyle = {
    fontFamily: 'Inter !important',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px'
};

export const StyledListItem = styled(ListItem)({
    '& .MuiTypography-root': {
        ...countStyle,
        color: theme.color.white90
    },
    '& .MuiListItemSecondaryAction-root': {
        ...countStyle,
        color: theme.color.lightningYellow,
        lineHeight: '18px',
        fontWeight: 400
    }
});

export const DividerStyle = {
    borderColor: theme.color.tuna,
    marginTop: '18px',
    marginBottom: '18px'
};

export const cardStyle = {
    p: '20px 36px 20px 36px',
    bgcolor: theme.color.darkBlue,
    mr: '56px',
    minWidth: '18%',
    height: '305px'
};

export const listStyle = {
    width: '100%'
};

export const WeeklyStyle = styled(Box)`
    margin-bottom: 20px;
    margin-top: 30px;
    padding-left: 100px;
    padding-right: 100px;
`;
