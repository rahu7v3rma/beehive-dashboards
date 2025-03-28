import { Box } from '@mui/material';
import Label from '../Label';
import styles, { BillableHoursRatioState, stateColors } from './styles';

export interface BillableHoursRatioProps {
    ratio: number;
}
const WARNING_THRESHOLD = 0.3;
const SUCCESS_THRESHOLD = 0.7;

const BillableHoursRatio = ({ ratio }: BillableHoursRatioProps) => {
    let ratioState: BillableHoursRatioState = BillableHoursRatioState.DANGER;
    if (ratio > SUCCESS_THRESHOLD) {
        ratioState = BillableHoursRatioState.SUCCESS;
    } else if (ratio > WARNING_THRESHOLD) {
        ratioState = BillableHoursRatioState.WARNING;
    }
    const ratioPercentage = Math.floor(ratio * 100);
    let hasGradient = false;
    const stateColor = stateColors[ratioState];
    hasGradient = !!stateColor.gradient;
    let labelStyles, containerStyles;
    if (hasGradient) {
        labelStyles = {
            ...styles.gradientText,
            backgroundImage: stateColor.gradient
        };
        containerStyles = {
            ...styles.gradientBorder,
            borderImageSource: stateColor.gradient
        };
    } else {
        labelStyles = {
            color: stateColor.solid
        };

        containerStyles = {
            borderColor: stateColor.solid
        };
    }
    return (
        <Box display={'flex'} alignItems={'center'}>
            <Label sxOverrides={{ ...styles.label, ...labelStyles }}>
                {ratioPercentage}%
            </Label>
            <Box
                sx={{
                    ...styles.container,
                    ...containerStyles
                }}
            >
                <Box
                    sx={{
                        ...styles.filled,
                        backgroundColor: stateColor.transparent,
                        width: `${Math.min(ratioPercentage, 100).toString()}%`
                    }}
                />
            </Box>
        </Box>
    );
};
export default BillableHoursRatio;
