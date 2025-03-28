import moment from 'moment';

export const DateTimeFormat = 'DD-MM-YYYY HH:mm:ss';

export const getFormattedTime = (created_at: string) => {
    const diffMs = moment().diff(moment(created_at, 'DD-MM-YYYY HH:mm:ss'));
    const diffDays = Math.floor(diffMs / 86400000); // days
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return diffDays + ' days ' + diffHrs + 'h ' + diffMins + 'm';
};
