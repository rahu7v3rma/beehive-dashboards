import React, { FC } from 'react';
import S from './styled';
import { VerticalBar } from 'src/shared/Charts/VerticalBar';
import { getSkillsData } from 'src/utils/skillsBreakDown';
import { ISkillBreakdown } from 'src/types/community';

export type Props = {
    skills: ISkillBreakdown[];
};

const SkillsBreakdown: FC<Props> = (props: Props) => {
    const { skills } = props;
    return (
        <S.Root>
            <VerticalBar
                title={'Skills breakdown'}
                data={getSkillsData(skills)}
                breadCum="# of contributors"
                showChips={false}
            />
        </S.Root>
    );
};

export default SkillsBreakdown;
