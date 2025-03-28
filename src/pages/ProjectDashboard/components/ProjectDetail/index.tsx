import React, { FunctionComponent } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { Avatar, Label } from 'src/shared';
import {
    DetailsWrapper,
    FlexWrapper,
    AvatarWithText,
    labelStyle
} from '../../styled';
import { useSelector } from 'react-redux';
import { getProject } from 'src/redux/projects/selectors';
import { ReactComponent as TrelloBoardIcon } from 'src/assets/icons/trello-board.svg';
import theme from 'src/theme';
import { S } from './styled';
import { ClientSelectors } from 'src/redux/client/selectors';

const ProjectDetails: FunctionComponent = () => {
    const { selectedProjectId } = ClientSelectors();
    const selectedProject = useSelector(getProject(selectedProjectId));

    return (
        <DetailsWrapper>
            <AvatarWithText>
                <Avatar
                    background={theme.color.darkBlue}
                    size="110px"
                    image=""
                />
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            pl: 1,
                            fontWeight: 'bold',
                            color: theme.color.white90
                        }}
                    >
                        {selectedProject?.projectName || 'Project Name'}
                    </Typography>
                    {selectedProjectId && (
                        <Label
                            sxOverrides={labelStyle}
                        >{`project id: ${selectedProjectId}`}</Label>
                    )}
                </Box>
            </AvatarWithText>
            <FlexWrapper>
                <TrelloBoardIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        window.open(selectedProject.trelloBoard, '_blank')
                    }
                />
            </FlexWrapper>
            <Label sxOverrides={S.statusText}>Status</Label>
            <Chip label="Active" sx={S.statusChip} />
            <Label sxOverrides={S.sinceText}>
                {selectedProject?.date
                    ? `since ${selectedProject.date.slice(0, 10)}`
                    : ''}
            </Label>
        </DetailsWrapper>
    );
};
export default ProjectDetails;
