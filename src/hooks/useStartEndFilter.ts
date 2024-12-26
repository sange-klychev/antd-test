import dayjs from 'dayjs';
import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {IStartEndFilterProps} from '../components/filters/StartEndFilter';
import {currentMonth, dateFormat, nextMonth} from '../helpers';

interface Props {
    defaultFrom?: string;
    defaultTo?: string;
    fromPropertyName?: string;
    toPropertyName?: string;
}

const useStartEndFilter = (props?: Props): IStartEndFilterProps => {
    const {
        defaultFrom,
        defaultTo,
        fromPropertyName = 'fromDate',
        toPropertyName = 'toDate'
    } = props || {};
    const defaultFromDate = defaultFrom ?? currentMonth();
    const defaultToDate = defaultTo ?? nextMonth();
    const [searchParams] = useSearchParams();
    const [fromDate, setFromDate] = useState<string>(
        searchParams.get(fromPropertyName) ?? defaultFromDate
    );
    const [toDate, setToDate] = useState<string>(
        searchParams.get(toPropertyName) ?? defaultToDate
    );

    const periods = [
        {
            title: 'За последние 30 дней',
            onClick: () => {
                const start = dayjs().subtract(30, 'day');
                const end = dayjs().add(1, 'day');
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За сегодня',
            onClick: () => {
                const start = dayjs()
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .add(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За вчера',
            onClick: () => {
                const start = dayjs()
                    .subtract(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За эту неделю',
            onClick: () => {
                const start = dayjs()
                    .startOf('week')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .endOf('week')
                    .add(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За этот месяц',
            onClick: () => {
                const start = dayjs()
                    .startOf('month')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .endOf('month')
                    .add(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За прошлый месяц',
            onClick: () => {
                const start = dayjs()
                    .subtract(1, 'months')
                    .startOf('month')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .subtract(1, 'months')
                    .endOf('month')
                    .add(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format(dateFormat));
                setToDate(end.format(dateFormat));
            }
        },
        {
            title: 'За все время',
            onClick: () => {
                setFromDate('');
                setToDate('');
            }
        }
    ];

    return {
        fromDate,
        toDate,
        setFromDate,
        setToDate,
        fromPropertyName,
        toPropertyName,
        periods
    };
};

export default useStartEndFilter;
