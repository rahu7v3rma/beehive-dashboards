import { Box, Modal, styled } from '@mui/material';
import color from 'src/theme/color';

export const MuiModal = styled(Modal)`
    margin-top: 64px;
    background-color: ${color.darkBluebg};
    overflow-y: scroll;
`;

export const Container = styled(Box)`
    padding: 48px 324px;
    @media (max-width: 1500px) {
        padding: 48px 224px;
    }
`;

export const TitleAndEditControls = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SkillsAndTaskSettingsBox = styled(Box)`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    margin-top: 36px;
`;

export const SkillsWrapper = styled(Box)`
    background-color: ${color.darkBlue};
    padding: 24px 16px;
    width: 80%;
    border-radius: 4px;
`;

export const ActionsContainer = styled(Box)`
    margin: 34px 0;
    display: flex;
    justify-content: center;
`;

export const PlaceholderBox = styled(Box)`
    display: flex;
    justify-content: center;
`;

export const placeholderLabel = {
    font: '12px "Inter" !important',
    color: color.white30,
    display: 'inline-block',
    justifyContent: 'center',
    width: '190px'
};

export const placeholderHereLink = {
    color: color.lightningYellowRgba6,
    textDecoration: 'underline'
};

export const EditControlsBox = styled(Box)`
    display: flex;
    gap: 10px;
`;

export const duplicateLabel = {
    borderRadius: '16px',
    backgroundColor: color.darkMintYellow,
    padding: '7px 10px',
    color: color.lightningYellow,
    font: '12px/18px "Inter" !important',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer'
};

export const deleteLabel = {
    ...duplicateLabel,
    backgroundColor: color.darkMintRed,
    color: color.orangyRed
};

export const TaskRepositoryBox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 0 20px;
`;

export const TaskSettingsBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin-left: 15px;
    background-color: ${color.darkBlue};
    width: 30%;
    padding: 20px 0px;
    border-radius: 4px;
    gap: 10px;
`;

export const TaskTypeBox = TaskRepositoryBox;

export const repositorySelectErrorLabelSx = {
    font: '11px "Inter" !important',
    color: color.red,
    display: 'block',
    marginTop: '5px',
    textAlign: 'center',
    marginLeft: '20px'
};

export const typeSelectErrorLabelSx = repositorySelectErrorLabelSx;

export const taskRepositoryLabel = {
    font: '12px/12px "Inter",sans-serif !important',
    color: color.white50,
    width: 80
};

export const taskTypeLabel = taskRepositoryLabel;

export const TitlesBox = styled(Box)``;

export const headingLabel = {
    color: color.white90,
    font: '600 16px "Inter" !important',
    display: 'block',
    marginBottom: '12px',
    marginLeft: '20px'
};

export const subHeadingLabel = {
    color: color.white50,
    font: '12px "Inter" !important',
    marginLeft: '20px'
};

export const TitleInputWrapper = styled(Box)`
    margin-top: 18px;
`;

export const DescriptionInputWrapper = TitleInputWrapper;

export const RepositoryDropdownWrapper = styled(Box)`
    width: 70%;
`;

export const TaskTypeDropdownWrapper = RepositoryDropdownWrapper;
