import {ConfigProvider, Layout, theme} from 'antd';
import dayjs from 'dayjs';
import {useState} from 'react';
import LayoutContent from './LayoutContent';
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';

const {Footer} = Layout;

function MainLayout() {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: darkTheme
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm
            }}
        >
            <Layout className='min-h-dvh'>
                <LayoutSider darkTheme={darkTheme} />
                <Layout>
                    <LayoutHeader toggleTheme={toggleTheme} />
                    <LayoutContent />
                    <Footer className='text-center'>
                        Awesome Admin Dashboard ©{dayjs().year()}
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default MainLayout;
