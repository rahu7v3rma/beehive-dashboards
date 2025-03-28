import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PopularTasks,
    PopularTasksContainer,
    PopularTasksWrapper,
    RawInput,
    TaskContainer,
    TaskWrapper,
    TextTask
} from './styled';
import { Label } from 'src/shared';
import StyledButton from 'src/shared/StyledButton';
import EditIcon from '@mui/icons-material/Edit';
import { TaskTemplate } from 'src/types/delegate';

interface Props {
    templates: TaskTemplate[];
    handleSelectedTemplate: (template: TaskTemplate) => void;
}

const TaskTemplatePicker: FunctionComponent<Props> = ({
    templates,
    handleSelectedTemplate
}: Props) => {
    const [task, setTask] = useState<string>('');
    const navigate = useNavigate();

    const options = (templates || [])
        .map((t) => t.name)
        .filter((t) => t.toLowerCase().includes(task.toLowerCase()));

    return (
        <>
            <TaskWrapper>
                <PopularTasksContainer>
                    <Label sxOverrides={PopularTasks}>Manage templates</Label>
                    <StyledButton
                        onClick={() => navigate('/templates')}
                        height="25px"
                        width="25px"
                    >
                        <EditIcon />
                    </StyledButton>
                </PopularTasksContainer>
                <RawInput
                    id="filled-basic"
                    label="Search templates"
                    variant="filled"
                    value={task}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTask(e.target.value);
                    }}
                />
                <PopularTasksWrapper>
                    {options.map((name: string, idx: number) => (
                        <TaskContainer
                            key={`name ${idx}`}
                            onClick={() => {
                                handleSelectedTemplate(templates[idx]);
                            }}
                        >
                            <Label sxOverrides={TextTask}>{name}</Label>
                        </TaskContainer>
                    ))}
                </PopularTasksWrapper>
            </TaskWrapper>
        </>
    );
};

export default TaskTemplatePicker;
