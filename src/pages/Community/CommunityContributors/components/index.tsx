import { Tooltip, TooltipProps } from '@mui/material';

export const StyledToolTip = (tooltipProps: TooltipProps) => (
    <Tooltip
        {...tooltipProps}
        PopperProps={{
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, -30]
                    }
                }
            ]
        }}
    />
);
