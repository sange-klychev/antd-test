import {theme} from 'antd';
import {Content} from 'antd/es/layout/layout';
import clsx from 'clsx';
import {Outlet} from 'react-router-dom';

interface Props {
    className?: string;
}

function LayoutContent({className}: Props) {
    const {
        token: {colorBgContainer, borderRadiusLG}
    } = theme.useToken();

    return (
        <Content className={clsx('mx-4 mt-4', className)}>
            <div
                className={clsx('p-6 min-h-full')}
                style={{
                    backgroundColor: colorBgContainer,
                    borderRadius: borderRadiusLG
                }}
            >
                <Outlet />
            </div>
        </Content>
    );
}

export default LayoutContent;
