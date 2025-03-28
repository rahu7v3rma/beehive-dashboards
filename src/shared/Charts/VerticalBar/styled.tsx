import { styled } from '@mui/system';
import theme from 'src/theme';
import { alignLegend } from './index';
import { Box } from '@mui/material';

type LegendsWrapperProps = {
    alignLegends: alignLegend;
};

export const LoaderWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
});

export const ChartContainer = styled('div')`
    height: ${(props: { height?: string }) => props.height || ''};
`;

export const Container = styled('div')({
    background: theme.color.darkBlue,
    padding: '36px',
    height: '100%'
});

export const ChartHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
});

export const ChartTitleContainer = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems: 'center'
});

export const ChartTitle = styled('label')({
    flex: 1,
    color: theme.color.white90,
    fontFamily: 'Inter !important',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px'
});

export const LegendsWrapper = styled('div')<LegendsWrapperProps>(
    ({ alignLegends }) => ({
        color: theme.color.white,
        display: 'flex',
        flex: 5,
        justifyContent: alignLegends,
        alignItems: 'center',
        gap: '8px'
    })
);

export const ChartBreadcum = styled('label')({
    color: theme.color.white,
    opacity: 0.3,
    fontSize: '11px',
    marginTop: '17px',
    marginBottom: '25px'
});

export const LabelsRowContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '24px'
});

export const LabelItem = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

export const LabelDay = styled('label')({
    color: theme.color.white50,
    opacity: '50%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center'
});

export const LabelMonth = styled('label')({
    color: theme.color.lightningYellow,
    opacity: '50%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center'
});

export const breadcrumbSX = {
    font: '11px/13px "Inter",sans-serif !important',
    color: theme.color.white30,
    marginTop: '22px',
    marginBottom: '20px'
};
export const BackButton = styled('div')({
    cursor: 'pointer',
    marginRight: 10,
    width: 20,
    display: 'flex'
});

export const BarBox = styled(Box)`
    height: ${(props: {
        horizontal: boolean;
        heightChart: string;
        heightChartStatic?: string;
    }) => (props.horizontal ? props.heightChart : props.heightChartStatic)};
`;

export const BarWrapper = styled(Box)`
    ${(props: { horizontal: boolean }) =>
        props.horizontal
            ? `
height: calc(100% - 74px);
overflow: hidden;
overflow-y: auto;
overflow-x: auto;
::-webkit-scrollbar {
    width: 6px;
    height: 177px;
}
/* Track */
::-webkit-scrollbar-track {
    background-image: linear-gradient(90deg, transparent, transparent calc(50% - 1px), ${theme.color.white07} calc(50%), transparent calc(50% + 1px));
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.color.scrollBarColor};
    border-radius: 8px;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
`
            : ''};
`;

export const labelStyle = {
    color: theme.color.lightningYellow,
    opacity: '50%',
    fontFamily: 'Inter',
    fontSize: '12px'
};
