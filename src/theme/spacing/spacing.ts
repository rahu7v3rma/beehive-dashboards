const baseSpacing: number = 16;

export type ISpacing = {
    extraExtraTiny: number;
    extraTiny: number;
    tiny: number;
    small: number;
    medium: number;
    largeMedium: number;
    large: number;
    extraLarge: number;
    huge: number;
    borderRadius: number;
    cardBorderRadius: number;
};

function getSpacing(multiplier: number): number {
    return multiplier * baseSpacing;
}

const spacing = {
    borderRadius: 4,
    cardBorderRadius: 8
};

const spacings = {
    extraExtraTiny: getSpacing(0.25),
    extraTiny: getSpacing(0.5),
    tiny: getSpacing(1),
    small: getSpacing(1.5),
    medium: getSpacing(2),
    largeMedium: getSpacing(2.5),
    large: getSpacing(3.5),
    extraLarge: getSpacing(5),
    huge: getSpacing(9),
    borderRadius: spacing.borderRadius,
    cardBorderRadius: spacing.cardBorderRadius
};

export default spacings;
