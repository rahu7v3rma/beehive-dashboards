import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { FunctionComponent } from 'react';
import Label from '../Label';
import { TimeRangeDatePicker, TimeRangeLabel, timeRangeStyles } from './styled';

export type TimeRangeItem = {
    id: string;
    label: string;
};

export type CustomRange = {
    from: string;
    to: string;
};

export type TimeRangeLabelProps = {
    className: string;
    key?: string;
    onClick: () => void;
};

export type TimeRangeProps = {
    items: TimeRangeItem[];
    activeLabel: string;
    customRange?: CustomRange;
    hasCustomRange?: boolean;
    setCustomRange?: React.Dispatch<React.SetStateAction<CustomRange>>;
    onTimeRangeChange: (value: string) => void;
};

const TimeRange: FunctionComponent<TimeRangeProps> = ({
    items = [],
    hasCustomRange,
    activeLabel,
    customRange,
    setCustomRange,
    onTimeRangeChange
}: TimeRangeProps) => {
    const updateCustomRange = (key: string, value: string) => {
        if (setCustomRange) {
            setCustomRange((previous) => {
                switch (key) {
                    case 'to':
                        if (value >= previous.from) {
                            return { ...previous, [key]: value };
                        } else {
                            return { from: value, to: value };
                        }
                    default:
                        if (value > previous.to) {
                            return { from: value, to: value };
                        } else {
                            return { ...previous, [key]: value };
                        }
                }
            });
        }
    };

    const renderCustomRangeLabel = () => {
        if (hasCustomRange) {
            return (
                <TimeRangeLabel
                    className={activeLabel === 'custom' ? 'active' : ''}
                    onClick={() => {
                        onTimeRangeChange('custom');
                    }}
                >
                    Custom
                </TimeRangeLabel>
            );
        }
        return null;
    };

    const openDatePicker = (pickerId: string) => {
        (document.getElementById(pickerId) as HTMLInputElement).showPicker();
    };

    const renderCustomRangeInputs = () => {
        if (hasCustomRange && activeLabel === 'custom' && customRange) {
            return (
                <Box sx={timeRangeStyles.customRangeContainer}>
                    <Box
                        sx={timeRangeStyles.datePickerContainer}
                        onClick={() => {
                            openDatePicker('timeRangeDatePicker1');
                        }}
                    >
                        <Label sxOverrides={timeRangeStyles.datePickerLabel}>
                            From
                        </Label>
                        <TimeRangeDatePicker
                            id={'timeRangeDatePicker1'}
                            value={customRange.from}
                            onChange={(event) =>
                                updateCustomRange('from', event.target.value)
                            }
                            type={'date'}
                        />
                        <ArrowDropDownIcon
                            style={timeRangeStyles.datePickerIcon}
                        />
                    </Box>
                    <Box
                        sx={timeRangeStyles.datePickerContainer}
                        onClick={() => {
                            openDatePicker('timeRangeDatePicker2');
                        }}
                    >
                        <Label sxOverrides={timeRangeStyles.datePickerLabel}>
                            Till
                        </Label>
                        <TimeRangeDatePicker
                            id={'timeRangeDatePicker2'}
                            value={customRange.to}
                            onChange={(event) =>
                                updateCustomRange('to', event.target.value)
                            }
                            type={'date'}
                        />
                        <ArrowDropDownIcon
                            style={timeRangeStyles.datePickerIcon}
                        />
                    </Box>
                </Box>
            );
        }
        return null;
    };

    return (
        <Box sx={timeRangeStyles.container}>
            {items.map((item) => (
                <TimeRangeLabel
                    className={activeLabel === item.id ? 'active' : ''}
                    key={item.id}
                    onClick={() => {
                        onTimeRangeChange(item.id);
                    }}
                >
                    {item.label}
                </TimeRangeLabel>
            ))}
            {renderCustomRangeLabel()}
            {renderCustomRangeInputs()}
        </Box>
    );
};

export default TimeRange;
