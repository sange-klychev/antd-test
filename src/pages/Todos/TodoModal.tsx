import {Form, FormInstance, Input} from 'antd';
import {FC} from 'react';
import {AntModal} from '../../components/widgets/AntModal';

interface Props {
    open: boolean;
    handleOk: VoidFunction;
    handleCancel: VoidFunction;
    form: FormInstance;
}

export const TodoModal: FC<Props> = ({open, handleOk, handleCancel, form}) => {
    const Content = () => (
        <Form
            layout='vertical'
            autoComplete='off'
            form={form}
            initialValues={{title: '', description: '', id: ''}}
        >
            <Form.Item
                name='id'
                hidden
            />
            <Form.Item
                label='Title'
                name='title'
            >
                <Input placeholder='Enter title' />
            </Form.Item>
            <Form.Item
                label='Description'
                name='description'
            >
                <Input.TextArea placeholder='Enter description' />
            </Form.Item>
        </Form>
    );
    return (
        <AntModal
            content={<Content />}
            open={open}
            handleOk={handleOk}
            handleCancel={handleCancel}
            title='Todo'
        />
    );
};
