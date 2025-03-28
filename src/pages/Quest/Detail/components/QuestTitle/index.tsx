import { FC } from 'react';
import { Title, Subtitle } from 'src/shared';
import color from 'src/theme/color';
import { Box } from '@mui/material';
import { QuestSchema } from 'src/types/quests';
import { Container } from './styled';

interface QuestTitleProps {
    quest: QuestSchema;
}

const QuestTitle: FC<QuestTitleProps> = ({ quest }) => {
    return (
        <Container>
            <Subtitle>Request Title</Subtitle>
            <Title>{quest?.title || 'Request Title Not Found'}</Title>
            <Box>
                <Subtitle>
                    Request ID{' '}
                    <span style={{ color: `${color.white}` }}>{quest?.id}</span>
                </Subtitle>
            </Box>
        </Container>
    );
};

export default QuestTitle;
