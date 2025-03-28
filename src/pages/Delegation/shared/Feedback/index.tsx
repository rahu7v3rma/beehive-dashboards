import { Label } from 'src/shared';
import {
    FeedbackSection,
    FeedbackText,
    FeedbacksContainer,
    Highlight
} from './styled';

interface Props {
    analysis: string[] | null;
}

const Feedback = ({ analysis }: Props) => {
    return (
        <FeedbackSection>
            <FeedbacksContainer>
                {analysis &&
                    analysis.map((feedback, index) => {
                        return (
                            <Label key={index} sxOverrides={FeedbackText}>
                                <Highlight>{`${index + 1}. `}</Highlight>
                                {feedback}
                            </Label>
                        );
                    })}
            </FeedbacksContainer>
        </FeedbackSection>
    );
};

export default Feedback;
