import {TimeRangePickerProps} from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {IStartEndFilterProps} from '../components/filters/RangeDateFilter';

interface Props {
    defaultFrom?: string;
    defaultTo?: string;
    fromPropertyName?: string;
    toPropertyName?: string;
}

const useRangeDateFilter = (props?: Props): IStartEndFilterProps => {
    const {
        defaultFrom = '',
        defaultTo = '',
        fromPropertyName = 'from',
        toPropertyName = 'to'
    } = props || {};
    const [searchParams] = useSearchParams();
    const [dateRange, setDateRange] = useState<{from: string; to: string}>({
        from: searchParams.get(fromPropertyName) ?? defaultFrom,
        to: searchParams.get(toPropertyName) ?? defaultTo
    });

    const rangePresets: TimeRangePickerProps['presets'] = [
        {label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()]},
        {label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()]},
        {label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()]},
        {label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()]}
    ];

    const handleChangeRange = (
        dates: null | (Dayjs | null)[],
        dateStrings: string[]
    ) => {
        if (dates) {
            setDateRange({
                from: dateStrings[0],
                to: dateStrings[1]
            });
        } else {
            setDateRange({
                from: '',
                to: ''
            });
        }
    };

    return {
        dateRange,
        handleChangeRange,
        fromPropertyName,
        toPropertyName,
        rangePresets
    };
};

export default useRangeDateFilter;
