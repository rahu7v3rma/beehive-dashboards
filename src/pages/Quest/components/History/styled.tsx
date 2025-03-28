import { Star } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import theme from 'src/theme';

export const HistoryContainer = styled(Box)`
    background-color: ${theme.color.blackRock};
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    position: relative;
    padding: 8px 0;
`;

export const ActivityRow = styled(Box)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 0;
    position: relative;
`;

export const ActivityColumn = styled(Box)`
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
    flex-direction: row;
`;
export const IconColumn = styled(Box)`
    position: relative;
    display: flex;
    width: 12px;
    height: inherit;
    margin: 0 24px;
    align-items: flex-start;
    // Icon positioning
    & > svg {
        z-index: 2;
    }
`;

export const IconBox = styled(Box)`
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const VerticalLine = styled(Box)`
    width: 1px;
    background-color: ${theme.color.white10};
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;
export const DateContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 150px;
`;

export const DatePart = styled(Box)`
    font-size: 12px;
    color: ${theme.color.white50};
    margin-right: 10px;
`;

export const TimePart = styled(Box)`
    font-size: 12px;
    color: ${theme.color.white30};
`;

export const ActivityHeader = styled(Box)`
    color: ${theme.color.white};
    font-size: 12px;
`;
export const ActivityContent = styled(Box)`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-left: 24px;
    flex: 1;
`;
export const Description = styled(Box)`
    font-size: 12px;
    color: ${theme.color.white30};
    margin-top: 4px;
`;

export const StyledTitle = styled(Box)`
    font-size: 16px;
    color: ${theme.color.white};
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const StyledContainer = styled(Box)`
    display: contents;
`;

export const StyledStar = styled(Star)`
    color: ${theme.color.lightningYellow};
    font-size: 15px;
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
