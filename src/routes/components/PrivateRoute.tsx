import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../../hooks';
import {APP_ROUTES} from '../constants';

interface Props {
    children: React.ReactNode;
}

const PrivateRoute = ({children}: Props) => {
    const location = useLocation();
    const url = new URLSearchParams();
    url.set('redirect', location.pathname + location.search);
    const {isAuth} = useAuth();

    return (
        <>
            {isAuth ? (
                children
            ) : (
                <Navigate
                    to={{
                        pathname: APP_ROUTES.login,
                        search: url.toString()
                    }}
                />
            )}
        </>
    );
};

export default PrivateRoute;
