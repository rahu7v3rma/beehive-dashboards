import { FC, useRef } from 'react';
import { MessageSchema } from 'src/types/chat';
import MessageBubble from '../MessageBubble';
import { StyledChatBody } from './styled';
import { useAutoScroll } from '../../hooks/useAutoScroll';
type Props = {
    messages: MessageSchema[];
};
const ChatBody: FC<Props> = ({ messages }) => {
    const ref = useRef<HTMLInputElement>(null);
    useAutoScroll(ref, messages);
    return (
        <StyledChatBody ref={ref}>
            {messages.map((message) => {
                return <MessageBubble key={message.id} message={message} />;
            })}
        </StyledChatBody>
    );
};

export default ChatBody;
