import dayjs from 'dayjs';

export const dateFormat = 'DD-MM-YYYY';
export const timeFormat = 'HH:mm';
export const dateTimeFormat = 'DD-MM-YYYY HH:mm';

export const formatDate = (date: string) => {
    if (!date) {
        return '';
    }
    return dayjs(date).format(dateFormat);
};

export const formatDateTime = (date: string) => {
    if (!date) {
        return '';
    }
    return dayjs(date).format(dateTimeFormat);
};

export const currentMonth = () => dayjs().set('date', 1).format(dateFormat);

export const nextMonth = () => {
    const currMonthDays = dayjs().daysInMonth();
    return dayjs().set('date', 1).add(currMonthDays, 'days').format(dateFormat);
};

export const prevMonth = () =>
    dayjs().add(-1, 'months').set('date', 1).format(dateFormat);
