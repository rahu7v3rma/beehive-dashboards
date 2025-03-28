import { FunctionComponent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/hooks';
import {
    selectConversationName,
    selectConverstationError,
    selectIsLoading
} from 'src/redux/chat/selectors';
import { fetchConversations } from 'src/redux/chat/service';
import { Loader } from 'src/shared';
import { ErrorBox } from 'src/shared/Input/styled';
import { ConversationSchema } from 'src/types/chat';
import ChatBody from './components/ChatBody';
import ChatBodyContainer from './components/ChatBodyContainer';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import { useFilterMessages } from './hooks/useFilterMessages';
import { Root, S } from './styled';

type Props = {
    conversationId: ConversationSchema['id'];
    onClose: () => void;
};

const ChatRoom: FunctionComponent<Props> = ({
    conversationId,
    onClose
}: Props) => {
    const isLoading = useSelector(selectIsLoading);
    const apiError = useSelector(selectConverstationError);
    const chatName = useSelector(selectConversationName);
    const dispatch = useAppDispatch();

    const fetchMockMessages = useCallback(() => {
        dispatch(fetchConversations());
    }, [dispatch]);

    useEffect(fetchMockMessages, [fetchMockMessages]);

    const filteredMessages = useFilterMessages(conversationId);

    const showLoader = isLoading && !apiError;
    const showError = !isLoading && apiError;
    const showChat = !isLoading && !apiError;

    return (
        <Root>
            <ChatHeader name={chatName} onClose={onClose} />
            <ChatBodyContainer>
                {showLoader && <Loader />}
                {showChat && <ChatBody messages={filteredMessages} />}
                {showError && (
                    <ErrorBox style={S.errorMsg}>{apiError}</ErrorBox>
                )}
            </ChatBodyContainer>
            <ChatFooter />
        </Root>
    );
};

export default ChatRoom;
