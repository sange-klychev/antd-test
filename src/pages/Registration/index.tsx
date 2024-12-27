import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    UserOutlined
} from '@ant-design/icons';
import {Button, Card, Divider, Form, Input} from 'antd';
import clsx from 'clsx';
import {useRegistration} from './hooks';
import {registrationRules} from './validations';

interface Props {
    className?: string;
}

function index({className}: Props) {
    const {handleRegister} = useRegistration();
    const [form] = Form.useForm();

    const Title = () => (
        <div className='text-3xl text-center'>Registration</div>
    );

    return (
        <div
            className={clsx(
                'px-4 bg-blue-950 text-white flex justify-center items-center min-h-screen',
                className
            )}
        >
            <div className={clsx('max-w-[400px] w-full', className)}>
                <div className={clsx('', className)}>
                    <Card title={<Title />}>
                        <Form
                            layout='vertical'
                            autoComplete='off'
                            form={form}
                            onFinish={handleRegister}
                        >
                            <Form.Item
                                label='Username'
                                name='name'
                                rules={registrationRules.email}
                            >
                                <Input
                                    placeholder='Enter email'
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>
                            <Form.Item
                                label='E-mail'
                                name='email'
                                rules={registrationRules.email}
                            >
                                <Input
                                    placeholder='Enter email'
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>
                            <Form.Item
                                label='Password'
                                name='password'
                                rules={registrationRules.password}
                            >
                                <Input.Password
                                    placeholder='Enter password'
                                    iconRender={(visible) =>
                                        visible ? (
                                            <EyeTwoTone />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        )
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                label='Confirm password'
                                name='confirmPassword'
                                rules={registrationRules.confirmPassword}
                            >
                                <Input.Password
                                    placeholder='Enter confirm password'
                                    iconRender={(visible) =>
                                        visible ? (
                                            <EyeTwoTone />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        )
                                    }
                                />
                            </Form.Item>
                            <Divider />
                            <Button
                                type='primary'
                                className='w-full'
                                htmlType='submit'
                            >
                                Register account
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default index;
