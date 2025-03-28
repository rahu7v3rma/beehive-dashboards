import { FunctionComponent, useState } from 'react';
import { TaskClassification } from 'src/types/delegate';
import Dropdown from 'src/shared/DropDown';
import { Wrapper } from './styled';
import theme from 'src/theme';
import { SelectChangeEvent } from '@mui/material';

interface Props {
    handleTaskClassificationChanged: (taskClassification: string) => void;
    initialTaskClassification: string | null;
}

const TaskClassificationPicker: FunctionComponent<Props> = ({
    initialTaskClassification,
    handleTaskClassificationChanged
}: Props) => {
    const [taskClassificationSelected, setTaskClassificationSelected] =
        useState<string | null>(initialTaskClassification);

    const possibleClassifications = Object.values(TaskClassification);

    const handleChange = (event: SelectChangeEvent) => {
        const taskClassification = event.target.value;
        setTaskClassificationSelected(taskClassification);
        handleTaskClassificationChanged(taskClassification);
    };

    const options = possibleClassifications.map((c) => {
        return {
            value: c,
            title: c,
            backgroundColor: theme.color.darkBlue,
            color: theme.color.white70
        };
    });

    return (
        <Wrapper>
            <Dropdown
                value={
                    taskClassificationSelected ||
                    initialTaskClassification ||
                    'Other'
                }
                handleChange={handleChange}
                options={options}
            />
        </Wrapper>
    );
};

export default TaskClassificationPicker;
