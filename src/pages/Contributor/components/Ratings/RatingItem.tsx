import { Rating } from '@mui/material';
import { Label } from 'src/shared';
import { IContributorRating } from 'src/types/contributors';
import S, { ParentBox, CountBox } from './styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { useEffect } from 'react';
import { StarIconGradient } from './components';
import { MakeHalfStarsSemiTransparent } from './helpers';

export interface RatingItemProps {
    rating: IContributorRating;
}

const RatingItem = (props: RatingItemProps) => {
    const { rating } = props;

    useEffect(() => {
        MakeHalfStarsSemiTransparent();
    }, []);

    return (
        <ParentBox>
            <Label sxOverrides={S.label}>{rating.label}</Label>
            <Rating
                readOnly
                style={S.stars}
                value={rating.value}
                precision={0.5}
                icon={<StarIcon sx={S.starIcon} />}
                emptyIcon={<StarBorderIcon sx={S.starBorderIcon} />}
            />
            <StarIconGradient />
            <Label sxOverrides={S.value}>{rating.value}</Label>
            <CountBox>
                <Label sxOverrides={S.count}>(</Label>
                <Label sxOverrides={{ ...S.count, ...S.underline }}>
                    {rating.count} rating{rating.count > 1 && 's'}
                </Label>
                <Label sxOverrides={S.count}>)</Label>
            </CountBox>
        </ParentBox>
    );
};
export default RatingItem;
