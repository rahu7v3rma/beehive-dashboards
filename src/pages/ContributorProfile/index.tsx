import { FunctionComponent } from 'react';
import { Navbar } from 'src/shared';
import ContributorInfos from '../Components/ContributorInfos';
import SkillsRating from '../Contributor/components/Ratings';
import { SkillsRatingWrapper } from './styled';

type Props = Record<string, never>;

const ContributorProfile: FunctionComponent<Props> = ({}: Props) => {
    return (
        <Navbar>
            <ContributorInfos />
            <SkillsRatingWrapper>
                <SkillsRating />
            </SkillsRatingWrapper>
        </Navbar>
    );
};

export default ContributorProfile;
