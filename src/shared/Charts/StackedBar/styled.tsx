import { styled } from '@mui/system';
import theme from 'src/theme';

export const LoaderWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
});

export const Container = styled('div')({
    background: theme.color.darkBlue,
    padding: '36px'
});

export const ChartHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
    alignItems: 'baseline'
});

export const ChartTitleContainer = styled('div')({
    flex: 2
});

export const LegendsWrapper = styled('div')({
    color: theme.color.white,
    display: 'flex',
    flex: 5,
    justifyContent: 'end',
    alignItems: 'center',
    gap: '8px'
});

export const LabelsRowContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 20px'
});

export const LabelItem = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

export const descriptionStyle = {
    color: theme.color.white,
    fontFamily: 'Inter',
    fontSize: '12px',
    opacity: '0.5',
    width: '200%',
    display: 'block'
};

export const titleStyle = {
    flex: 1,
    color: theme.color.white,
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '16px'
};

export const totalStyle = {
    textAlign: 'right',
    width: '5%',
    color: theme.color.goldenColor,
    fontFamily: 'Inter',
    fontSize: '12px'
};

export const LabelStyle = {
    opacity: '0.3',
    fontSize: '11px',
    color: theme.color.white
};
