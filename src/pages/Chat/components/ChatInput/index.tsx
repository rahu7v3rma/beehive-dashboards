import { FC, useRef, useState } from 'react';
import { MessageSchema } from 'src/types/chat';
import { ReactComponent as EmojiPicker } from '../../../../assets/icons/emoji-picker.svg';
import { ReactComponent as SendMessageActive } from '../../../../assets/icons/send-message-active.svg';
import { ReactComponent as SendMessageDisabled } from '../../../../assets/icons/send-message-disabled.svg';
import { ReactComponent as SendMessage } from '../../../../assets/icons/send-message.svg';
import {
    StyledChatInput,
    StyledEmojiPicker,
    StyledInputWrapper
} from './styled';
import { useAppDispatch } from 'src/hooks';
import { addMessage, resetReplyMessage } from 'src/redux/chat/slice';
import { useSelector } from 'react-redux';
import { selectReplyMessage } from 'src/redux/chat/selectors';
import { MessageBubbleContent } from '../MessageBubble/MessageBubbleContent';

type Props = {
    setInputIsActive: (active: boolean) => void;
};

class MessageBuilder implements MessageSchema {
    id;
    text;
    senderUserId;
    conversationId;
    timestampEpochMs;
    isDeleted;
    replyMessageId?: number | undefined;
    constructor(
        text: string,
        senderUserId: string,
        conversationId: number,
        replyMessageId?: number | undefined
    ) {
        this.id = Math.random() * 234; // generate random Id
        this.text = text;
        this.conversationId = conversationId;
        this.senderUserId = senderUserId;
        this.isDeleted = false;
        this.timestampEpochMs = Date.now();
        if (replyMessageId) {
            this.replyMessageId = replyMessageId;
        }
    }
}

const buildMessage = (
    text: string,
    replyMessageId?: MessageSchema['replyMessageId']
) => {
    return new MessageBuilder(text, 'user1', 1, replyMessageId); //TODO: replace with original userId
};

const ChatInput: FC<Props> = ({ setInputIsActive }) => {
    const [sendMessageIconName, setSendMessageIconName] = useState('disabled');
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const replyMessage: MessageSchema | undefined =
        useSelector(selectReplyMessage);

    const dispatch = useAppDispatch();

    let IconComponent = SendMessageDisabled;

    if (sendMessageIconName === 'active') {
        IconComponent = SendMessageActive;
    } else if (sendMessageIconName === 'normal') {
        IconComponent = SendMessage;
    }

    const changeSendIconHandler = (iconName?: string) => {
        const currentInputElement = inputRef.current as HTMLInputElement;
        if (
            currentInputElement.value.trim() === '' ||
            iconName === 'disabled'
        ) {
            setSendMessageIconName('disabled');
            setInputIsActive(false);
            return;
        }

        if (iconName === 'active') {
            setSendMessageIconName(iconName);
            setInputIsActive(true);
            return;
        }

        setSendMessageIconName('normal');
        setInputIsActive(false);
    };

    const onChangeHandler = (event: React.ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        if (value.trim() === '') {
            changeSendIconHandler('disabled');
        } else {
            changeSendIconHandler('active');
        }
        setInputValue(value);
    };

    const onSubmitMessage = (
        replyMessageId?: MessageSchema['replyMessageId']
    ) => {
        const message = buildMessage(inputValue, replyMessageId);
        setInputValue('');
        changeSendIconHandler('disabled');
        dispatch(addMessage({ ...message })); // to prevent non-serialize error in redux
        if (replyMessage) {
            dispatch(resetReplyMessage());
        }
    };

    return (
        <StyledInputWrapper>
            <StyledEmojiPicker>
                <EmojiPicker cursor="pointer" />
            </StyledEmojiPicker>
            {replyMessage && (
                <MessageBubbleContent
                    replying
                    message={replyMessage}
                    sentByMe={
                        replyMessage.senderUserId === 'user1'
                    } /** TODO: replace with actual user id */
                />
            )}
            <StyledChatInput
                ref={inputRef}
                onKeyDown={(e) =>
                    e.key === 'Enter' && onSubmitMessage(replyMessage?.id)
                }
                onFocus={() => changeSendIconHandler('active')}
                onBlur={() => changeSendIconHandler()}
                placeholder="Type a message..."
                value={inputValue}
                onChange={onChangeHandler}
            />
            <IconComponent
                cursor="pointer"
                onClick={() => onSubmitMessage(replyMessage?.id)}
            />
        </StyledInputWrapper>
    );
};

export default ChatInput;
