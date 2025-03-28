import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import Pill from '../Pill';
import Label from '../Label/index';
import {
    AddSkillChip,
    LabelStyle,
    StyledAddCircleOutlineIcon,
    Container,
    errorLabelSx,
    saveButtonStyles
} from './styled';
import StyledButtonWithIcon from 'src/shared/StyledButtonWithIcon';
import EditIcon from '@mui/icons-material/Edit';
import DropDownSelection from '../DropDownSelection';

export interface Props {
    availableSkills: string[];
    initialSelectedSkills?: string[];
    linkTitle?: string;
    onSave?: (skills: string[]) => void;
    error?: string;
}

const Skills: FunctionComponent<Props> = ({
    availableSkills,
    initialSelectedSkills,
    linkTitle = 'Add a new skill',
    onSave,
    error
}) => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>(
        initialSelectedSkills || []
    );
    const [isAddSkills, setAddSkills] = useState<boolean>(false);
    const [skillEdit, setSkillEdit] = useState<boolean>(false);

    const selectedPill = useCallback(
        (item: any) => {
            if (isAddSkills) {
                const _selectedSkills = selectedSkills.filter(
                    (x) => x !== item
                );
                setSelectedSkills(_selectedSkills);
                onSave && onSave(_selectedSkills);
            }
        },
        [isAddSkills, selectedSkills, onSave]
    );

    const handleSkillAdd = useCallback(() => {
        setSkillEdit(true);
    }, []);

    const dropDownSelected = useCallback(
        (value: string) => {
            const _selectedSkills = [...selectedSkills, value];
            setSelectedSkills(_selectedSkills);
            setSkillEdit(false);
            onSave && onSave(_selectedSkills);
        },
        [selectedSkills, onSave]
    );

    useEffect(() => {
        if (initialSelectedSkills) {
            setSelectedSkills(initialSelectedSkills);
        }
    }, [initialSelectedSkills]);

    return (
        <Container>
            <Label key={isAddSkills + ''} sxOverrides={LabelStyle}>
                Skills
                {isAddSkills ? (
                    <Label
                        onClick={() => {
                            setAddSkills(false);
                        }}
                        sxOverrides={saveButtonStyles}
                    >
                        Save
                    </Label>
                ) : (
                    <StyledButtonWithIcon onClick={() => setAddSkills(true)}>
                        <EditIcon />
                    </StyledButtonWithIcon>
                )}
                {error && <Label sxOverrides={errorLabelSx}>{error}</Label>}
            </Label>
            {selectedSkills.map((label: string, i: number) => {
                return (
                    <div key={i}>
                        <Pill
                            index={i}
                            text={label}
                            mode={isAddSkills}
                            selectedPill={selectedPill}
                        />
                    </div>
                );
            })}
            {isAddSkills &&
                (!skillEdit ? (
                    <AddSkillChip
                        label={linkTitle}
                        avatar={<StyledAddCircleOutlineIcon />}
                        clickable
                        onClick={handleSkillAdd}
                    />
                ) : (
                    <DropDownSelection
                        handleSelect={dropDownSelected}
                        initialValue={null}
                        possibleValues={
                            availableSkills.length > 0
                                ? availableSkills.filter(
                                      (s) => !selectedSkills.includes(s)
                                  )
                                : ['loading']
                        }
                    ></DropDownSelection>
                ))}
        </Container>
    );
};

export default Skills;
