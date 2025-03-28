import { FC, useState } from 'react';
import { MessageSchema } from 'src/types/chat';
import MessageMenu from '../MessageMenu';
import {
    StyledBox,
    StyledMenuWrapper,
    StyledMessageBubbleContainer,
    StyledMessageOwnerTitle
} from './styled';
import { MessageBubbleContent } from './MessageBubbleContent';

type Props = {
    message: MessageSchema;
};

const MessageBubble: FC<Props> = ({ message }) => {
    const sentByMe = message.senderUserId === 'user1';

    //todo: Will be replaced with actual user Id
    const [showMessageMenu, setShowMessageMenu] = useState(false);

    return (
        <StyledMessageBubbleContainer sentByMe={sentByMe}>
            <StyledBox>
                <StyledMenuWrapper>
                    <MessageMenu
                        showMessageMenu={showMessageMenu}
                        setShowMessageMenu={setShowMessageMenu}
                        sentByMe={sentByMe}
                        message={message}
                    />

                    <StyledMessageOwnerTitle sentByMe={sentByMe}>
                        {message.senderUserId}
                        {/* for now we have user id but will be replaced with name*/}
                    </StyledMessageOwnerTitle>
                </StyledMenuWrapper>
                <MessageBubbleContent
                    sentByMe={sentByMe}
                    message={message}
                    setShowMessageMenu={setShowMessageMenu}
                />
            </StyledBox>
        </StyledMessageBubbleContainer>
    );
};

export default MessageBubble;
