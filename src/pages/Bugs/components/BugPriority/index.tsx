import { Dropdown2 } from 'src/shared';
import color from 'src/theme/color';

export type Props = {
    priority: number;
    onChange: (priority: number) => void;
};

const options = ['Low', 'Medium', 'High', 'Critical'];
const colors = [
    color.strongYellow,
    color.softOrange,
    color.moderateRed,
    color.strongRed
];

const BugPriority = ({ priority, onChange }: Props) => {
    return (
        <Dropdown2
            options={options}
            width={115}
            value={options[priority]}
            height={30}
            iconColor="#fff"
            onChange={(val) => {
                onChange(options.indexOf(val.target.value));
            }}
            backgroundColor={colors[priority]}
        />
    );
};

export default BugPriority;
