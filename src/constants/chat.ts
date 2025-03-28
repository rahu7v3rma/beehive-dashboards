import { ConversationSchema, MessageSchema } from 'src/types/chat';

export const conversations: ConversationSchema[] = [
    { id: 1, entityId: 'p-1234', projectId: 1234, messages: [] },
    { id: 2, entityId: 'p-567', projectId: 567, messages: [] },
    { id: 3, entityId: 'p-789', projectId: 789, messages: [] },
    { id: 4, entityId: 'p-135', projectId: 135, messages: [] },
    { id: 5, entityId: 'p-357', projectId: 357, messages: [] },
    { id: 6, entityId: 'p-790', projectId: 790, messages: [] }
];

export const messages: MessageSchema[] = [
    {
        id: 1,
        conversationId: 3,
        text: 'I have an issue with project 321',
        senderUserId: 'user1',
        timestampEpochMs: 111000,
        isDeleted: false
    },
    {
        id: 2,
        conversationId: 1,
        text: 'Hello, how are you?',
        senderUserId: 'user1',
        timestampEpochMs: 111,
        isDeleted: false
    },
    {
        id: 3,
        conversationId: 1,
        text: 'I am good, thanks! How about you?',
        senderUserId: 'user2',
        timestampEpochMs: 112,
        isDeleted: false,
        replyMessageId: 6
    },
    {
        id: 4,
        conversationId: 1,
        text: 'Doing well too!',
        senderUserId: 'user1',
        timestampEpochMs: 113,
        isDeleted: false
    },
    {
        id: 5,
        conversationId: 1,
        text: 'Have you seen the new update?',
        senderUserId: 'user2',
        timestampEpochMs: 114,
        isDeleted: false
    },
    {
        id: 6,
        conversationId: 1,
        text: 'Yes, it looks great!',
        senderUserId: 'user1',
        timestampEpochMs: 115,
        isDeleted: false,
        replyMessageId: 9
    }
];
