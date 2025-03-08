import {Button, Table} from 'antd';
import {ITodo} from '../../@types/ITodos';
import {TodoModal} from './TodoModal';
import {useTodos} from './hooks';

interface Props {
    className?: string;
}

function Todos({className}: Props) {
    const {columns, data, form, todoModal, contextHolder, handleOk} =
        useTodos();

    return (
        <div className={className}>
            <Button
                onClick={todoModal.handleOpen}
                type='primary'
                className='mb-4'
            >
                Add todo
            </Button>
            <div className='overflow-x-auto'>
                <Table<ITodo>
                    columns={columns}
                    dataSource={data.todos}
                    pagination={false}
                    rowKey='id'
                />
            </div>
            {todoModal.open && (
                <TodoModal
                    open={todoModal.open}
                    form={form}
                    handleCancel={todoModal.handleClose}
                    handleOk={handleOk}
                />
            )}
            {contextHolder}
        </div>
    );
}

export default Todos;
