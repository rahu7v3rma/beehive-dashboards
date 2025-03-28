import {
    getConstributorsBreakdown,
    getSkillsBreakdown,
    mock
} from '../apiCaller';
import {
    CONTRIBUTORS_BREAKDOWN,
    SKILLS_BREAKDOWN
} from 'src/constants/community';

export const fetchSkillsBreakdown = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock ? SKILLS_BREAKDOWN : getSkillsBreakdown());
        }, 300);
    });
};

export const fetchConstributorsBreakdown = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                mock ? CONTRIBUTORS_BREAKDOWN : getConstributorsBreakdown()
            );
        }, 300);
    });
};
