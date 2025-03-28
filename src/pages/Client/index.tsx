import { FunctionComponent, useEffect, useState } from 'react';
import { Navbar, Loader, Label, SearchInputWrapper, Switch } from 'src/shared';
import {
    Root,
    SectionHeader,
    SectionHeaderLabels,
    SectionContentBox,
    SectionHeaderActions,
    S,
    AddRowChip,
    StyledAddCommentIcon,
    StyledNotificationIcon
} from './styled';
import Header from './components/ClientHeader';
import WorkTime from './components/WorkTime';
import Requests from './components/Requests';
import { ClientSelectors } from 'src/redux/client/selectors';
import { fetchProjectWorkTimeReview } from 'src/redux/client/service';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import {
    setQuestsSearchQuery,
    setQuestsStatusFilter
} from 'src/redux/client/slice';
import { CURRENT_WORK_QUEST_STATUS } from 'src/constants/quest';
import { openWindow } from 'src/redux/chat/slice';
import Modal from 'src/shared/Modal';
import Chat from 'src/pages/Chat';
import { useChatSelectors } from 'src/redux/chat/selectors';

type Props = Record<string, never>;

const ClientDashboard: FunctionComponent<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    const { isLoading, workTimeReview, selectedProjectId, questsSearchQuery } =
        ClientSelectors();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedProjectId) {
            dispatch(fetchProjectWorkTimeReview());
        }
    }, [dispatch, selectedProjectId]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuestsSearchQuery(event.target.value));
    };

    const handleSwitchToggle = (isChecked: boolean) => {
        if (isChecked) {
            dispatch(setQuestsStatusFilter(CURRENT_WORK_QUEST_STATUS));
        } else {
            dispatch(setQuestsStatusFilter([]));
        }
    };

    const { id: chatId } = useChatSelectors();

    const [chatModelOpen, setChatModelOpen] = useState(false);

    const onClickProjectDiscussion = () => {
        dispatch(openWindow(selectedProjectId));
        setChatModelOpen(true);
    };

    return (
        <Navbar>
            {isLoading ? (
                <Loader />
            ) : (
                <Root>
                    <Header />
                    <SectionHeader>
                        <SectionHeaderLabels />
                        <SectionHeaderActions>
                            <AddRowChip
                                label="Project discussion"
                                clickable
                                onClick={onClickProjectDiscussion}
                                deleteIcon={<StyledNotificationIcon />}
                                onDelete={onClickProjectDiscussion}
                            />
                            <Modal
                                open={chatModelOpen}
                                hasCrossIcon={false}
                                dialogContentSx={S.chatModalDialogContentSx}
                                dialogSx={S.chatModalDialogSx}
                            >
                                <Chat
                                    conversationId={chatId}
                                    onClose={() => setChatModelOpen(false)}
                                />
                            </Modal>
                        </SectionHeaderActions>
                    </SectionHeader>
                    <SectionHeader>
                        <SectionHeaderLabels>
                            <Label sxOverrides={S.sectionTitle}>Requests</Label>
                            <Label sxOverrides={S.sectionSubtitle}>
                                The following is the history of all the features
                                that Beehive is developing
                            </Label>
                        </SectionHeaderLabels>
                        <SectionHeaderActions>
                            <Switch
                                onchange={handleSwitchToggle}
                                label="Only current work"
                                variant="simple"
                            />
                            <SearchInputWrapper
                                search={questsSearchQuery}
                                handleSearch={handleSearchChange}
                            />
                            <AddRowChip
                                label="New request"
                                deleteIcon={<StyledAddCommentIcon />}
                                clickable
                                onClick={() => navigate('/delegate/quest')}
                                onDelete={() => navigate('/delegate/quest')}
                            />
                        </SectionHeaderActions>
                    </SectionHeader>
                    <Requests />
                    <SectionHeader>
                        <SectionHeaderLabels>
                            <Label sxOverrides={S.sectionTitle}>
                                Total net work time for each month
                            </Label>
                            <Label sxOverrides={S.sectionSubtitle}>
                                This graph summarizes the total net work time
                                for each month for the last 6 months.
                            </Label>
                        </SectionHeaderLabels>
                    </SectionHeader>
                    <SectionContentBox>
                        <WorkTime data={workTimeReview} />
                    </SectionContentBox>
                </Root>
            )}
        </Navbar>
    );
};

export default ClientDashboard;
