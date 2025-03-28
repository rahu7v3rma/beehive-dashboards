import { Box, Grid, styled } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import theme from 'src/theme';

const S = {
    Root: styled(Box)`
        background-color: ${theme.color.darkBlue};
        height: 272px;
    `,
    TitlesContainer: styled(Box)`
        display: flex;
        flex-direction: column;
        margin-left: 36px;
        padding-top: 36px;
        margin-bottom: 30px;
    `,
    MetricsGrid: styled(Grid)`
        width: 100%;
        padding: 0px 20px 33px 36px;
    `,
    titleSX: {
        fontFamily: '"Inter",sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        color: theme.color.white90
    },
    subtitleSX: {
        fontFamily: '"Inter",sans-serif',
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white50,
        marginTop: '10px'
    },
    MetricsContainer: styled(Box)`
        margin: 30px 36px;
        padding-bottom: 36px;
        width: 100%;
    `,
    Skill: styled(Grid)`
        text-align: right;
        position: relative;
    `,
    skillSX: {
        fontFamily: '"Inter",sans-serif',
        fontSize: '12px',
        lineHeight: '12px',
        color: theme.color.white50,
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)'
    },
    Metric: styled(Grid)`
        position: relative;
        padding: 17px;
    `,
    Breakdown: styled(Box)`
        background: ${theme.color.blackRock};
        width: 98%;
        display: block;
        height: 25px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    `,
    PercentBar: styled(Box)`
        width: 98%;
        position: absolute;
        left: 20px;
        border-top: 1px solid ${theme.color.tuna};
        display: flex;
        justify-content: space-between;
        padding-top: 13px;
        top: 10px;
    `,
    percentDefaultSX: {
        fontFamily: '"Inter",sans-serif',
        fontSize: '10px',
        lineHeight: '12px',
        color: theme.color.white50
    },
    Fill: styled(Box)<{ percent: number }>`
        width: ${(a) => a.percent}%;
        height: 100%;
        background: ${theme.gradients.goldenYellow};
    `,
    PercentNumber: styled(Box)<{ percent: number }>`
        width: ${(a) => a.percent}%;
        position: absolute;
        top: 0;
        padding-top: 13px;
    `,
    Dot: styled(CircleIcon)`
        && {
            position: absolute;
            top: -2.5px;
            right: -2px;
            width: 4px;
            height: 4px;
            fill: ${theme.color.lightningYellow};
        }
    `,
    percentDynamicSX: {
        fontFamily: '"Inter",sans-serif',
        fontSize: '10px',
        lineHeight: '12px',
        position: 'absolute',
        right: '-11px;',
        background: theme.gradients.darkGold,
        backgroundClip: 'text',
        textFillColor: 'transparent'
    }
};

export default S;
