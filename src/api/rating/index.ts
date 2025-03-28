import { _callAuthenticatedAPI } from '../apiCaller';
import { HTTPMethod } from 'src/enums/request';
import { RatingSubject } from 'src/enums/rating';

const PRAESEPE_API_PREFIX = 'praesepe';

export function updateRating(
    code: string,
    subject: RatingSubject,
    score: number,
    text: string
): Promise<any> {
    return _callAuthenticatedAPI(
        `${PRAESEPE_API_PREFIX}/api/v1/rating`,
        HTTPMethod.POST,
        {
            code,
            subject,
            score,
            text
        }
    );
}
