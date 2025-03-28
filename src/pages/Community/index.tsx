import { FunctionComponent, useCallback, useEffect } from 'react';
import { Navbar } from '../../shared';
import CommunityContributors from './CommunityContributors';
import CommunityStats from './components/CommunityStats';
import SkillsBreakdown from './components/SkillsBreakdown';
import WeeklyActivity from './components/WeeklyActivity';
import { SkillsBox, WeeklyStyle } from './styled';
import { useAppDispatch } from 'src/hooks';
import {
    getContributorsBreakdown,
    getSkillsBreakdown
} from 'src/redux/community/service';
import { useSelector } from 'react-redux';
import {
    getContributorsBreakdownFromState,
    getSkillsBreakdownFromState
} from 'src/redux/community/selectors';

type Props = Record<string, never>;

const CommunityBoard: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();

    const skillsBreakdown = useSelector(getSkillsBreakdownFromState);
    const contributorsBreakdown = useSelector(
        getContributorsBreakdownFromState
    );

    const fetchSkills = useCallback(async () => {
        await dispatch(getSkillsBreakdown());
    }, [dispatch]);

    const fetchContributors = useCallback(async () => {
        await dispatch(getContributorsBreakdown());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchSkills);
        dispatch(fetchContributors);
    }, [dispatch, fetchSkills, fetchContributors]);

    return (
        <Navbar>
            <SkillsBox>
                <CommunityStats />
                <SkillsBreakdown skills={skillsBreakdown} />
            </SkillsBox>
            <WeeklyStyle>
                <WeeklyActivity />
            </WeeklyStyle>
            <CommunityContributors contributors={contributorsBreakdown} />
        </Navbar>
    );
};

export default CommunityBoard;
