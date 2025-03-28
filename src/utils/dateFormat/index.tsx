import moment from 'moment';

const convertDateDiffInReadableFormat = (date: Date, type: string) => {
    const totaldiffInMinutes = Math.floor(
        (new Date().valueOf() - date.valueOf()) / (1000 * 60)
    );

    const totalDays = Math.floor(totaldiffInMinutes / (60 * 24));

    const remainingHours = Math.floor(
        (totaldiffInMinutes - totalDays * 24 * 60) / 60
    );

    const remainingMinutes = Math.floor(
        totaldiffInMinutes - totalDays * 24 * 60 - remainingHours * 60
    );

    let finalDateString = '';

    if (totalDays > 0) {
        finalDateString += totalDays + 'd ';
    }

    if (remainingHours > 0) {
        finalDateString += remainingHours + 'h ';
    }

    if ((totalDays <= 0 || remainingHours <= 0) && remainingMinutes > 0) {
        finalDateString += remainingMinutes + 'm';
    }

    finalDateString += type || ' ago';

    return finalDateString;
};

export default convertDateDiffInReadableFormat;

export const formatTimeCreated = (time: Date) =>
    moment(time).format('MMM DD, YYYY HH:MM');

export const dateAndTimeSeperatedString = (time: Date) => ({
    date: moment(time).format('MMM DD, YYYY'),
    time: moment(time).format('HH:MM')
});

export const netTimeString = (secs: number) => {
    var hours = Math.floor(secs / 3600);
    var minutes = Math.floor(secs / 60) % 60;
    return `${hours || ''}${hours ? 'h ' : ''}${minutes}m`;
};
