import { styled } from '@mui/material/styles';
import { Box, Rating, Typography } from '@mui/material';
import { Star, StarOutline } from '@mui/icons-material';
import theme from 'src/theme';

export const StyledRating = styled(Rating)`
    display: flex;
    align-items: center;
`;

export const StyledStarOutline = styled(StarOutline)`
    font-size: 12px;
    height: 12px;
    width: 12px;
`;

export const StyledStar = styled(Star)`
    color: ${theme.color.lightningYellow};
    font-size: 12px;
    height: 12px;
    width: 12px;
`;
export const RatingContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const RatingSection = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
`;

export const RatingItemContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-right: 8px;
`;

export const RatingHeader = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RatingRow = styled(Box)`
    display: flex;
    align-items: center;
    color: ${theme.color.white50};
`;

export const CommentContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const CommentLabel = styled(Box)`
    color: ${theme.color.white};
    font-size: 12px;
`;

export const CommentText = styled(Box)`
    color: ${theme.color.white50};
    font-size: 12px;
`;

export const RatingLabel = styled(Typography)`
    font-size: 12px;
    color: ${theme.color.white};
`;

export const ExpandText = styled(Typography)`
    color: ${theme.color.lightningYellow};
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
`;

export const ActivityHeader = styled(Box)`
    color: ${theme.color.white};
    font-size: 12px;
`;

export const Description = styled(Box)`
    font-size: 12px;
    color: ${theme.color.white30};
    margin-top: 4px;
`;

export const Note = styled('span')`
    color: ${theme.color.lightBlue};
    font-size: 10px;
`;
