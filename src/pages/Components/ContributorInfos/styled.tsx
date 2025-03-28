import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import color from 'src/theme/color';

export const SkillWrapperBox = styled('div')({
    padding: '36px'
});

export const ContributorLinkContainer = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: '100px',
    marginTop: '40px',
    justifyContent: 'space-between',
    width: '200px'
});

export const ContainerStyle = {
    mt: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '200px'
};

export const SwitchContainer = styled('div')({
    marginTop: 12,
    marginBottom: 12
});

export const GridStyle = styled(Grid)({
    justifyContent: 'start',
    backgroundColor: color.darkBlue,
    padding: '10px',
    zIndex: 1,
    position: 'relative'
});
