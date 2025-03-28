import theme from 'src/theme';

export enum BillableHoursRatioState {
    DANGER = 'DANGER',
    WARNING = 'WARNING',
    SUCCESS = 'SUCCESS'
}

export type IStateColor = {
    [key in BillableHoursRatioState]: {
        solid?: string;
        transparent: string;
        gradient?: string;
    };
};

const styles = {
    label: {
        fontFamily: 'Inter',
        fontSize: '12px',
        minWidth: '31px',
        lineHeight: '15px'
    },
    gradientText: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent'
    },
    gradientBorder: {
        borderImageSlice: '1'
    },
    container: {
        marginLeft: '10px',
        width: '60px',
        height: '24px',
        border: '1px solid transparent'
    },
    filled: {
        height: '24px'
    }
};

export const stateColors: IStateColor = {
    DANGER: {
        solid: theme.color.orangyRed,
        transparent: theme.color.lightOrangyRed
    },
    WARNING: {
        transparent: theme.color.lightOrangeYellow,
        gradient: theme.gradients.goldenYellow
    },
    SUCCESS: {
        solid: theme.color.freshGreen,
        transparent: theme.color.lightGreen
    }
};

export default styles;
