import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Label, Avatar, Loader } from '../../../../shared';
import theme from 'src/theme';
import S from './styled';
import ReactCountryFlag from 'react-country-flag';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import * as service from 'src/redux/project-contributors/service';
import * as selectors from 'src/redux/project-contributors/selectors';
import { SelectChangeEvent } from '@mui/material';
import Dropdown from 'src/shared/DropDown';
import { Status, StatusValues } from 'src/constants/status';
import EditProfileImageModal from '../EditProfileImageModal';
import CreatePassword from 'src/pages/Signin/components/CreatePassword';

type Props = Record<string, never>;

const ContributorDetails: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();

    const contributor = useSelector(selectors.getContributor);
    const isLoading = useSelector(selectors.getIsLoading);
    const [statusValue, setStatusValue] = useState<StatusValues>('active');
    const [profilePic, setProfilePic] = useState<boolean>(false);
    const [img, setImg] = useState<File>();
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        dispatch(service.getContributor());
    }, [dispatch]);

    const handleChange = (event: SelectChangeEvent) => {
        setStatusValue(event.target.value as StatusValues);
    };

    const onEditProfilePic = () => {
        setProfilePic(true);
    };

    const onProfilePicClose = () => {
        setProfilePic(false);
    };

    const onSaveProfilePic = (file?: File) => {
        onProfilePicClose();
        setImg(file);
    };

    const getImgUrl = useCallback(() => {
        return img ? URL.createObjectURL(img) : '';
    }, [img]);

    const showChangePassword = () => {
        setIsShown(!isShown);
    };

    return (
        <S.Container>
            {isLoading ? (
                <Loader />
            ) : (
                <S.Root>
                    <S.AvatarBox>
                        <Avatar
                            background={theme.color.darkBlue}
                            size="110px"
                            image={getImgUrl()}
                        />
                        <S.EditIcon onClick={onEditProfilePic} />
                    </S.AvatarBox>
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
                                    readOnly
                                />
                                <Label sxOverrides={S.ratingText}>
                                    {contributor.rating}
                                </Label>
                                <Label sxOverrides={S.reviewsText}>
                                    {`(${contributor.reviews} ratings)`}
                                </Label>
                            </S.RatingsBox>
                            <Label
                                onClick={showChangePassword}
                                sxOverrides={S.changePassword}
                            >
                                Change your password
                            </Label>
                        </S.Child>
                        <S.Child style={S.child2Styles}>
                            <S.HourlyInputBox>
                                <S.LabelContainer>
                                    <Label sxOverrides={S.hourlyInputText}>
                                        Hours weekly limit
                                    </Label>
                                </S.LabelContainer>
                                <Label sxOverrides={S.hourlyInputSX}>
                                    {contributor.weekly_hours}
                                </Label>
                            </S.HourlyInputBox>
                            <S.HourlyInputBox>
                                <S.LabelContainer>
                                    <Label sxOverrides={S.hourlyInputText}>
                                        Hourly rate
                                    </Label>
                                </S.LabelContainer>
                                <Label sxOverrides={S.rateInputSX}>
                                    {contributor.hourly_rate}$
                                </Label>
                            </S.HourlyInputBox>
                        </S.Child>
                        <S.Child style={S.child3Styles}>
                            <S.StatusBox>
                                <S.LabelContainer>
                                    <Label sxOverrides={S.statusText}>
                                        Status&nbsp;
                                    </Label>
                                </S.LabelContainer>
                                <S.DropDownBox>
                                    <Dropdown
                                        value={statusValue}
                                        handleChange={handleChange}
                                        options={Status}
                                        width="100%"
                                    />
                                </S.DropDownBox>
                            </S.StatusBox>
                        </S.Child>
                    </S.Parent>
                    <EditProfileImageModal
                        open={profilePic}
                        onClose={onProfilePicClose}
                        onSave={onSaveProfilePic}
                    />
                    <CreatePassword
                        open={isShown}
                        onClose={() => setIsShown(!isShown)}
                    />
                </S.Root>
            )}
        </S.Container>
    );
};

export default ContributorDetails;
