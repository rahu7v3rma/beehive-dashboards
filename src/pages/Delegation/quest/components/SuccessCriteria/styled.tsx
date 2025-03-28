import { Box, Checkbox, Chip, styled } from '@mui/material';
import theme from 'src/theme';

export const SuccessCriteriaBox = styled(Box)`
    background-color: ${theme.color.darkBlue};
    margin-top: 24px;
    padding: 28px;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const SuccessCriteriaWrapper = styled(Box)`
    width: 100%;
`;

export const Container = styled(Box)`
    padding: 12px;
    border: 1px solid ${theme.color.blackRock};
`;

export const CriteriaListItem = styled(Box)`
    display: flex;
    align-items: center;
    color: ${theme.color.white70};
    margin-bottom: 1rem;
`;

export const CheckboxItem = styled(Checkbox)({
    color: 'transparent',
    '& .MuiSvgIcon-root': {
        border: '1px solid #DEA40D',
        borderRadius: '6px',
        padding: '3px',
        width: '16px',
        height: '16px'
    }
});

export const CriteriaDescriptionSX = {
    margin: '.25rem 0',
    fontSize: '14px'
};

export const SpecificCriteriaPaperSX = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: '1rem',
    border: '1px solid #6B6B6B',
    padding: '0 .5rem 0 1rem',
    color: 'white'
};

export const AddChip = styled(Chip)`
    background-color: #292b36;
    color: #e6bb42;
    width: 62px;
    font-size: 12px;
    margin: 4px;
`;

export const CancelChip = styled(Chip)`
    background-color: #352e36;
    color: #ff5c50;
    width: 62px;
    font-size: 12px;
    margin: 4px;
`;

export const AddCriteriaChip = styled(Chip)`
    background-color: rgba(255, 220, 168, 0.1);
    color: #fabb18;
    font-size: 12px;
`;
