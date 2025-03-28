import { SelectChangeEvent } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import Dropdown from 'src/shared/DropDown';
import theme from 'src/theme';
import { Repository } from 'src/types/client';

interface Props {
    repositories: Repository[] | null;
    setSelectedRepoId: (id: number) => void;
    initialRepoId?: number;
    disabled?: boolean;
}

const RepositoryPicker: FunctionComponent<Props> = ({
    repositories,
    setSelectedRepoId,
    initialRepoId,
    disabled
}: Props) => {
    const [repositorySelected, setRepositorySelected] = useState<number>(-1);

    const handleRepositoryChange = (event: SelectChangeEvent) => {
        const name = event.target.value;
        var index = (repositories || []).findIndex((r) => r.name === name);
        setRepositorySelected(index);
        setSelectedRepoId(repositories ? repositories[index].id : -1);
    };
    const options = (repositories || [{ name: 'Select Repository' }]).map(
        (r) => {
            return {
                value: r.name,
                title: r.name,
                backgroundColor: theme.color.darkBlue,
                color: theme.color.white70
            };
        }
    );

    let selectedValue = '';
    if (repositories) {
        if (repositorySelected > -1) {
            selectedValue = repositories[repositorySelected].name;
        } else if (initialRepoId) {
            const repo = (repositories || []).find(
                (r) => r.id === initialRepoId
            );
            if (repo) {
                selectedValue = repo.name;
            }
        }
    }

    return (
        <Dropdown
            value={selectedValue}
            handleChange={handleRepositoryChange}
            options={options}
            disabled={disabled}
        />
    );
};

export default RepositoryPicker;
