import {ExclamationCircleOutlined} from '@ant-design/icons';
import {Button, Form, Modal, TableColumnsType} from 'antd';
import {Pen, Trash} from 'lucide-react';
import {ITodo} from '../../../@types/ITodos';
import {useData, useModal} from '../../../hooks';

export const useTodos = () => {
    const {data, saveTodos, remove} = useData();
    const todoModal = useModal();
    const [form] = Form.useForm();
    const [modal, contextHolder] = Modal.useModal();

    const handleOk = () => {
        todoModal.handleClose();
        handleSave(form.getFieldsValue());
        form.resetFields();
    };

    const handleEdit = (fields: ITodo) => {
        form.setFieldsValue(fields);
        todoModal.handleOpen();
    };

    const handleDelete = (fields: ITodo) => {
        modal.confirm({
            title: 'Are you sure?',
            icon: <ExclamationCircleOutlined />,
            content: `Delete todo "${fields.title}"`,
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => remove(fields.id || '')
        });
    };

    const columns: TableColumnsType<ITodo> = [
        {
            title: '',
            width: 65,
            render: (fields) => (
                <Button
                    variant='filled'
                    icon={<Pen size={20} />}
                    onClick={() => handleEdit(fields)}
                />
            )
        },
        {
            title: '',
            width: 65,
            render: (fields) => (
                <Button
                    variant='filled'
                    color='danger'
                    icon={<Trash size={20} />}
                    onClick={() => handleDelete(fields)}
                />
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        }
    ];

    const handleSave = (fields: ITodo) => {
        if (fields.title) {
            saveTodos(fields);
        }
    };

    return {
        columns,
        data,
        handleOk,
        form,
        todoModal,
        contextHolder
    };
};
