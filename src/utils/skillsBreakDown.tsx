import theme from 'src/theme';
import { ISkillBreakdown } from 'src/types/community';

export const getSkillsData = (data: ISkillBreakdown[]) => {
    const labels: string[] = [];
    const values: number[] = [];
    const sorted = [...data].sort((a, b) => b.count - a.count);
    sorted.forEach((item: ISkillBreakdown) => {
        const { name, count } = item;
        labels.push(name);
        values.push(count);
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
