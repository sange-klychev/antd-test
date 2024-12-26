import Cookies from 'js-cookie';

export default function useAuth() {
    const session = Cookies.get('session');
    return {
        isAuth: Boolean(session)
    };
}
