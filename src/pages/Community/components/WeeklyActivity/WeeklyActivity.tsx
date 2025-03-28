import { FunctionComponent, useEffect, useState, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { Loader } from '../../../../shared';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import {
    getAllActivities,
    getAllDailyActivities
} from '../../../../redux/weekly-activities/service';
import { VerticalBar, alignLegend } from 'src/shared/Charts/VerticalBar';
import {
    getAllActivitiesFromState,
    getAllDailyActivitiesFromState,
    getIsLoading
} from '../../../../redux/weekly-activities/selectors';
import {
    WeeklyActivity as Wactivity,
    DailyActivity
} from 'src/types/weeklyActivities';
import {
    getChartDataWeekly,
    getChartDataDaily
} from '../../../../utils/weeklyActivities';

export type Props = Record<string, never>;

const WeeklyActivity: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const [isWeekly, setIsWeekly] = useState(true);
    const [dailyDataLabel, setDailyDataLabel] = useState('November, 11');

    const activities: Wactivity[] = useSelector(getAllActivitiesFromState);
    const dailyActivities: DailyActivity[] = useSelector(
        getAllDailyActivitiesFromState
    );
    const isLoading: boolean = useSelector(getIsLoading);

    const fetchAllActivities = useCallback(async () => {
        await dispatch(getAllActivities());
        await dispatch(getAllDailyActivities());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAllActivities);
    }, [dispatch, fetchAllActivities]);

    const handleDayDataClick = (label: string, _barIndex: Number) => {
        setIsWeekly(false);
        const date = new Date(label),
            dateString = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        setDailyDataLabel(dateString);
    };

    const handleBackButtonClick = () => {
        setIsWeekly(true);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {isWeekly && (
                        <VerticalBar
                            title={'Weekly availability'}
                            data={getChartDataWeekly(activities)}
                            breadCum="# of available contributors"
                            onClickBarItem={handleDayDataClick}
                            showChips={false}
                            // heighChart="130px"
                            // onHover={onHoverVerticalBar}
                        />
                    )}
                    {!isWeekly && (
                        <VerticalBar
                            title={dailyDataLabel}
                            data={getChartDataDaily(
                                dailyDataLabel,
                                dailyActivities
                            )}
                            breadCum="# of available contributors"
                            backButton={true}
                            alignLegends={alignLegend.end}
                            onBackBttonClick={handleBackButtonClick}
                            // heighChart="130px"
                            // onHover={onHoverVerticalBar}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default WeeklyActivity;
