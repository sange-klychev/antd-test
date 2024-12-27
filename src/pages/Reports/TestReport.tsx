import {Button, Flex, Space, Table} from 'antd';
import {IData} from '../../@types/IData';
import {RangeDateFilter} from '../../components/filters';
import {useTestReport} from './hooks';

interface Props {
    className?: string;
}

function TestReport({className}: Props) {
    const {
        clearAll,
        clearFilters,
        columns,
        values,
        handleChange,
        setAgeSort,
        rangeDateFilter
    } = useTestReport();

    return (
        <div className={className}>
            <Flex
                className='mb-4'
                justify='space-between'
                gap={2}
            >
                <Space>
                    <Button onClick={setAgeSort}>Sort age</Button>
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button onClick={clearAll}>
                        Clear filters and sorters
                    </Button>
                </Space>
                <RangeDateFilter {...rangeDateFilter} />
            </Flex>
            <Table<IData>
                columns={columns}
                dataSource={values}
                onChange={handleChange}
            />
        </div>
    );
}

export default TestReport;
