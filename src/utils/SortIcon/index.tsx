import { FunctionComponent } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { sortIconStyles } from './styles';

const SortIcon: FunctionComponent<{ sort: string }> = ({ sort }) => {
    if (sort === 'desc') {
        return <ArrowDownwardIcon sx={sortIconStyles} />;
    } else if (sort === 'asc') {
        return <ArrowUpwardIcon sx={sortIconStyles} />;
    } else return <></>;
};

export default SortIcon;
