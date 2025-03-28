// import { FunctionComponent, useCallback, useEffect } from 'react';
import { FunctionComponent } from 'react';
// import { Label, Loader, Navbar } from 'src/shared';
import { Label, Navbar } from 'src/shared';
import { RootBox } from './styled';
// import DelayedTask from '../../shared/DelayedTask';
// import { useSelector } from 'react-redux';
// import {
//     getDelayedTaskFromState,
//     getIsLoading
// } from 'src/redux/project-tasks/selectors';
// import { useAppDispatch } from 'src/hooks';
// import { getDelayedWork } from 'src/redux/project-tasks/service';
import { Lables } from 'src/constants/labels';
import {
    HistoryText,
    HistoryTextAlign,
    labelStyle
} from '../ProjectDashboard/styled';
// import moment from 'moment';
// import { DateTimeFormat } from 'src/utils/delayedWork';

type Props = Record<string, never>;

const TechLead: FunctionComponent<Props> = ({}: Props) => {
    // const dispatch = useAppDispatch();
    // const delayedTask = useSelector(getDelayedTaskFromState);
    // const isLoading = useSelector(getIsLoading);

    // const fetchAllDelayedTasks = useCallback(async () => {
    //     await dispatch(getDelayedWork());
    // }, [dispatch]);

    // useEffect(() => {
    //     dispatch(fetchAllDelayedTasks);
    // }, [dispatch, fetchAllDelayedTasks]);

    return (
        <Navbar>
            <RootBox>
                <HistoryTextAlign>
                    <Label sxOverrides={HistoryText}>
                        {Lables.delayedWorkTitle}
                    </Label>
                    <Label sxOverrides={labelStyle}>
                        {Lables.delayedWorkDesc}
                    </Label>
                </HistoryTextAlign>
                {/* {isLoading ? (
                    <Loader />
                ) : (
                    <DelayedTask delayedTask={delayedTask} />
                )} */}
            </RootBox>
        </Navbar>
    );
};

export default TechLead;
