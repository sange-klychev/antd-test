import {DatePicker, TimeRangePickerProps} from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import {useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';

export interface IStartEndFilterProps {
    dateRange: {from: string; to: string};
    fromPropertyName: string;
    toPropertyName: string;
    handleChangeRange: (
        dates: null | (Dayjs | null)[],
        dateStrings: string[]
    ) => void;
    rangePresets: TimeRangePickerProps['presets'];
}

function RangeDateFilter({
    dateRange,
    handleChangeRange,
    rangePresets,
    fromPropertyName,
    toPropertyName
}: IStartEndFilterProps) {
    const isMounted = useRef(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const {RangePicker} = DatePicker;

    const defaultValue =
        dateRange.from && dateRange.to
            ? [dayjs(dateRange.from), dayjs(dateRange.to)]
            : undefined;

    useEffect(() => {
        if (isMounted.current) {
            const params = {
                ...Object.fromEntries([...searchParams]),
                [fromPropertyName]: String(dateRange.from),
                [toPropertyName]: String(dateRange.to)
            };
            setSearchParams(params, {replace: true});
        }
        isMounted.current = true;
    }, [dateRange.from, dateRange.to]);

    return (
        <RangePicker
            defaultValue={defaultValue as any}
            presets={rangePresets}
            onChange={handleChangeRange}
        />
    );
}

export default RangeDateFilter;
