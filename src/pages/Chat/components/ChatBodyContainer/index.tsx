import { FC } from 'react';
import { StyledChatBodyContainer } from './styled';

type Props = {
    children?: React.ReactNode;
};
const ChatBodyContainer: FC<Props> = ({ children }) => {
    return <StyledChatBodyContainer>{children}</StyledChatBodyContainer>;
};

export default ChatBodyContainer;
