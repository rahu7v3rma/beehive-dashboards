import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, updateMessageStatus } from 'src/redux/chat/slice';
import { MessageSchema } from 'src/types/chat';
import { ReactComponent as ReplyIcon } from '../../../../assets/icons/reply.svg';
import { ReactComponent as TrashIcon } from '../../../../assets/icons/trash.svg';
import { S, StyledMessageMenu } from './styled';

type Props = {
    sentByMe: boolean;
    message: MessageSchema;
    showMessageMenu: boolean;
    setShowMessageMenu: (showMenu: boolean) => void;
};

const MessageMenu: FC<Props> = ({
    sentByMe,
    message,
    showMessageMenu,
    setShowMessageMenu
}) => {
    const dispatch = useDispatch();

    const onReplyHandler = () => {
        dispatch(replyMessage(message));
    };

    const onDeleteHandler = () => {
        dispatch(updateMessageStatus({ id: message.id }));
    };

    return (
        <StyledMessageMenu
            showMenu={showMessageMenu}
            sentByMe={sentByMe}
            onMouseEnter={() => setShowMessageMenu(true)}
            onMouseLeave={() => setShowMessageMenu(false)}
        >
            <ReplyIcon style={S.controlIcons} onClick={onReplyHandler} />
            {sentByMe && (
                <TrashIcon style={S.controlIcons} onClick={onDeleteHandler} />
            )}
        </StyledMessageMenu>
    );
};

export default MessageMenu;
