import { FC, useState } from 'react';
import { StyledFooter } from './styled';
import ChatInput from '../ChatInput';
type Props = {};

const ChatFooter: FC<Props> = () => {
    const [isActiveInput, setIsActiveInput] = useState(false);
    return (
        <StyledFooter isActive={isActiveInput}>
            <ChatInput setInputIsActive={setIsActiveInput} />
        </StyledFooter>
    );
};

export default ChatFooter;
