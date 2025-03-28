import color, { IColors } from './color';
import breakpoint, { IBreakPoint } from './breakpoint';
import spacing, { ISpacing } from './spacing';
import gradients, { IGradient } from './gradients';

export type ITheme = {
    color: IColors;
    breakpoint: IBreakPoint;
    spacing: ISpacing;
    gradients: IGradient;
};

const theme: ITheme = {
    color,
    breakpoint,
    spacing,
    gradients
};

export default theme;
