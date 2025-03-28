import { styled } from '@mui/material';
import theme from 'src/theme';

export const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginTop: '83px',
    paddingLeft: '100px',
    paddingRight: '100px',
    justifyContent: 'space-between'
});

export const AvatarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

export const ProjectDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '24px'
});

export const RightContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

export const delegateTaskButton = {
    color: theme.color.black,
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: '600'
};

export const IconWithTextWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '100px'
});

export const styles: { [key: string]: React.CSSProperties } = {
    title: {
        fontFamily: '"Inter", sans-serif',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '24px',
        color: theme.color.white90,
        marginBottom: '11px'
    },
    subtitle: {
        fontFamily: '"Inter", sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '12px',
        color: theme.color.white50
    },
    icon: {
        marginRight: '12px'
    }
};
