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
    CountryBox: styled(Box)({
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        width: '150%'
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
        marginTop: '17px',
        width: '150%'
    }),
    Rating: styled(Rating)``,
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
        textDecoration: 'underline'
    },
    child1Styles: {
        marginRight: '47px'
    },
    child2Styles: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    DropDownBox: styled(Box)`
        margin-left: 10px;
    `,
    StatusBox: styled(Box)`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,
    statusText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white50
    },
    hourlyRateText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white50,
        marginRight: '6px'
    },
    HourlyRateBox: styled(Box)`
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        height: 30px;
        width: 200px;
    `,
    HourlyRateChip: styled(Chip)({
        color: theme.color.white90,
        background: theme.color.darkBlue,
        width: '100px',
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
    `,
    HourlyRateInput: styled(TextField)`
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
            display: none;
        }
    `,
    hourlyRateInputSX: {
        width: '100px',
        borderRadius: '20px',
        paddingLeft: '10px',
        background: theme.color.darkBlue,
        input: { color: theme.color.white90 }
    },
    hourlyRateInputPropsSX: {
        font: '12px/18px "Inter",sans-serif !important',
        color: theme.color.white90
    },
    sinceText: {
        font: '12px/12px "Inter",sans-serif !important',
        color: theme.color.white30,
        marginBottom: '4px'
    },
    child3Styles: {
        marginTop: '55px'
    }
};

export default S;
