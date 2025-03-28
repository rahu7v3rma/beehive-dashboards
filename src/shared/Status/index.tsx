import React, { FunctionComponent } from 'react';
import theme from 'src/theme';
import { Container, iconStyle, statusTextSX } from './styled';
import Label from '../Label';
import { ReactComponent as SolvedIcon } from '../../assets/icons/solved.svg';
import { ReactComponent as InProgressIcon } from '../../assets/icons/in-progress.svg';
import { ReactComponent as CancelledIcon } from '../../assets/icons/cancel.svg';
import { ReactComponent as InReviewIcon } from '../../assets/icons/in-review.svg';

export type StatusType = 'solved' | 'in-progress' | 'cancelled' | 'in-review';

export interface Props {
    onClick?: () => void;
    status: StatusType;
}

export type StatusItemType = {
    background: string;
    color: string;
    icon: React.ReactNode;
    text: string;
};

export type StatusItem = {
    solved: StatusItemType;
    'in-progress': StatusItemType;
    cancelled: StatusItemType;
    'in-review': StatusItemType;
};

export const statusItem: StatusItem = {
    solved: {
        color: theme.color.green,
        background: theme.color.lightGreen,
        icon: <SolvedIcon style={iconStyle} />,
        text: 'Solved'
    },
    'in-progress': {
        color: theme.color.bluishCayan,
        background: theme.color.lightBluishCayan,
        icon: <InProgressIcon style={iconStyle} />,
        text: 'In progress'
    },
    cancelled: {
        color: theme.color.orangyRed,
        background: theme.color.lightOrangyRed,
        icon: <CancelledIcon style={iconStyle} />,
        text: 'Cancelled'
    },
    'in-review': {
        background: theme.color.lightOrangeYellow,
        color: theme.color.lightningYellow,
        icon: <InReviewIcon style={iconStyle} />,
        text: 'In review'
    }
};

const Status: FunctionComponent<Props> = ({ status, onClick }) => (
    <Container
        onClick={onClick}
        backgroundColor={statusItem[status].background}
    >
        {statusItem[status].icon}
        <Label sxOverrides={statusTextSX} color={statusItem[status].color}>
            {statusItem[status].text}
        </Label>
    </Container>
);

export default Status;
