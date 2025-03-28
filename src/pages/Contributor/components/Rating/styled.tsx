import { Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'src/theme';

export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RowBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const MarginBox = styled(Box)`
    width: 12px;
`;

export const RatingText = {
    fontSize: '12px',
    color: theme.color.lightningYellow,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: '18px'
};

export const ReviewsTextWrapper = styled('div')({
    color: theme.color.lightningYellow
});

export const ReviewsText = {
    fontSize: '11px',
    color: theme.color.lightningYellow,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: '18px',
    textDecoration: 'underline'
};
