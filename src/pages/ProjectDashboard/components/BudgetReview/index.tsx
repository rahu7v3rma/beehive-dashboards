import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../shared';
import { getIsLoading } from '../../../../redux/projects/selectors';
import { getChartReviewsData } from '../../../../utils/reviews';
import { StackedBar } from 'src/shared/Charts/StackedBar';
import { IProjectBudgetReview, IProjectData } from 'src/types/projects';

type Props = { projectData: IProjectData | null };

const WorkTime: FunctionComponent<Props> = ({ projectData }: Props) => {
    const budgetReviews: IProjectBudgetReview[] =
        projectData?.budgetReviews || [];
    const isLoading: boolean = useSelector(getIsLoading);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <StackedBar
                    title={'Cost'}
                    data={getChartReviewsData(budgetReviews)}
                    breadCum="Costs / $"
                    description={`Monthly breakdown: Contributors data is cross referenced upwork diaries with our work record logs (using tasks project tag).
                            Tech leads / Project Managers, Core Team and Others (e.g QA Contributions) are derived from external Google Form manual logging.`}
                />
            )}
        </>
    );
};

export default WorkTime;
