import theme from 'src/theme';
import { styled } from '@mui/system';

export const Root = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginTop: '83px',
    paddingLeft: '100px',
    paddingRight: '100px',
    gap: 10
});

export const AvatarWithText = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

export const LabelWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    marginLeft: '30px'
});

export const RepoLinkWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#3E3D41',
    color: theme.color.white,
    borderRadius: '10px',
    marginTop: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    '&:hover': {
        backgroundColor: `${theme.color.lightGray}`,
        color: theme.color.black
    }
});

export const TooltipBg = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    paddingTop: '5px'
});

export const S: { [key: string]: React.CSSProperties } = {
    projectId: {
        marginBottom: '0.1rem',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '12px',
        marginRight: '10px',
        color: theme.color.white50,
        textWrap: 'nowrap'
    },
    projectTitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        color: theme.color.white90,
        marginLeft: '0px',
        marginBottom: '10px'
    },
    noReposLabel: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '10px',
        lineHeight: '19px',
        color: theme.color.white90
    }
};

export const RepoName = styled('span')({
    padding: '0px 2px'
});
