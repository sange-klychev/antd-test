import {FormProps} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {IRegistration} from '../../../@types/IRegistration';

interface IReturnProps {
    handleRegister: (fields: IRegistration) => void;
}

export const useRegistration = (): IReturnProps => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    const handleRegister: FormProps<IRegistration>['onFinish'] = (fields) => {
        const name = fields.name?.trim();
        const email = fields.email?.trim();
        const password = fields.password?.trim();
        const confirmPassword = fields.confirmPassword?.trim();
        if (email && name && password && confirmPassword) {
            const users = JSON.parse(sessionStorage.getItem('users') || '[]');
            users.push({name, email, password, session: uuidv4()});
            sessionStorage.setItem('users', JSON.stringify(users));
            navigate(url.get('redirect') || '/');
        }
    };

    return {
        handleRegister
    };
};
