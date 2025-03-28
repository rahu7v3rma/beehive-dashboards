import { FunctionComponent } from 'react';
import { Label, SkillsV2 } from 'src/shared';
import {
    MetricsContainer,
    SkillsBox,
    SkillsWrapper,
    PickerBox,
    pickerLabel
} from './styled';
import TaskClassificationPicker from '../TaskClassificationPicker';

interface Props {
    handleTaskClassificationChange: (TaskClassification: string) => void;
    handleSkillsChange: (skills: string[]) => void;
    initialTaskClassification: string | null;
    availableSkills: string[];
    initialSelectedSkills: string[];
}

const Settings: FunctionComponent<Props> = ({
    initialSelectedSkills,
    availableSkills,
    handleSkillsChange,
    handleTaskClassificationChange,
    initialTaskClassification
}: Props) => {
    return (
        <>
            <SkillsBox>
                <SkillsWrapper>
                    <SkillsV2
                        initialSelectedSkills={initialSelectedSkills}
                        availableSkills={availableSkills}
                        onSave={handleSkillsChange}
                    />
                </SkillsWrapper>
                <MetricsContainer>
                    <PickerBox>
                        <Label sxOverrides={pickerLabel}>Task Type</Label>
                        <TaskClassificationPicker
                            handleTaskClassificationChanged={
                                handleTaskClassificationChange
                            }
                            initialTaskClassification={
                                initialTaskClassification
                            }
                        />
                    </PickerBox>
                </MetricsContainer>
            </SkillsBox>
        </>
    );
};

export default Settings;
