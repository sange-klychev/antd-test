import {HomeOutlined, SolutionOutlined} from '@ant-design/icons';
import {MenuProps} from 'antd';
import {Key, ReactNode} from 'react';
import {APP_ROUTES} from '../../routes/constants';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Главная', '/', <HomeOutlined />),
    getItem('Отчет', APP_ROUTES.testReport(), <SolutionOutlined />)
];

export default items;
