import { FC } from 'react';
import { ChatHeaderRoot, S } from './styled';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg';
import { Title } from 'src/shared';
import { useAppDispatch } from 'src/hooks';
import { closeWindow } from 'src/redux/chat/slice';

type Props = {
    name: string;
    onClose: () => void;
};

const ChatHeader: FC<Props> = ({ name, onClose }) => {
    const dispatch = useAppDispatch();

    const onCloseChatHandler = () => {
        dispatch(closeWindow);
        onClose();
    };
    return (
        <ChatHeaderRoot>
            <Title>{name}</Title>
            <CloseIcon onClick={onCloseChatHandler} style={S.closeIcon} />
        </ChatHeaderRoot>
    );
};

export default ChatHeader;
