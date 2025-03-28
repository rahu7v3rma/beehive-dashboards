import { FunctionComponent } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LineController,
    PointElement,
    BarController,
    TooltipItem
} from 'chart.js';
import StatusChip from '../../StatusChip';
import {
    Container,
    ChartHeader,
    ChartTitleContainer,
    LegendsWrapper,
    descriptionStyle,
    titleStyle,
    LabelStyle
} from './styled';
import { Chart } from 'react-chartjs-2';
import theme from 'src/theme';
import Label from '../../Label/index';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LineController,
    BarController
);

type ChartType = 'line';

type ChartDataType = {
    label: string;
    data: number[];
    tooltips?: number[];
    isTime?: boolean;
    backgroundColor: string | ((context: any) => string);
    boxColor: string;
    type?: ChartType;
    fill?: boolean;
    borderColor?: string;
    borderWidth?: number;
    tension?: number;
};

export type Props = {
    data: {
        labels: string[];
        datasets: ChartDataType[];
        totalBudget: string[];
    };
    title: string;
    breadCum: string;
    description?: string;
};

export const StackedBar: FunctionComponent<Props> = ({
    data,
    title,
    breadCum,
    description
}) => {
    return (
        <Container>
            <ChartHeader>
                <ChartTitleContainer>
                    <Label sxOverrides={titleStyle}>{title}</Label>
                    <Label sxOverrides={descriptionStyle}>{description}</Label>
                </ChartTitleContainer>
                <LegendsWrapper>
                    {data.datasets.map((item: ChartDataType, i: number) => {
                        let removeLineTypeProps = item.hasOwnProperty('type');
                        const sum = item.data.reduce(
                            (partialSum, a) => partialSum + a,
                            0
                        );
                        return removeLineTypeProps === false && sum > 0 ? (
                            <StatusChip
                                key={i}
                                text={item.label}
                                indicatorColor={item.boxColor}
                            />
                        ) : (
                            ''
                        );
                    })}
                </LegendsWrapper>
            </ChartHeader>
            <ChartHeader>
                <Label sxOverrides={LabelStyle}>{breadCum}</Label>
            </ChartHeader>
            <Chart
                type="bar"
                options={{
                    responsive: true,
                    elements: {
                        line: {
                            borderJoinStyle: 'round'
                        }
                    },
                    scales: {
                        y: {
                            stacked: true,
                            ticks: {
                                maxTicksLimit: 5,
                                callback: function (value: number | string) {
                                    return `${
                                        Number(value) > 0 ? `${value}` : ''
                                    }`;
                                }
                            }
                        },
                        x: {
                            stacked: true,
                            ticks: {
                                callback: function (value: any) {
                                    const label = this.getLabelForValue(value);
                                    const parts = label.split('\n');
                                    const dateLabel = parts[0];
                                    const totalLabel = data.totalBudget[value];

                                    return [dateLabel, totalLabel];
                                },
                                padding: 10,
                                autoSkip: false,
                                maxRotation: 0,
                                font: {
                                    size: 11,
                                    family: 'Inter',
                                    style: 'normal',
                                    weight: 'normal'
                                },
                                color: function () {
                                    return theme.color.goldenColor;
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top' as const,
                            align: 'center',
                            fullSize: false,
                            rtl: false,
                            labels: {
                                usePointStyle: true,
                                padding: 10,
                                boxHeight: 10,
                                boxWidth: 10,
                                pointStyle: 'circle',
                                font: {
                                    size: 12
                                },
                                color: theme.color.white,
                                borderRadius: 4
                            }
                        },
                        title: {
                            display: false,
                            text: title,
                            position: 'top',
                            align: 'start',
                            fullSize: false,
                            font: {
                                size: 16
                            },
                            color: theme.color.white
                        },
                        tooltip: {
                            callbacks: {
                                label: function (
                                    tooltipItem: TooltipItem<'bar'>
                                ) {
                                    const dataset = data.datasets[
                                        tooltipItem.datasetIndex
                                    ] as ChartDataType;
                                    let label = dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (!dataset.isTime) {
                                        label += '$' + tooltipItem.raw; // `raw` gives the actual value of the data point
                                    } else {
                                        label += tooltipItem.raw + 'h';
                                    }

                                    // Adding hours to tooltip label
                                    if (
                                        !dataset.isTime &&
                                        dataset.tooltips &&
                                        dataset.tooltips[tooltipItem.dataIndex]
                                    ) {
                                        label +=
                                            ' - ' +
                                            dataset.tooltips[
                                                tooltipItem.dataIndex
                                            ] +
                                            ' hours';
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }}
                height="50px"
                data={data}
            />
        </Container>
    );
};
