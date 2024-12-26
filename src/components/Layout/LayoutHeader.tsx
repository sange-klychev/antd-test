import {Avatar, Divider, Flex, Space, Switch, theme} from 'antd';
import {Header} from 'antd/es/layout/layout';
import clsx from 'clsx';
import {Moon, Sun, User} from 'lucide-react';
import {CustomIcon} from '../ui';

interface Props {
    className?: string;
    toggleTheme: VoidFunction;
}

function LayoutHeader({className, toggleTheme}: Props) {
    const {
        token: {colorBgContainer}
    } = theme.useToken();

    return (
        <Header
            style={{padding: 0, background: colorBgContainer}}
            className={clsx('h-[4.25rem]', className)}
        >
            <Flex
                justify='end'
                align='center'
                className='px-4'
            >
                <Space
                    split={<Divider type='vertical' />}
                    className='h-[4.25rem]'
                    align='baseline'
                >
                    <Switch
                        checkedChildren={
                            <CustomIcon
                                icon={Sun}
                                size={12}
                            />
                        }
                        unCheckedChildren={
                            <CustomIcon
                                icon={Moon}
                                size={12}
                            />
                        }
                        onClick={toggleTheme}
                        defaultChecked
                    />
                    <Avatar
                        shape='square'
                        size={40}
                        icon={<CustomIcon icon={User} />}
                    />
                </Space>
            </Flex>
        </Header>
    );
}

export default LayoutHeader;
