import theme from 'src/theme';
import { IProjectActivity } from 'src/types/projects';

export const getChartData = (data: IProjectActivity[]) => {
    const workItemsSolved: number[] = [];
    const tasksCompleted: number[] = [];
    const tasksDelegated: number[] = [];
    const workItemsReviewed: number[] = [];
    const labels: string[] = [];

    data.forEach((item: IProjectActivity) => {
        workItemsSolved.push(item.workItemsSolved);
        tasksCompleted.push(item.tasksCompleted);
        tasksDelegated.push(item.tasksDelegated);
        workItemsReviewed.push(item.workItemsReviewed);
        labels.push(item.date);
    });

    return {
        labels,
        datasets: [
            {
                label: 'Work items solved',
                data: workItemsSolved,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightningYellow);
                    gradient.addColorStop(1, theme.color.pirateGold);
                    return gradient;
                },
                boxColor: `linear-gradient(105.23deg, ${theme.color.lightningYellow} 0%, ${theme.color.pirateGold} 100%);`,
                categoryPercentage: 0.7,
                barPercentage: 1.0
            },
            {
                label: 'Tasks completed',
                data: tasksCompleted,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightningYellowRgba);
                    gradient.addColorStop(1, theme.color.pirateGoldRgba);
                    return gradient;
                },
                boxColor: `linear-gradient(105.23deg, ${theme.color.lightningYellowRgba} 0%, ${theme.color.pirateGoldRgba} 100%);`,
                categoryPercentage: 0.7,
                barPercentage: 1.0
            },
            {
                label: 'Tasks delegated',
                data: tasksDelegated,
                backgroundColor: theme.color.white70,
                boxColor: theme.color.white70,
                categoryPercentage: 0.7,
                barPercentage: 1.0
            },
            {
                label: 'Work items reviewed',
                data: workItemsReviewed,
                backgroundColor: theme.color.white50,
                boxColor: theme.color.white50,
                categoryPercentage: 0.7,
                barPercentage: 1.0
            }
        ]
    };
};
