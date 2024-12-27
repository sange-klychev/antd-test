import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    UserOutlined
} from '@ant-design/icons';
import {Button, Card, Divider, Form, Input} from 'antd';
import {clsx} from 'clsx';
import {useLogin} from './hooks';
import {loginRules} from './validations';

interface Props {
    className?: string;
}

function Login({className}: Props) {
    const {handleLogin} = useLogin();
    const [form] = Form.useForm();

    const Title = () => <div className='text-3xl text-center'>Join</div>;

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
                            onFinish={handleLogin}
                        >
                            <Form.Item
                                label='E-mail'
                                name='email'
                                rules={loginRules.email}
                            >
                                <Input
                                    placeholder='Enter email'
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>
                            <Form.Item
                                label='Password'
                                name='password'
                                rules={loginRules.password}
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
                            <Divider />
                            <Button
                                type='primary'
                                className='w-full'
                                htmlType='submit'
                            >
                                Sign in
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;
