import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Label, Loader } from '../../../../shared';
import { getIsLoading } from '../../../../redux/projects/selectors';
import { DoughnutChart } from 'src/shared/Charts/Doughnut';
import {
    ChartWrapper,
    Container,
    LegendContainer,
    LegendContent,
    LegendDot,
    LegendWrapper
} from '../../styled';
import { labels } from 'src/constants/labels';
import theme from 'src/theme';
import { LabelOverrides } from './styled';
import { IProjectData, ITaskTrelloLink } from 'src/types/projects';

type Props = {
    projectData: IProjectData | null;
    setTrelloLinks: (links: ITaskTrelloLink[] | null) => void;
};

export type CProps = {
    color?: string;
};

const TaskQueue: FunctionComponent<Props> = ({
    projectData,
    setTrelloLinks
}: Props) => {
    const isLoading: boolean = useSelector(getIsLoading);

    const data: number[] = [
        projectData?.queue.pending || 0,
        projectData?.queue.inReview || 0,
        projectData?.queue.inProgress || 0
    ];

    const links = [
        projectData?.queue.pendingTrelloLinks,
        projectData?.queue.inReviewTrelloLinks,
        projectData?.queue.inProgressTrelloLinks
    ];

    const backgroundColor: string[] = [
        'rgba(250, 187, 24, 0.4)',
        'rgba(250, 187, 24, 0.6)',
        '#FABB18'
    ];

    return isLoading ? (
        <Loader />
    ) : (
        <Container>
            <Label
                color={theme.color.white}
                fontFamily={'Inter'}
                sxOverrides={LabelOverrides}
            >
                Queue
            </Label>
            <ChartWrapper>
                <DoughnutChart data={data} backgroundColor={backgroundColor} />
            </ChartWrapper>
            <LegendContainer>
                {labels.map((item, index) => {
                    return (
                        <LegendWrapper
                            key={index}
                            onClick={() => {
                                setTrelloLinks(links[index] || null);
                            }}
                        >
                            <LegendContent>
                                {item} ({data[index]})
                                <LegendDot color={backgroundColor[index]} />
                            </LegendContent>
                        </LegendWrapper>
                    );
                })}
            </LegendContainer>
        </Container>
    );
};

export default TaskQueue;
