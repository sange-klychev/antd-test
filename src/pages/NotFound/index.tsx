import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useRedux';
import {setPageTitle} from '../../redux/slices';
import {Flex} from 'antd';

function NotFound() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle('404'));
    }, []);

    return (
        <Flex
            justify='center'
            align='center'
            className='h-screen'
            vertical
        >
            <div className='text-3xl mb-2'>Страница не найдена</div>
            <div>
                <Link to='/'>Вернутся на главную</Link>
            </div>
        </Flex>
    );
}

export default NotFound;
