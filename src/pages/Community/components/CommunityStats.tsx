import { Card, Divider } from '@mui/material';
import React, { FunctionComponent } from 'react';
import List from '@mui/material/List';
import { ITasks } from 'src/types/tasks';
import { Label } from 'src/shared';
import { tasks } from 'src/constants/community';
import {
    StyledListItem,
    cardStyle,
    countStyle,
    DividerStyle,
    listStyle
} from '../styled';
type Props = Record<string, never>;

const CommunityStats: FunctionComponent<Props> = ({}: Props) => {
    return (
        <Card sx={cardStyle}>
            <List sx={listStyle}>
                {tasks.map((value: ITasks, index: number) => (
                    <>
                        {index === 4 && <Divider sx={DividerStyle} />}
                        <StyledListItem
                            key={index}
                            disableGutters
                            secondaryAction={value.number}
                            sx={{ countStyle }}
                        >
                            <Label>{value.name}</Label>
                        </StyledListItem>
                    </>
                ))}
            </List>
        </Card>
    );
};

export default CommunityStats;
