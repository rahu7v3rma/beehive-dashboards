import { FunctionComponent, useEffect, useState } from 'react';
import Pill from '../Pill';
import { Container } from './styled';
import Label from '../Label/index';
import { AnchorLink } from './styled';
import { LabelStyle } from './styled';
import { SkillItems } from 'src/constants/skills';

export interface Props {
    availableSkills: string[];
    linkTitle?: string;
}

const Skills: FunctionComponent<Props> = ({
    availableSkills,
    linkTitle = 'Add a skill'
}) => {
    const [selectedSkills, setSelectedSkills] =
        useState<string[]>(availableSkills);
    const [allSkills, setAllSkills] = useState<string[]>(SkillItems);
    const [isAddSkills, setAddSkills] = useState<boolean>(false);

    useEffect(() => {
        const allSkillsFiltered = allSkills.filter(
            (all) => !selectedSkills.some((selected) => selected === all)
        );
        setAllSkills(allSkillsFiltered);
    }, [allSkills, selectedSkills]);

    const changeViewMode = () => {
        setAddSkills(!isAddSkills);
    };

    const selectedPill = (item: any) => {
        if (isAddSkills) {
            const selectedItem = allSkills?.filter((skill) => skill === item);
            let filteredSkills = allSkills.filter((it) => it !== item);
            setAllSkills(filteredSkills);
            selectedSkills.push(selectedItem[0]);
        } else {
            const seletedItem = selectedSkills?.filter(
                (skill) => skill === item
            );
            let filteredSkills = selectedSkills.filter((it) => it !== item);
            setSelectedSkills(filteredSkills);
            allSkills.push(seletedItem[0]);
        }
    };

    return (
        <Container>
            <Label sxOverrides={LabelStyle}>
                Skills
                <AnchorLink onClick={changeViewMode}>
                    {isAddSkills ? 'Save' : linkTitle}
                </AnchorLink>
            </Label>
            {isAddSkills
                ? allSkills.map((item: string, i) => {
                      return (
                          <div key={i}>
                              <Pill
                                  index={i}
                                  text={item}
                                  mode={!isAddSkills}
                                  selectedPill={selectedPill}
                              />
                          </div>
                      );
                  })
                : selectedSkills.map((item: string, i) => {
                      return (
                          <div key={i}>
                              <Pill
                                  index={i}
                                  text={item}
                                  mode={!isAddSkills}
                                  selectedPill={selectedPill}
                              />
                          </div>
                      );
                  })}
        </Container>
    );
};

export default Skills;
