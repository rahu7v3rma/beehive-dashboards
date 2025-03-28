import { RATINGS } from 'src/constants/ratings';
import { Label } from 'src/shared';
import RatingItem from './RatingItem';
import S, { RootBox } from './styles';

const Ratings = () => {
    return (
        <RootBox>
            <Label sxOverrides={S.title}>Rating</Label>
            <Label sxOverrides={S.subtitle}>Lorem ipsum dolor sit amet</Label>
            {RATINGS.map((item, index) => (
                <RatingItem rating={item} key={index} />
            ))}
        </RootBox>
    );
};

export default Ratings;
