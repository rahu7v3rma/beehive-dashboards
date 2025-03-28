import { FunctionComponent } from 'react';
import { LoaderWrapper } from './styled';
import CircularProgress from '@mui/material/CircularProgress';

export type Props = {};

const Loader: FunctionComponent<Props> = () => {
    return (
        <LoaderWrapper>
            <CircularProgress size={20} />
        </LoaderWrapper>
    );
};

export default Loader;
