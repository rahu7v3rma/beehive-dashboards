import { RatingSubject } from 'src/enums/rating';

export interface Rating {
    subject: RatingSubject;
    score: number;
    text: string;
}
