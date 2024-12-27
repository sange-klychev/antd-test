import {TableColumnsType, TableProps} from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import {IData} from '../../../@types/IData';
import {useRangeDateFilter} from '../../../hooks';
import db from '../../../mock-data/db.json';

type OnChange = NonNullable<TableProps<IData>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface IFilter {
    text: string;
    value: string;
}

export const useTestReport = () => {
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const data = JSON.parse(JSON.stringify(db) || '[]');
    const [values, setValues] = useState<IData[]>(data);

    const rangeDateFilter = useRangeDateFilter();
    const {dateRange} = rangeDateFilter;

    const unique = (array: IFilter[]) =>
        array
            .filter(
                (item: IFilter, idx: number, self: IFilter[]) =>
                    self.findIndex((v) => v.value === item.value) === idx
            )
            .sort((a: IFilter, b: IFilter) => {
                if (a.text < b.text) {
                    return -1;
                }
                if (a.text > b.text) {
                    return 1;
                }
                return 0;
            });

    const handleChange: OnChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age'
        });
    };

    const columns: TableColumnsType<IData> = [
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
            filters: unique(
                data.map((item: IData) => ({
                    text: item.first_name,
                    value: item.first_name
                }))
            ),
            filteredValue: filteredInfo.first_name || null,
            onFilter: (value, record) =>
                record.first_name.includes(value as string),
            sorter: (a, b) => a.first_name.length - b.first_name.length,
            sortOrder:
                sortedInfo.columnKey === 'first_name' ? sortedInfo.order : null,
            ellipsis: true
        },
        {
            title: 'Last name',
            dataIndex: 'last_name',
            key: 'last_name',
            filters: unique(
                data.map((item: IData) => ({
                    text: item.last_name,
                    value: item.last_name
                }))
            ),
            filteredValue: filteredInfo.last_name || null,
            onFilter: (value, record) =>
                record.last_name.includes(value as string),
            sorter: (a, b) => a.last_name.length - b.last_name.length,
            sortOrder:
                sortedInfo.columnKey === 'last_name' ? sortedInfo.order : null,
            ellipsis: true
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis: true
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.date.length - b.date.length,
            sortOrder:
                sortedInfo.columnKey === 'date' ? sortedInfo.order : null,
            ellipsis: true
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            filters: unique(
                data.map((item: IData) => ({
                    text: item.city,
                    value: item.city
                }))
            ),
            filteredValue: filteredInfo.city || null,
            onFilter: (value, record) => record.city.includes(value as string),
            sorter: (a, b) => a.city.length - b.city.length,
            sortOrder:
                sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
            ellipsis: true
        }
    ];

    useEffect(() => {
        if (dateRange.from && dateRange.to) {
            let filtered = data.filter((item: IData) => {
                let date = dayjs(item.date);
                return (
                    date >= dayjs(dateRange.from) && date <= dayjs(dateRange.to)
                );
            });
            setValues(filtered);
        } else {
            setValues(data);
        }
    }, [dateRange.from, dateRange.to]);

    return {
        columns,
        values,
        rangeDateFilter,
        handleChange,
        clearFilters,
        clearAll,
        setAgeSort
    };
};
