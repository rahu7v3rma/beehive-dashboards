import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { FunctionComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import { Label } from 'src/shared';
import theme from 'src/theme';
import { ReactComponent as BackIcon } from '../../../assets/icons/back-icon.svg';
import StatusChip from '../../StatusChip';
import {
    BackButton,
    BarBox,
    breadcrumbSX,
    ChartHeader,
    ChartTitle,
    ChartTitleContainer,
    Container,
    LabelDay,
    LabelItem,
    LabelMonth,
    LabelsRowContainer,
    LegendsWrapper
} from './styled';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ChartDataType = {
    label: string;
    data: number[];
    backgroundColor: any;
    boxColor: string;
};

export enum alignLegend {
    start = 'start',
    center = 'center',
    end = 'end'
}

export type Props = {
    data: {
        labels: string[];
        datasets: ChartDataType[];
    };
    title: string;
    breadCum: string;
    onClickBarItem?: (label: string, _barIndex: Number) => void;
    showChips?: boolean;
    backButton?: boolean;
    onBackBttonClick?: () => void;
    alignLegends?: alignLegend;
};

export const VerticalBar: FunctionComponent<Props> = ({
    data,
    title,
    breadCum,
    showChips = true,
    onClickBarItem,
    backButton,
    alignLegends = alignLegend.end,
    onBackBttonClick
}) => {
    return (
        <Container>
            <ChartHeader>
                <ChartTitleContainer>
                    {backButton && (
                        <BackButton onClick={onBackBttonClick}>
                            <BackIcon />
                        </BackButton>
                    )}
                    <ChartTitle>{title}</ChartTitle>
                </ChartTitleContainer>
                {showChips && (
                    <LegendsWrapper alignLegends={alignLegends}>
                        {data.datasets.map((item: ChartDataType, i: number) => {
                            return (
                                <StatusChip
                                    key={i}
                                    text={item.label}
                                    indicatorColor={item.boxColor}
                                />
                            );
                        })}
                    </LegendsWrapper>
                )}
            </ChartHeader>
            <ChartHeader>
                <Label sxOverrides={breadcrumbSX}>{breadCum}</Label>
            </ChartHeader>
            <BarBox horizontal={false} heightChart={''}>
                <Bar
                    options={{
                        onClick: (event, elements) => {
                            if (elements.length > 0 && onClickBarItem) {
                                const barIndex = elements[0].datasetIndex;
                                const index = elements[0].index;
                                const value = data.labels[index];
                                onClickBarItem(value, barIndex);
                            }
                        },
                        responsive: true,
                        scales: {
                            y: {
                                grid: {
                                    color: theme.color.tuna
                                },
                                ticks: {
                                    maxTicksLimit: 5
                                },
                                max: 20
                            },
                            x: {
                                display: false // Hide X axis labels
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
                            }
                        },
                        maintainAspectRatio: false
                    }}
                    data={data}
                />
            </BarBox>
            <LabelsRowContainer>
                {data.labels.map((item, i) => {
                    const label = item.split(',');
                    return (
                        <LabelItem key={i}>
                            {label.length === 2 ? (
                                <>
                                    <LabelDay>{label[0]}</LabelDay>
                                    <LabelMonth>{label[1]}</LabelMonth>
                                </>
                            ) : (
                                <Label
                                    sxOverrides={{
                                        color: theme.color.lightningYellow,
                                        opacity: '50%',
                                        fontFamily: 'Inter',
                                        fontSize: '12px',
                                        fontWeight: 400
                                    }}
                                >
                                    {label[0]}
                                </Label>
                            )}
                        </LabelItem>
                    );
                })}
            </LabelsRowContainer>
        </Container>
    );
};
