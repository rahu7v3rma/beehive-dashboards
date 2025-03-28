export interface ConversationInfoSchema extends ConversationSchema {
    isLoading?: boolean;
    name: string;
    isOpen: boolean;
    error?: string;
    replyMessage?: MessageSchema | undefined;
    messagesCache: Record<string, MessageSchema>;
}

export interface ConversationSchema {
    id: number;
    entityId: string;
    projectId: number;
    messages?: MessageSchema[];
}

export interface MessageSchema {
    id: number;
    conversationId: number;
    text: string;
    senderUserId: string;
    timestampEpochMs: number;
    isDeleted: boolean;
    replyMessageId?: number;
}


export interface UserConversationStateSchema {
    id: number;
    userId: string;
    conversationId: number;
    lastReadMessage: number;
}


export interface CreateConversationResponseSchema {
    conversation: ConversationSchema;
}

export interface GetConversationResponseSchema {
    messages: MessageSchema[];
}

export interface CreateMessageResponseSchema {
    id: number;
    conversationId: number;
    text: string;
    replyMessageId: number;
}

export interface GetUserConversationStateResponseSchema {
    lastReadMessageId: number;
    numUnreadMessages: number;
}
