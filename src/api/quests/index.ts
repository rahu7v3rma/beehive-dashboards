import {
    RequestApproveRequest,
    RequestModificationsRequest
} from 'src/types/quests';
import { _callAuthenticatedAPI } from '../apiCaller';
import { HTTPMethod } from 'src/enums/request';

export function postRequestModifications(
    questId: string,
    params: RequestModificationsRequest
): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${questId}/request-modifications`;
    return _callAuthenticatedAPI(endpointUrl, HTTPMethod.POST, params);
}

export function postRequestApprove(
    questId: string,
    params: RequestApproveRequest
): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${questId}/approve`;
    return _callAuthenticatedAPI(endpointUrl, HTTPMethod.POST, params);
}

export function getQuest(questId: string): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${questId}`;
    return _callAuthenticatedAPI(endpointUrl, HTTPMethod.GET);
}

export function getQuestSolution(questId: string): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${questId}/solution`;
    return _callAuthenticatedAPI(endpointUrl, HTTPMethod.GET);
}

export function getQuestActivities(questId: string): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${questId}/activities`;
    return _callAuthenticatedAPI(endpointUrl, HTTPMethod.GET);
}
