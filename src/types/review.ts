export interface IBudget {
    x: number;
    y: number;
}
export interface IReviews {
    date: string;
    aws: number;
    core_team: number;
    contributors: number;
    tech_leads: number;
    total_Budget: string;
    budgetCurveData: IBudget;
}
