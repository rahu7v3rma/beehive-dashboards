import { FunctionComponent } from 'react';
import { LoaderWrapper } from './styled';
import CircularProgress from '@mui/material/CircularProgress';

export type Props = {};

const LoaderSmall: FunctionComponent<Props> = () => {
    return (
        <LoaderWrapper>
            <CircularProgress size={15} />
        </LoaderWrapper>
    );
};

export default LoaderSmall;
