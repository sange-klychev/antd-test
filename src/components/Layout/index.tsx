import {ConfigProvider, Layout, theme} from 'antd';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../hooks';
import {clearStore} from '../../redux/actions';
import LayoutContent from './LayoutContent';
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';

const {Footer} = Layout;

function MainLayout() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [darkTheme, setDarkTheme] = useState(false);
    const session = Cookies.get('session');
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const handleLogout = () => {
        Cookies.remove('session');
        dispatch(clearStore());
        navigate(url.get('redirect') || '/');
    };

    useEffect(() => {
        if (!session) {
            dispatch(clearStore());
            navigate(url.get('redirect') || '/');
            toast.info('Ошибка сессии');
        }
    }, [session]);

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
                    <LayoutHeader
                        toggleTheme={toggleTheme}
                        handleLogout={handleLogout}
                    />
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
