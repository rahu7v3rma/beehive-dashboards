import { FC } from 'react';
import { QuestSchema } from 'src/types/quests';
import { Container } from './styled';
import { Attribute } from '../WorkOverview/styled';
import ReviewButton from 'src/pages/Quest/Review/components/ReviewButton';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'src/types/navigation';

interface ReviewWorkProps {
    quest: QuestSchema;
}

const ReviewWork: FC<ReviewWorkProps> = ({ quest }) => {
    const navigate = useNavigate();

    const handleReview = () => {
        navigate(
            `${RoutesEnum.QUEST_REVIEW.replace(':id', quest.id.toString())}`
        );
    };

    return (
        <Container>
            <Attribute>
                <label>Status</label>
                <span>Ready For Review</span>
            </Attribute>
            <Attribute>
                <ReviewButton
                    onClick={handleReview}
                    styleType="yellow"
                    width="120px"
                    label="Review Now"
                />
            </Attribute>
        </Container>
    );
};

export default ReviewWork;
