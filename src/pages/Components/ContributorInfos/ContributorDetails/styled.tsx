import styled from '@emotion/styled';
import { TextField, Box, Rating } from '@mui/material';
import Chip from '@mui/material/Chip';
import theme from 'src/theme';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';

const S = {
    Container: styled(Box)`
        margin-top: 63px;
        width: 100%;
        margin-bottom: 104px;
    `,
    AvatarBox: styled(Box)`
        align-items: center;
        display: flex;
        flex-direction: column;
    `,
    Root: styled('div')({
        display: 'flex'
    }),
    Parent: styled('div')({
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '24px',
        width: '100%',
        alignSelf: 'center'
    }),
    Child: styled('div')({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }),
    name: {
        font: '600 20px/24px "Inter",sans-serif !important',
        color: theme.color.white90
    },
    changePassword: {
        font: '400 11px/12px "Inter",sans-serif !important',
        color: theme.color.yellow60,
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        marginTop: '17px',
        cursor: 'pointer',
        width: 'max-content'
    },
    CountryBox: styled(Box)({
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    }),
    countryName: {
        font: '12px/15px "Inter",sans-serif !important',
        color: theme.color.white90,
        marginLeft: '7px'
    },
    countryTime: {
        font: '11px/18px "Inter",sans-serif !important',
        fontFamily: '"Inter",sans-serif',
        color: theme.color.white50,
        marginLeft: '12px'
    },
    RatingsBox: styled(Box)({
        display: 'flex',
        alignItems: 'center',
        marginTop: '17px'
    }),
    Rating: styled(Rating)({
        '& .MuiSvgIcon-root': {
            height: '16px',
            width: '16px'
        }
    }),
    StarBorderIcon: styled(StarBorderIcon)`
        color: ${theme.color.tuna};
        width: 15px;
        height: 15px;
    `,
    StarIcon: styled(StarIcon)`
        color: ${theme.color.lightningYellow};
        width: 15px;
        height: 15px;
    `,
    ratingText: {
        font: '600 16px/19px "Inter",sans-serif !important',
        color: theme.color.lightningYellow,
        marginLeft: '13px'
    },
    reviewsText: {
        font: '11px/18px "Inter",sans-serif !important',
        color: theme.color.yellow60,
        marginLeft: '12px',
        textDecoration: 'underline',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textUnderlineOffset: '3px',
        cursor: 'pointer'
    },
    child1Styles: {
        marginRight: '47px'
    },
    child2Styles: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    DropDownBox: styled(Box)`
        margin: 0px 10px;
        width: 100%;
    `,
    StatusBox: styled(Box)`
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        border: solid;
        border-color: ${theme.color.white90};
        height: 56px;
        border-width: 0.1px;
    `,
    statusText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white50
    },
    hourlyInputText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white50,
        marginRight: '6px'
    },
    HourlyInputBox: styled(Box)`
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
        border: solid;
        border-color: ${theme.color.white90};
        width: 150px;
        height: 56px;
        border-width: 0.1px;
    `,
    HourlyInputChip: styled(Chip)({
        color: theme.color.white90,
        background: theme.color.darkBlue,
        width: '100%',
        padding: '0px 10px',
        height: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '16px',
        font: '12px/18px "Inter",sans-serif !important'
    }),
    EditIcon: styled(EditIcon)`
        fill: ${theme.color.lightningYellow} !important;
        width: 17px !important;
        height: 17px !important;
        cursor: pointer;
    `,
    HourlyInput: styled(TextField)`
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
            display: none;
        }
    `,
    LabelContainer: styled('div')({
        position: 'absolute',
        zIndex: 1,
        top: '-8px',
        left: '6px',
        size: '12px',
        lineHeight: '12px',
        backgroundColor: theme.color.codGray,
        borderWidth: '0.1px',
        paddingLeft: '4px'
    }),
    hourlyInputSX: {
        width: '100%',
        color: theme.color.white90,
        textAlign: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px'
    },
    rateInputSX: {
        width: '100%',
        color: theme.color.white90,
        textAlign: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px'
    },
    hourlyInputPropsSX: {
        font: '12px/18px "Inter",sans-serif !important',
        color: theme.color.white90
    },
    sinceText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white30,
        marginBottom: '4px',
        marginLeft: '28px'
    },
    child3Styles: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '28px'
    }
};

export default S;
