import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Title, Subtitle, Card, Skeleton } from 'src/shared';
import {
    getQuest as getQuestSelector,
    getQuestSolution as getQuestSolutionSelector,
    getIsLoading as getIsLoadingSelector
} from 'src/redux/quests/selectors';
import { useSelector } from 'react-redux';
import { color } from 'src/theme/color/color';
import { Container } from './styled';
import Description from '../../../components/Description';
import { QuestSolutionPullRequest } from 'src/types/quests';

interface ReviewSectionProps {}

const ReviewSection: FC<ReviewSectionProps> = () => {
    const quest = useSelector(getQuestSelector);
    const questSolution = useSelector(getQuestSolutionSelector);
    const isLoading = useSelector(getIsLoadingSelector);

    const showSkeleton = isLoading || !quest || !questSolution;

    return (
        <Container>
            <Subtitle>Request Title</Subtitle>
            {showSkeleton ? (
                <Skeleton />
            ) : (
                <Title>{quest?.title || 'Request Title Not Found'}</Title>
            )}
            <Card sx={{ marginTop: '20px' }}>
                <Description
                    label="Relevant PR"
                    description={
                        <div>
                            {showSkeleton ? (
                                <Skeleton width={300} />
                            ) : questSolution?.questSolutionPrs.length > 0 ? (
                                questSolution.questSolutionPrs.map(
                                    (pr: QuestSolutionPullRequest) => (
                                        <Link
                                            key={pr.id}
                                            to={pr.prUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: color.lightningYellow,
                                                display: 'block',
                                                marginBottom: '5px'
                                            }}
                                        >
                                            {pr.prUrl}
                                        </Link>
                                    )
                                )
                            ) : (
                                <span style={{ color: color.white90 }}>
                                    No PRs found
                                </span>
                            )}
                        </div>
                    }
                />
                <Description
                    label="Comments from Beehive"
                    description={
                        <div style={{ color: color.white90 }}>
                            {showSkeleton ? (
                                <Skeleton width={300} />
                            ) : (
                                questSolution?.notes ||
                                'No notes/comments found'
                            )}
                        </div>
                    }
                />
            </Card>
        </Container>
    );
};

export default ReviewSection;
