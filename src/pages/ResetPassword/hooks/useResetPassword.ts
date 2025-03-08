import {FormProps} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import {IResetPassword} from '../../../@types/IResetPassword';
import {IUser} from '../../../@types/IUser';

interface IReturnProps {
    handleReset: (fields: IResetPassword) => void;
}

export const useResetPassword = (): IReturnProps => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    const handleReset: FormProps<IResetPassword>['onFinish'] = (fields) => {
        const email = fields.email?.trim();
        const password = fields.password?.trim();
        const confirmPassword = fields.confirmPassword?.trim();
        if (email && password && confirmPassword) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find((user: IUser) => user.email === email);
            if (user) {
                user.password = password;
                localStorage.setItem('users', JSON.stringify(users));
            }
            navigate(url.get('redirect') || '/');
        }
    };

    return {
        handleReset
    };
};
