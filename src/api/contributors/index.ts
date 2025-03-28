import { CONTRIBUTORS_WORK_HISTORY } from 'src/constants/contributors-work-history';
import {
    ADMIN_NOTES,
    CONTRIBUTOR,
    CONTRIBUTORS
} from '../../constants/contributors';
import { AdminNotesType } from '../../types/contributors';

export const getContributors = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(CONTRIBUTORS);
        }, 300);
    });
};

export const getContributorsWorkHistory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(CONTRIBUTORS_WORK_HISTORY);
        }, 300);
    });
};

export const getContributor = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(CONTRIBUTOR);
        }, 300);
    });
};

export const getAdminNotes = () => {
    return new Promise<AdminNotesType[]>((resolve) => {
        setTimeout(() => {
            resolve(ADMIN_NOTES);
        }, 1000);
    });
};

export const saveNotes = (adminNotes: AdminNotesType[]) => {
    return new Promise<AdminNotesType[]>((resolve) => {
        setTimeout(() => {
            resolve(adminNotes);
        }, 1000);
    });
};

export const updateContributorHourlyRate = (hourlyRate: string) => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(hourlyRate);
        }, 1000);
    });
};
