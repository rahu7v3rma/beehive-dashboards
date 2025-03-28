import { FeedbackType } from 'src/enums/feedback';

export interface PostFeedbackRequest {
    taskId?: string | null;
    questId?: string | null;
    details: string;
    type?: FeedbackType;
    slackNotification: boolean;
    trelloNotification: boolean;
}
