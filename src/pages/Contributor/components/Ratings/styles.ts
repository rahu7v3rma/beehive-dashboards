import theme from 'src/theme';
import { styled, Box } from '@mui/material';

const fontFamily = '"Inter",sans-serif !important';
const baseGradientText = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
};
const styles: {
    [key: string]: React.CSSProperties;
} = {
    title: {
        font: `600 16px/19px ${fontFamily}`,
        color: theme.color.white90,
        marginBottom: '15px',
        display: 'block'
    },
    subtitle: {
        font: `12px/15px ${fontFamily}`,
        color: theme.color.white50,
        marginBottom: '30px',
        display: 'block'
    },
    label: {
        font: `500 12px/15px ${fontFamily}`,
        color: theme.color.white90,
        flexGrow: '1'
    },
    count: {
        font: `11px/18px ${fontFamily}`,
        color: theme.color.pirateGoldRgba6
    },
    stars: {
        marginLeft: '26px'
    },
    value: {
        font: `600 12px/18px ${fontFamily}`,
        ...baseGradientText,
        marginLeft: '25px',
        backgroundImage: theme.gradients.goldenYellow
    },
    starBorderIcon: {
        color: theme.color.tuna,
        fontSize: 18
    },
    starIcon: {
        fill: 'url(#filledStar)',
        fontSize: 18
    },
    underline: {
        textDecoration: 'underline'
    }
};

export const CountBox = styled(Box)`
    margin-left: 12px;
    display: flex;
`;

export const ParentBox = styled(Box)`
    display: flex;
    align-items: center;
    padding: 0 !important;
    margin-bottom: 28px;
`;

export const RootBox = styled(Box)`
    background-color: ${theme.color.darkBlue};
    display: inline-block;
    height: 400px;
    padding: 36px;
    padding-left: 15px;
    border-radius: 4px;
    margin-top: 44px;
`;

export default styles;
