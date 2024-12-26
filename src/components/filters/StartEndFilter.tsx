import dayjs from 'dayjs';
import {useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';

export interface IPeriod {
    title: string;
    onClick: () => void;
}

export interface IStartEndFilterProps {
    fromDate: string;
    toDate: string;
    fromPropertyName: string;
    toPropertyName: string;
    // eslint-disable-next-line no-unused-vars
    setFromDate: (from: string) => void;
    // eslint-disable-next-line no-unused-vars
    setToDate: (to: string) => void;
    periods: IPeriod[];
}

interface IDropdownMenu {
    periods: IPeriod[];
    title?: string;
    // eslint-disable-next-line no-unused-vars
    setFromDate: (from: string) => void;
    // eslint-disable-next-line no-unused-vars
    setToDate: (to: string) => void;
}

function StartEndFilter({
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    periods,
    fromPropertyName,
    toPropertyName
}: IStartEndFilterProps) {
    const isMounted = useRef(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (isMounted.current) {
            const params = {
                ...Object.fromEntries([...searchParams]),
                [fromPropertyName]: String(fromDate),
                [toPropertyName]: String(toDate)
            };
            setSearchParams(params, {replace: true});
        }
        isMounted.current = true;
    }, [fromDate, toDate]);

    return (
        <div className='border startEnd__filter'>
            <div className='startEnd__filter-dates'>
                <div className='startEnd__filter-start mb-2'>
                    <div className='font-weight-bold filter-from'>От:</div>
                    {/* <DateInput
                        name='fromDate'
                        onChange={setFromDate}
                        defaultValue={fromDate}
                        canEdit={true}
                    />
                    <TextInput
                        value='00:00'
                        name='fromTime'
                        className='startEnd__filter-time'
                        mb={0}
                        canEdit={false}
                    /> */}
                </div>
                <div className='startEnd__filter-end'>
                    <div className='font-weight-bold filter-to'>До:</div>
                    {/* <DateInput
                        name='toDate'
                        onChange={setToDate}
                        defaultValue={toDate}
                        canEdit={true}
                    />
                    <TextInput
                        value='00:00'
                        name='toTime'
                        className='startEnd__filter-time'
                        mb={0}
                        canEdit={false}
                    /> */}
                </div>
            </div>
            <DropdownMenu
                periods={periods}
                setToDate={setToDate}
                setFromDate={setFromDate}
            />
        </div>
    );
}

function DropdownMenu({
    periods,
    setFromDate,
    setToDate,
    title = ''
}: IDropdownMenu) {
    const months = [];

    for (let i = 1; i <= 12; ++i) {
        months.push({
            title: dayjs().subtract(i, 'months').format('MMMM (YYYY)'),
            onClick: () => {
                const start = dayjs()
                    .subtract(i, 'months')
                    .startOf('month')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                const end = dayjs()
                    .subtract(i, 'months')
                    .endOf('month')
                    .add(1, 'day')
                    .set('hour', 0)
                    .set('minute', 0)
                    .set('second', 0);
                setFromDate(start.format('DD.MM.YYYY'));
                setToDate(end.format('DD.MM.YYYY'));
            }
        });
    }
    return (
        <button>button</button>
        //     <Dropdown menu={menuProps}>
        //   <Button>
        //     <Space>
        //       Button
        //       <DownOutlined />
        //     </Space>
        //   </Button>
        // </Dropdown>

        //     <DropdownButton
        //         title={title}
        //         variant='info'
        //     >
        //         {_.map(periods, (item, index) => (
        //             <Dropdown.Item
        //                 id={`${index}`}
        //                 key={item.title}
        //                 onClick={item.onClick}
        //             >
        //                 {item.title}
        //             </Dropdown.Item>
        //         ))}
        //         <div className='dropdown-divider' />
        //         {_.map(months, (item, index) => (
        //             <Dropdown.Item
        //                 id={`${index}`}
        //                 key={item.title}
        //                 onClick={item.onClick}
        //             >
        //                 {item.title}
        //             </Dropdown.Item>
        //         ))}
        //     </DropdownButton>
    );
}

export default StartEndFilter;
