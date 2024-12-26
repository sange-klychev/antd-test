import {FormProps} from 'antd';
import {useNavigate} from 'react-router-dom';
import urlcat from 'urlcat';
import {ILogin} from '../../../@types/ILogin';

interface IReturnProps {
    handleLogin: (fields: ILogin) => void;
}

export const useLogin = (): IReturnProps => {
    const navigate = useNavigate();

    const handleLogin: FormProps<ILogin>['onFinish'] = (fields) => {
        const email = fields.email?.trim();
        const password = fields.password?.trim();
        if (email && password) {
            const url = urlcat('/chat', {email, password});
            navigate(url);
        }
    };

    return {
        handleLogin
    };
};
