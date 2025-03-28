import { PostFeedbackRequest } from 'src/types/feedback';
import { FeedbackSource } from 'src/enums/feedback';
import { _callAuthenticatedAPI } from '../apiCaller';
import { HTTPMethod } from 'src/enums/request';

export function postFeedback(params: PostFeedbackRequest): Promise<any> {
    const apiData = { ...params, source: FeedbackSource.FRONTEND };
    return _callAuthenticatedAPI(
        'backend/api/v1/general/report-bug',
        HTTPMethod.POST,
        apiData
    );
}
