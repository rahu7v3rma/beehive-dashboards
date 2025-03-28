import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateRating as updateRatingApi } from 'src/api/rating';
import { RatingSubject } from 'src/enums/rating';

export const SLICE_NAME = 'rating';

export const ACTION_TYPES = {
    UPDATE_RATING: `${SLICE_NAME}/updateRating`
};

export const updateRating = createAsyncThunk(
    ACTION_TYPES.UPDATE_RATING,
    async (
        {
            ratingAuthorizationCode,
            subject,
            score,
            text
        }: {
            ratingAuthorizationCode: string;
            subject: RatingSubject;
            score: number;
            text: string;
        },
        { rejectWithValue }
    ) => {
        try {
            return await updateRatingApi(
                ratingAuthorizationCode,
                subject,
                score,
                text
            );
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
