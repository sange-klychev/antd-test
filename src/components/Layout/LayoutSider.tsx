import {Menu} from 'antd';
import Sider from 'antd/es/layout/Sider';
import clsx from 'clsx';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import items from './items';

interface Props {
    className?: string;
    darkTheme?: boolean;
}

function LayoutSider({className, darkTheme}: Props) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const handleSelect = ({key}: {key: string}) => navigate(key);

    return (
        <Sider
            collapsible
            theme={darkTheme ? 'dark' : 'light'}
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={className}
        >
            <div
                className={clsx(
                    'p-2 flex items-center justify-center h-[4.25rem] text-2xl',
                    {
                        'text-white': darkTheme,
                        'text-black': !darkTheme
                    }
                )}
            >
                LOGO
            </div>
            <Menu
                defaultSelectedKeys={['/']}
                theme={darkTheme ? 'dark' : 'light'}
                mode='inline'
                items={items}
                onClick={handleSelect}
            />
        </Sider>
    );
}

export default LayoutSider;
