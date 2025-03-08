import Cookies from 'js-cookie';
import {IUser} from '../@types/IUser';

export default function useAuth() {
    const session = Cookies.get('session');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: IUser) => user.session === session);
    return {
        isAuth: Boolean(session),
        user
    };
}
