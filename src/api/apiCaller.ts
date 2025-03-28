import {
    refreshToken as authRefreshToken,
    accessToken as authAccessToken
} from 'src/redux/auth/service';
import {
    DelegateQuestRequest,
    DelegateTaskRequest,
    TaskAnalysisRequestParams,
    TaskContextGeneratorParams,
    TaskLongShortGeneratorParams,
    TaskTemplate,
    TaskTimeEstimationParams
} from 'src/types/delegate';
import { QuestSolutionParams } from 'src/types/questSolution';

export var mock = false;

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL || ''}/`;

export function signIn(email: string, password: string): Promise<any> {
    return _callAPI(BASE_URL, 'backend/api/v1/signin', false, 'POST', {
        email,
        password
    });
}

export function signOut(): Promise<any> {
    return _callAPI(BASE_URL, 'backend/api/v1/signout', true, 'POST');
}

export function refreshToken(): Promise<any> {
    return _callAPI(
        BASE_URL,
        'backend/api/v1/auth/refresh',
        false,
        'POST',
        undefined,
        true
    );
}

export function getProjectRepositories(project_id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/client/${project_id}/repositories`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getClientProjectQuests(
    id: string,
    page: number,
    resultsPerPage: number,
    q?: string | undefined,
    statusFilters?: string[] | undefined
): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/client/${id}/quests?page=${page}&resultsPerPage=${resultsPerPage}&q=${
        q || ''
    }`;

    if (statusFilters && statusFilters.length > 0) {
        endpointUrl += `&statusFilters=${statusFilters.join(',')}`;
    }

    return _callAuthenticatedAPI(endpointUrl);
}

export function getClientProjectWorkTimeReivew(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/client/${id}/work-time-review`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjects(): Promise<any> {
    let endpointUrl = 'backend/api/v1/dashboards/projects';
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjectQueue(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/projects/${id}/queue`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjectActivity(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/projects/${id}/activity`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjectContributors(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/projects/${id}/contributors`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjectDelayedTasks(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/projects/${id}/delayed`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getProjectBudgetReview(id: string): Promise<any> {
    let endpointUrl = `backend/api/v1/dashboards/projects/${id}/budget`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function getSkillsBreakdown(): Promise<any> {
    let endpointUrl = 'backend/api/v1/community/skills';
    return _callAuthenticatedAPI(endpointUrl);
}

export function getConstributorsBreakdown(): Promise<any> {
    let endpointUrl = 'backend/api/v1/community/contributors';
    return _callAuthenticatedAPI(endpointUrl);
}

export function getRepositories(): Promise<any> {
    let endpointUrl = 'backend/api/v1/delegation/repositories';
    return _callAuthenticatedAPI(endpointUrl);
}

export function getSKills(): Promise<any> {
    let endpointUrl = 'backend/api/v1/skill';
    return _callAuthenticatedAPI(endpointUrl);
}

export function getTemplates(): Promise<any> {
    let endpointUrl = `backend/api/v1/delegation/templates`;
    return _callAuthenticatedAPI(endpointUrl);
}

export function postDelegateTask(params: DelegateTaskRequest): Promise<any> {
    let endpointUrl = `backend/api/v1/task/delegate`;
    return _callAuthenticatedAPI(endpointUrl, 'POST', params);
}

export function postDelegateQuest(params: DelegateQuestRequest): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/delegate`;
    return _callAuthenticatedAPI(endpointUrl, 'POST', params);
}

export function postTaskTemplate(params: TaskTemplate): Promise<any> {
    let endpointUrl = `backend/api/v1/delegation/template`;
    const body = { ...params };
    delete body['id'];
    delete body['taskType'];
    const res = _callAuthenticatedAPI(endpointUrl, 'POST', body);
    return res;
}

export function putTaskTemplate(params: TaskTemplate): Promise<any> {
    let endpointUrl = `backend/api/v1/delegation/template`;
    const body = {
        ...params,
        templateId: params.id
    };
    delete body['id'];
    delete body['taskType'];
    return _callAuthenticatedAPI(endpointUrl, 'PUT', body);
}

export function deleteTaskTemplate(params: TaskTemplate): Promise<any> {
    let endpointUrl = `backend/api/v1/delegation/template/${params.id}`;
    return _callAuthenticatedAPI(endpointUrl, 'DELETE');
}

export function getTaskDescriptionAnalysis(
    params: TaskAnalysisRequestParams
): Promise<any> {
    const endpoint = 'pollinator/task-description-feedback/api/v1/predict';
    const body = {
        input: {
            title: params.title,
            description: params.description,
            type: params.type
        }
    };
    return _callAuthenticatedAPI(endpoint, 'POST', body);
}

export function getTaskDescriptionGenerator(
    params: TaskLongShortGeneratorParams
): Promise<any> {
    const endpoint = 'pollinator/task-description-generator/api/v1/predict';
    const body = {
        input: params
    };
    return _callAuthenticatedAPI(endpoint, 'POST', body);
}

export function getTaskContextGenerator(
    params: TaskContextGeneratorParams
): Promise<any> {
    const endpoint = 'pollinator/task-context/api/v1/predict';
    const body = {
        input: params
    };
    return _callAuthenticatedAPI(endpoint, 'POST', body);
}

export function getTaskTimeEstimation(
    params: TaskTimeEstimationParams
): Promise<any> {
    const endpoint = 'pollinator/task-time/api/v1/predict';
    const body = {
        input: params
    };
    return _callAuthenticatedAPI(endpoint, 'POST', body);
}

export function postQuestSolution(params: QuestSolutionParams): Promise<any> {
    let endpointUrl = `backend/api/v1/quest/${params.questId}/solution`;
    const body = { ...params };
    delete body['questId'];
    const res = _callAuthenticatedAPI(endpointUrl, 'POST', body);
    return res;
}

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD';

export function _callAuthenticatedAPI(
    endpoint: string,
    method: MethodType = 'GET',
    body?: { [key: string]: any },
    refresh: boolean = false,
    abortable: boolean = false
): Promise<any> {
    return _callAPI(
        BASE_URL,
        endpoint,
        true,
        method,
        body,
        refresh,
        abortable,
        undefined
    ).catch((error) => {
        // if this is not an unauthorized error cascade the failure right away
        if (error.status !== 401) {
            return Promise.reject(error);
        }

        // try refreshing the token and calling the api once again
        return authRefreshToken().then(() => {
            return _callAPI(
                BASE_URL,
                endpoint,
                true,
                method,
                body,
                refresh,
                abortable
            );
        });
    });
}

function _callAPI(
    baseUrl: string,
    endpoint: string,
    authenticated: boolean = false,
    method: MethodType = 'GET',
    body?: { [key: string]: any },
    refresh: boolean = false,
    abortable: boolean = false,
    overrideToken?: string,
    apiKey?: string
): Promise<any> {
    // Get the current user
    const accessToken = overrideToken || authAccessToken();
    const localRefreshToken = localStorage.getItem('refresh_token');

    // The header is assumed to be a JSON
    const config: {
        headers: { [key: string]: string };
        method: string;
        body?: string;
    } = {
        headers: {},
        method: method
    };

    // Adding a body to the API request
    if (body) {
        config['headers'] = { 'Content-Type': 'application/json' };
        config['body'] = JSON.stringify(body);
    }

    // Adding authentication token for requests that require authentication
    if (authenticated && accessToken) {
        config['headers']['Authorization'] = `Bearer ${accessToken}`;
    }

    // Adding a refresh token is needs a token refresher...
    if (refresh && localRefreshToken) {
        config['headers']['Authorization'] = `Bearer ${localRefreshToken}`;
    }

    if (apiKey) {
        config['headers']['x-api-key'] = apiKey;
        config['headers']['Access-Control-Allow-Origin'] = '*';
        config['headers']['Access-Control-Allow-Methods'] = 'POST';
    }

    return fetch(baseUrl + endpoint, config)
        .catch((err) => {
            console.log('api error', err);

            // reject with unknown error, but aborting an abortable request should be
            // distinguishable as it's not necessarily an erroneous path
            return Promise.reject({
                status: -1,
                aborted: abortable && err.name === 'AbortError'
            });
        })
        .then((response) => {
            return response
                .json()
                .catch((err) => {
                    console.log('response parsing error', err);
                    return Promise.reject({ status: response.status });
                })
                .then((responseBody) => {
                    if (response.ok && response.status === 200) {
                        return Promise.resolve(responseBody);
                    } else {
                        // error and description may not be available
                        return Promise.reject({
                            status: response.status,
                            error: responseBody.error,
                            description: responseBody.description
                        });
                    }
                });
        });
}
