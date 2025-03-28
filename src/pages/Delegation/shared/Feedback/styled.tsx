import { styled } from '@mui/material';
import theme from 'src/theme';

export const FeedbackSection = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`;

export const SectionTextContainer = styled('div')`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
`;

export const Title = {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    color: theme.color.white90
};

export const Description = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: theme.color.white50,
    marginTop: '12px'
};

export const FeedbacksContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding: 20px 28px;
    background: ${theme.color.darkBlue};
    border-radius: 4px;
`;

export const FeedbackText = {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '13px',
    lineHeight: '35px',
    color: theme.color.white90
};

export const Highlight = styled('span')`
    color: ${theme.color.lightningYellow};
`;
