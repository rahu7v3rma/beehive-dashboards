import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { Label, Avatar, Loader } from '../../../../shared';
import theme from 'src/theme';
import S from './styled';
import ReactCountryFlag from 'react-country-flag';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import * as service from 'src/redux/project-contributors/service';
import * as selectors from 'src/redux/project-contributors/selectors';
import { Box, CircularProgress, SelectChangeEvent } from '@mui/material';
import Dropdown from 'src/shared/DropDown';

type Props = Record<string, never>;

const status = [
    {
        value: 'active',
        title: 'Active',
        backgroundColor: theme.color.darkMintGreen,
        color: theme.color.brightGreen
    },
    {
        value: 'inactive',
        title: 'Inactive',
        backgroundColor: theme.color.darkBlue,
        color: theme.color.white90
    },
    {
        value: 'unavailable',
        title: 'Unavailable',
        backgroundColor: theme.color.darkMintRed,
        color: theme.color.orangyRed
    }
];

const ContributorDetails: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();

    const contributor = useSelector(selectors.getContributor);
    const { isContributorHourlyRateLoading } = useSelector(
        selectors.rootSelector
    );
    const isLoading = useSelector(selectors.getIsLoading);
    const [statusValue, setStatusValue] = useState('active');

    const [shouldHourlyRateEdit, setHourlyRateEdit] = useState<boolean>(false);
    const [hourlyRate, setHourlyRate] = useState<string>(
        contributor.hourly_rate
    );
    useEffect(() => {
        setHourlyRate(contributor.hourly_rate);
    }, [contributor]);
    const onChangeHourlyRate = (event: ChangeEvent<HTMLInputElement>) => {
        setHourlyRate(event.target.value);
    };

    const handleDelete = () => setHourlyRateEdit(true);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(service.updateContributorHourlyRate(hourlyRate));
            setHourlyRateEdit(false);
        }
    };

    useEffect(() => {
        dispatch(service.getContributor());
    }, [dispatch]);

    const handleChange = (event: SelectChangeEvent) => {
        setStatusValue(event.target.value);
    };

    return (
        <S.Container>
            {isLoading ? (
                <Loader />
            ) : (
                <S.Root>
                    <Box>
                        <Avatar
                            background={theme.color.darkBlue}
                            size="110px"
                            image={contributor?.image}
                        />
                    </Box>
                    <S.Parent>
                        <S.Child style={S.child1Styles}>
                            <Label sxOverrides={S.name}>
                                {contributor.name}
                            </Label>
                            <S.CountryBox>
                                <ReactCountryFlag
                                    countryCode={contributor.country_code}
                                    svg
                                />
                                <Label sxOverrides={S.countryName}>
                                    {contributor.country}
                                </Label>
                                <Label sxOverrides={S.countryTime}>
                                    ({contributor.local_time} local time)
                                </Label>
                            </S.CountryBox>
                            <S.RatingsBox>
                                <S.Rating
                                    name="simple-controlled"
                                    value={contributor.rating}
                                    size="small"
                                    precision={0.5}
                                    emptyIcon={<S.StarBorderIcon />}
                                    icon={<S.StarIcon />}
                                />
                                <Label sxOverrides={S.ratingText}>
                                    {contributor.rating}
                                </Label>
                                <Label sxOverrides={S.reviewsText}>
                                    ({contributor.reviews} ratings)
                                </Label>
                            </S.RatingsBox>
                        </S.Child>
                        <S.Child style={S.child2Styles}>
                            <S.HourlyRateBox>
                                <Label sxOverrides={S.hourlyRateText}>
                                    Hourly rate
                                </Label>
                                {shouldHourlyRateEdit ? (
                                    <S.HourlyRateInput
                                        autoFocus
                                        type="number"
                                        variant="standard"
                                        value={hourlyRate}
                                        onChange={onChangeHourlyRate}
                                        onKeyPress={handleKeyPress}
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: S.hourlyRateInputPropsSX
                                        }}
                                        sx={S.hourlyRateInputSX}
                                    />
                                ) : isContributorHourlyRateLoading ? (
                                    <CircularProgress size={'20px'} />
                                ) : (
                                    <S.HourlyRateChip
                                        label={`${contributor.hourly_rate}$`}
                                        onDelete={handleDelete}
                                        deleteIcon={<S.EditIcon />}
                                    />
                                )}
                            </S.HourlyRateBox>
                            <S.StatusBox>
                                <Label sxOverrides={S.statusText}>Status</Label>
                                <S.DropDownBox>
                                    <Dropdown
                                        value={statusValue}
                                        handleChange={handleChange}
                                        options={status}
                                    />
                                </S.DropDownBox>
                            </S.StatusBox>
                        </S.Child>
                        <S.Child style={S.child3Styles}>
                            <Label sxOverrides={S.sinceText}>
                                since {contributor.joining_date}
                            </Label>
                        </S.Child>
                    </S.Parent>
                </S.Root>
            )}
        </S.Container>
    );
};

export default ContributorDetails;
