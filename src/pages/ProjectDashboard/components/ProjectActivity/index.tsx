import { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { Loader } from '../../../../shared';
import { VerticalBar } from 'src/shared/Charts/VerticalBar';
import { getIsLoading } from '../../../../redux/projects/selectors';
import { getChartData } from '../../../../utils/activities';
import {
    IProjectActivity,
    IProjectData,
    ITaskTrelloLink
} from 'src/types/projects';

type Props = {
    projectData: IProjectData | null;
    setTrelloLinks: (links: ITaskTrelloLink[] | null) => void;
};

const ProjectActivity: FunctionComponent<Props> = ({
    projectData,
    setTrelloLinks
}: Props) => {
    const activities: IProjectActivity[] = projectData?.activities || [];
    const isLoading: boolean = useSelector(getIsLoading);

    const onClickBar = (label: string, barIndex: Number) => {
        var result = projectData?.activities.find((obj) => {
            return obj.date === label;
        });
        var links = null;
        if (result) {
            switch (barIndex) {
                case 0:
                    links = result.workItemsSolvedLinks;
                    break;
                case 1:
                    links = result.tasksCompletedLinks;
                    break;
                case 2:
                    links = result.tasksDelegatedLinks;
                    break;
                case 3:
                    links = result.workItemsReviewedLinks;
                    break;
                default:
                    break;
            }
        }
        setTrelloLinks(links?.length ? links : null);
    };

    const data = getChartData(activities);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <VerticalBar
                    title={'Project activity'}
                    data={data}
                    breadCum="Tasks / work items"
                    onClickBarItem={onClickBar}
                />
            )}
        </>
    );
};

export default ProjectActivity;
