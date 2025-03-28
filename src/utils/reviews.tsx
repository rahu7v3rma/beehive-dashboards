import theme from 'src/theme';
import { BudgetCategory, IProjectBudgetReview } from 'src/types/projects';

const roundHours = (num: Number | null | undefined) => {
    if (num === null || num === undefined) return 0;
    return Number(num.toFixed(2));
};

const roundBudget = (num: Number | null | undefined) => {
    if (num === null || num === undefined) return 0;
    return Math.ceil(Number(num)).toLocaleString();
};

export const getChartReviewsData = (
    data: IProjectBudgetReview[],
    isTime: boolean = false
) => {
    const _aws: number[] = [];
    const coreTeam: number[] = [];
    const coreTeamHours: number[] = [];
    const techLeads: number[] = [];
    const techLeadHours: number[] = [];
    const _contributors: number[] = [];
    const _contributorHours: number[] = [];
    const other: number[] = [];
    const otherHours: number[] = [];
    const labels: string[] = [];
    const totalBudget: string[] = [];
    const budgetCurve: any[] = [];
    data.slice();
    data.slice()
        .sort((a, b) => a.date.localeCompare(b.date))
        .forEach((item: IProjectBudgetReview) => {
            const { date, budget } = item;
            const aws_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.AWS)?.amount || 0
            );
            _aws.push(Number(aws_budget));
            const core_team_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.CORE_TEAM)
                    ?.amount || 0
            );
            const core_team_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.CORE_TEAM)
                    ?.hours || 0
            );
            coreTeam.push(Number(core_team_budget));
            coreTeamHours.push(core_team_hours);
            const tech_leads_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.TECH_LEAD)
                    ?.amount || 0
            );
            const tech_leads_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.TECH_LEAD)
                    ?.hours || 0
            );
            const project_manager_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.PROJECT_MANAGER)
                    ?.amount || 0
            );
            const project_manager_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.PROJECT_MANAGER)
                    ?.hours || 0
            );
            const combined_tech_pm_team_budget =
                Number(tech_leads_budget) + Number(project_manager_budget);
            const combined_tech_pm_team_hours =
                tech_leads_hours + project_manager_hours;
            techLeads.push(combined_tech_pm_team_budget);
            techLeadHours.push(combined_tech_pm_team_hours);
            const contributors_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.CONTRIBUTOR)
                    ?.amount || 0
            );
            const contributors_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.CONTRIBUTOR)
                    ?.hours || 0
            );
            _contributors.push(Number(contributors_budget));
            _contributorHours.push(contributors_hours);
            const qa_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.QA_CONTRIBUTOR)
                    ?.amount || 0
            );
            const qa_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.QA_CONTRIBUTOR)
                    ?.hours || 0
            );
            const ui_ux_budget = roundBudget(
                budget.find((x) => x.name === BudgetCategory.UI_UX)?.amount || 0
            );
            const ui_ux_hours = roundHours(
                budget.find((x) => x.name === BudgetCategory.UI_UX)?.hours || 0
            );
            const combined_qa_ux_ui_budget =
                Number(qa_budget) + Number(ui_ux_budget);
            const combined_qa_ux_ui_hours = qa_hours + ui_ux_hours;
            other.push(combined_qa_ux_ui_budget);
            otherHours.push(combined_qa_ux_ui_hours);
            const total = isTime
                ? roundHours(
                      core_team_hours +
                          tech_leads_hours +
                          project_manager_hours +
                          contributors_hours +
                          qa_hours +
                          ui_ux_hours
                  )
                : roundBudget(
                      Number(aws_budget) +
                          Number(core_team_budget) +
                          Number(tech_leads_budget) +
                          Number(project_manager_budget) +
                          Number(contributors_budget) +
                          Number(qa_budget) +
                          Number(ui_ux_budget)
                  );
            labels.push(
                `${date}\n${isTime ? '' : '$'}${total}${isTime ? 'h' : ''}`
            );
            totalBudget.push(
                `${isTime ? '' : '$'}${total}${isTime ? 'h' : ''}`
            );
        });
    return {
        labels,
        totalBudget,
        datasets: [
            {
                label: 'Tech leads & PMs',
                data: isTime ? techLeadHours : techLeads,
                tooltips: techLeadHours,
                isTime,
                backgroundColor: theme.color.lightningYellow,
                boxColor: theme.color.lightningYellow,
                order: 2
            },
            {
                label: 'Contributors',
                data: isTime ? _contributorHours : _contributors,
                tooltips: _contributorHours,
                isTime,
                backgroundColor: theme.color.lightningYellowRgba,
                boxColor: theme.color.lightningYellowRgba,
                order: 2
            },
            {
                label: 'Core team',
                data: isTime ? coreTeamHours : coreTeam,
                tooltips: coreTeamHours,
                isTime,
                borderColor: theme.color.white,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightningYellowRgba6);
                    gradient.addColorStop(1, theme.color.pirateGoldRgba);
                    return gradient;
                },
                boxColor: theme.gradients.darkGold,
                order: 2
            },
            {
                label: 'AWS',
                data: _aws,
                isTime,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 105.23);
                    gradient.addColorStop(0, theme.color.lightDimYellowRgba);
                    gradient.addColorStop(1, theme.color.pirateGold);
                    return gradient;
                },
                boxColor: theme.gradients.darkGold,
                order: 2
            },
            {
                label: 'QA & UI/UX',
                data: isTime ? otherHours : other,
                tooltips: otherHours,
                isTime,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 110);
                    gradient.addColorStop(0, theme.color.lightDimYellowRgba);
                    gradient.addColorStop(1, theme.color.pirateGold);
                    return gradient;
                },
                boxColor: theme.gradients.darkGold,
                order: 2
            },
            {
                label: '',
                data: budgetCurve,
                isTime,
                backgroundColor: theme.color.white90,
                boxColor: '',
                type: 'line' as const,
                fill: false,
                borderColor: theme.color.white50,
                borderWidth: 2,
                tension: 0.4,
                order: 1
            }
        ]
    };
};
