import {FormProps} from 'antd';
import Cookies from 'js-cookie';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {v4 as uuidv4} from 'uuid';
import {ILogin} from '../../../@types/ILogin';
import {IUser} from '../../../@types/IUser';
import {APP_ROUTES} from '../../../routes/constants';

interface IReturnProps {
    handleLogin: (fields: ILogin) => void;
    handleSignUp: VoidFunction;
    handleForgotPassword: VoidFunction;
}

export const useLogin = (): IReturnProps => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    const handleLogin: FormProps<ILogin>['onFinish'] = (fields) => {
        const email = fields.email?.trim();
        const password = fields.password?.trim();
        if (email && password) {
            const users = JSON.parse(sessionStorage.getItem('users') || '[]');
            const user = users.find((user: IUser) => user.email === email);
            if (user) {
                if (user.password === password) {
                    Cookies.set('session', user.session || uuidv4());
                    navigate(url.get('redirect') || '/');
                } else {
                    toast.error('Invalid email or password');
                }
            } else {
                toast.error(
                    'User with this email does not exist. Please register'
                );
            }
        }
    };

    const handleSignUp = () => {
        navigate(APP_ROUTES.registration);
    };

    const handleForgotPassword = () => {
        navigate(APP_ROUTES.resetPassword);
    };

    return {
        handleLogin,
        handleSignUp,
        handleForgotPassword
    };
};
