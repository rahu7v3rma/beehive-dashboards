import { messages as AllMessages } from 'src/constants/chat';
import { HTTPMethod } from 'src/enums/request';
import {
    CreateConversationResponseSchema,
    CreateMessageResponseSchema,
    GetConversationResponseSchema,
    GetUserConversationStateResponseSchema,
    MessageSchema
} from 'src/types/chat';
import { _callAuthenticatedAPI } from '../apiCaller';

const WAGGLE_API_PREFIX = 'bh-waggle';

export function getMessagesMock(): Promise<MessageSchema[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(AllMessages);
        }, 2000);
    });
}

export function createConversation(
    entityId: string,
    projectId: number,
    messages?: MessageSchema[]
): Promise<CreateConversationResponseSchema> {
    return _callAuthenticatedAPI(
        `${WAGGLE_API_PREFIX}/api/conversation/v1`,
        HTTPMethod.POST,
        {
            entityId,
            projectId,
            messages
        }
    );
}

export function getConversation(
    conversationId: string
): Promise<GetConversationResponseSchema> {
    return _callAuthenticatedAPI(
        `${WAGGLE_API_PREFIX}/api/conversation/v1/${conversationId}`,
        HTTPMethod.GET
    );
}

export function getUserConversationState(
    conversationId: string
): Promise<GetUserConversationStateResponseSchema> {
    return _callAuthenticatedAPI(
        `${WAGGLE_API_PREFIX}/api/conversation/v1/state/${conversationId}`,
        HTTPMethod.GET
    );
}

export function sendMessage(
    conversationId: string,
    text: string,
    timestampEpochMs: number,
    replyMessageId?: number
): Promise<CreateMessageResponseSchema> {
    return _callAuthenticatedAPI(
        `${WAGGLE_API_PREFIX}/api/message/v1`,
        HTTPMethod.POST,
        {
            conversationId,
            text,
            timestampEpochMs,
            replyMessageId
        }
    );
}

export function deleteMessage(
    conversationId: string,
    messageId: number
): Promise<any> {
    return _callAuthenticatedAPI(
        `${WAGGLE_API_PREFIX}/api/message/v1`,
        HTTPMethod.DELETE,
        {
            conversationId,
            messageId
        }
    );
}
