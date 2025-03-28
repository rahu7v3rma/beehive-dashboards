import { FC, useState, useEffect, useCallback } from 'react';
import { RatingBox } from './styled';
import { Star, StarOutline } from '@mui/icons-material';
import { Title, Subtitle } from 'src/shared';
import color from 'src/theme/color';
import { Rating as MuiRating } from '@mui/material';
import { Rating } from 'src/types/rating';
import { RatingSubject } from 'src/enums/rating';

interface RatingQuestion {
    subject: RatingSubject;
    text: string;
}

interface RatingItemProps {
    question: string;
    onChange: (event: React.ChangeEvent<{}>, value: number | null) => void;
}

const RatingItem: FC<RatingItemProps> = ({ question, onChange }) => (
    <RatingBox>
        <Subtitle>{question}</Subtitle>
        <MuiRating
            icon={<Star />}
            emptyIcon={<StarOutline style={{ color: color.white50 }} />}
            onChange={onChange}
        />
    </RatingBox>
);

interface SharedRatingProps {
    questions: RatingQuestion[];
    onRatingsComplete: (ratings: Rating[]) => void;
    title?: string;
}

const SharedRating: FC<SharedRatingProps> = ({
    questions,
    onRatingsComplete,
    title = 'Rating'
}) => {
    const [ratings, setRatings] = useState<Rating[]>([]);

    const handleRatingChange = useCallback(
        (rating: Rating) => {
            setRatings((prevRatings) => {
                const existingRatingIndex = prevRatings.findIndex(
                    (r) => r.subject === rating.subject
                );

                if (existingRatingIndex !== -1) {
                    const updatedRatings = [...prevRatings];
                    updatedRatings[existingRatingIndex] = rating;
                    return updatedRatings;
                }

                return [...prevRatings, rating];
            });
        },
        [setRatings]
    );

    useEffect(() => {
        const allQuestionsRated = questions.every((question) =>
            ratings.some((rating) => rating.subject === question.subject)
        );

        if (allQuestionsRated) {
            onRatingsComplete(ratings);
        }
    }, [ratings, questions, onRatingsComplete]);

    return (
        <div style={{ textAlign: 'center' }}>
            <Title>{title}</Title>
            {questions.map((question) => (
                <RatingItem
                    key={question.subject}
                    question={question.text}
                    onChange={(event, value) =>
                        handleRatingChange({
                            subject: question.subject,
                            score: value || 0,
                            text: question.text
                        })
                    }
                />
            ))}
        </div>
    );
};

export default SharedRating;
