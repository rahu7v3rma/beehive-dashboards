import { FunctionComponent } from 'react';
import {
    StyledBox,
    RowBox,
    MarginBox,
    ReviewsText,
    RatingText,
    ReviewsTextWrapper
} from './styled';
import { Rating } from '@mui/material';
import { Label } from 'src/shared';
import { Star, StarOutline } from '@mui/icons-material';

export interface Props {
    value: number;
}

const RatingView: FunctionComponent<Props> = ({ value }: Props) => (
    <StyledBox>
        <RowBox>
            <Rating
                icon={<Star style={{ width: '10px', height: '10px' }} />}
                emptyIcon={
                    <StarOutline style={{ width: '10px', height: '10px' }} />
                }
                size="small"
                value={value}
                readOnly
                precision={0.1}
            />
            <MarginBox />
            <Label sxOverrides={RatingText}>{value.toString()}</Label>
        </RowBox>
        <ReviewsTextWrapper>
            (<Label sxOverrides={ReviewsText}>2 reviews</Label>)
        </ReviewsTextWrapper>
    </StyledBox>
);

export default RatingView;
