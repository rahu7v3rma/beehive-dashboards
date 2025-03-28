import { FC, useMemo } from 'react';
import { StyledMessageCreatedAt } from './styled';

const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24-hour format
    });
};

type Props = {
    createdAt: number;
};

const MessageCreatedAt: FC<Props> = ({ createdAt }) => {
    const formattedDate = useMemo(() => formatDate(createdAt), [createdAt]);
    return (
        <StyledMessageCreatedAt>{`${formattedDate}`}</StyledMessageCreatedAt>
    );
};

export default MessageCreatedAt;
