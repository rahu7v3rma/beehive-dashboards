import color from '../color';

export type IGradient = {
    goldenYellow: string;
    darkGold: string;
    yellow80: string;
};

const gradients = {
    goldenYellow: `linear-gradient(105.23deg, ${color.lightningYellow} 0%, ${color.pirateGold} 100%)`,
    darkGold: `linear-gradient(105.23deg, ${color.lightningYellowRgba6} 0%, ${color.pirateGoldRgba6} 100%)`,
    yellow80: `linear-gradient(135deg, rgba(250, 187, 24, 0.80) 0%, rgba(195, 142, 2, 0.80) 100%)`
};

export default gradients;
