import color from 'src/theme/color';

export const selectSx = (
    width?: number | string,
    height?: number | string,
    iconColor: string = color.white30,
    backgroundColor: string = color.blackRock
) => ({
    backgroundColor,
    borderRadius: 16,
    width,
    height,
    '& .MuiSelect-icon': {
        color: iconColor
    },
    color: color.white90,
    font: '12px/18px "Inter"'
});
