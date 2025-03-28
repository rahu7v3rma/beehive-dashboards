import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { labels } from 'src/constants/labels';

ChartJS.register(ArcElement, Tooltip, Legend);

export type Props = {
    data: number[];
    backgroundColor: string[];
};

export function DoughnutChart({ data, backgroundColor }: Props) {
    return (
        <Doughnut
            data={{
                labels: labels,
                datasets: [
                    {
                        data,
                        backgroundColor,
                        borderWidth: 0
                    }
                ]
            }}
            options={{
                cutout: '70%',
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    },
                    tooltip: { position: 'nearest' }
                },
                responsive: true,
                maintainAspectRatio: false
            }}
        />
    );
}
