import { FunctionComponent } from 'react';
import { getChartReviewsData } from '../../../../utils/reviews';
import { StackedBar } from 'src/shared/Charts/StackedBar';
import { IProjectBudgetReview } from 'src/types/projects';

type Props = { data: IProjectBudgetReview[] | null };

const WorkTime: FunctionComponent<Props> = ({ data }: Props) => {
    const budgetReviews: IProjectBudgetReview[] = data || [];

    return (
        <StackedBar
            title={''}
            data={getChartReviewsData(budgetReviews, true)}
            breadCum="Time (hours)"
            description={``}
        />
    );
};

export default WorkTime;
