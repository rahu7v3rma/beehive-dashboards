import { WeeklyActivity, DailyActivity } from 'src/types/weeklyActivities';
import theme from 'src/theme';

export const getChartDataWeekly = (data: WeeklyActivity[]) => {
    const labels: string[] = [];
    const values: number[] = [];

    data.forEach((item: WeeklyActivity) => {
        const { date, value } = item;
        values.push(value);
        labels.push(date);
    });

    return {
        labels,
        datasets: [
            {
                label: '',
                data: values,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightningYellow);
                    gradient.addColorStop(1, theme.color.pirateGold);
                    return gradient;
                },
                boxColor: theme.gradients.goldenYellow,
                barThickness: 40
            }
        ]
    };
};

export const getChartDataDaily = (
    datasetLabelDaily: String,
    data: DailyActivity[]
) => {
    const labels: string[] = [];
    const dataDaily: number[] = [];

    data.forEach((item: DailyActivity) => {
        const { time, dailyData } = item;
        dataDaily.push(dailyData);
        labels.push(time);
    });

    return {
        labels,
        datasets: [
            {
                label: `${datasetLabelDaily}`,
                data: dataDaily,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightningYellow);
                    gradient.addColorStop(1, theme.color.pirateGold);
                    return gradient;
                },
                boxColor: `linear-gradient(105.23deg, ${theme.color.lightningYellow} 0%, ${theme.color.pirateGold} 100%);`
            }
        ]
    };
};
