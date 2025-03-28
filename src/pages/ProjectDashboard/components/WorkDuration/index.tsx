import { FunctionComponent } from 'react';
import Container from '@mui/material/Container';
import { IWorkDuration } from 'src/types/workDuration';
import { styles } from './styled';
import { Box } from '@mui/material';
import { Label } from 'src/shared';

export interface Props {
    workDuration: IWorkDuration;
}

const WorkDuration: FunctionComponent<Props> = ({ workDuration }: Props) => {
    return (
        <Container
            maxWidth={false}
            component="div"
            style={styles.containerStyle}
        >
            <Box sx={styles.titleRowStyle}>
                <Label sxOverrides={styles.titleLabelStyle}>
                    Total work duration
                </Label>
                <Label
                    sxOverrides={{
                        ...styles.titleValueStyle,
                        ...styles.goldenColor
                    }}
                >
                    {workDuration.totalWorkDuration}
                </Label>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>
                    Average task duration
                </Label>
                <Label
                    sxOverrides={{
                        ...styles.infoValueStyle,
                        ...styles.goldenColor
                    }}
                >
                    {workDuration.averageTaskDuration}
                </Label>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>Net work time</Label>
                <Label sxOverrides={styles.infoValueStyle}>
                    {workDuration.netWorkTime}
                </Label>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>Latency</Label>
                <Label sxOverrides={styles.infoValueStyle}>
                    {workDuration.latencyTime}
                </Label>
            </Box>
            <Box
                sx={{
                    ...styles.summaryRowStyle,
                    ...styles.borderBottom
                }}
            >
                <Box>
                    <Box
                        sx={{
                            ...styles.summaryContentBoxStyle,
                            ...styles.summaryBox1
                        }}
                    >
                        <Label
                            sxOverrides={{
                                ...styles.summaryLabelStyle,
                                ...styles.goldenColor
                            }}
                        >
                            {workDuration.codingTime}
                        </Label>
                        <Label sxOverrides={styles.summaryValueStyle}>
                            Coding
                        </Label>
                    </Box>
                </Box>
                <Box sx={styles.verticalLineStyle} />
                <Box>
                    <Box
                        sx={{
                            ...styles.summaryContentBoxStyle,
                            ...styles.summaryBox2,
                            ...styles.centeredText
                        }}
                    >
                        <Label
                            sxOverrides={{
                                ...styles.summaryLabelStyle,
                                ...styles.goldenColor
                            }}
                        >
                            {workDuration.codeReviewTime}
                        </Label>
                        <Label sxOverrides={styles.summaryValueStyle}>
                            Code review
                        </Label>
                    </Box>
                </Box>
                <Box sx={styles.verticalLineStyle} />
                <Box>
                    <Box
                        sx={{
                            ...styles.summaryContentBoxStyle,
                            ...styles.summaryBox3
                        }}
                    >
                        <Label
                            sxOverrides={{
                                ...styles.summaryLabelStyle,
                                ...styles.goldenColor
                            }}
                        >
                            {workDuration.qaTime}
                        </Label>
                        <Label sxOverrides={styles.summaryValueStyle}>QA</Label>
                    </Box>
                </Box>
                <Box sx={styles.verticalLineStyle} />
                <Box>
                    <Box
                        sx={{
                            ...styles.summaryContentBoxStyle,
                            ...styles.summaryBox4
                        }}
                    >
                        <Label
                            sxOverrides={{
                                ...styles.summaryLabelStyle,
                                ...styles.goldenColor
                            }}
                        >
                            {workDuration.idleTime}
                        </Label>
                        <Label sxOverrides={styles.summaryValueStyle}>
                            Idle
                        </Label>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>
                    Average delegation time
                </Label>
                <Label
                    sxOverrides={{
                        ...styles.infoValueStyle,
                        ...styles.goldenColor
                    }}
                >
                    {workDuration.averageDelegationTime}
                </Label>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>
                    % time without work
                </Label>
                <Label sxOverrides={styles.infoValueStyle}>
                    {workDuration.percentageTimeWithoutWork}
                </Label>
            </Box>
            <Box sx={{ ...styles.infoRowStyle, ...styles.borderBottom }}>
                <Label sxOverrides={styles.infoLabelStyle}>Task velocity</Label>
                <Label sxOverrides={styles.infoValueStyle}>
                    {workDuration.taskVelocity}
                </Label>
            </Box>
            <Box sx={styles.infoRowStyle}>
                <Label sxOverrides={styles.infoLabelStyle}>Work velocity</Label>
                <Label sxOverrides={styles.infoValueStyle}>
                    {workDuration.workVelocity}
                </Label>
            </Box>
        </Container>
    );
};

export default WorkDuration;
