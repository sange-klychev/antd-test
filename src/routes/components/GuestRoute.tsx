import React, {ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../../hooks';

interface Props {
    children: ReactNode;
}

const GuestRoute = ({children}: Props) => {
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));
    const {isAuth} = useAuth();

    return (
        <>{isAuth ? <Navigate to={url.get('redirect') || '/'} /> : children}</>
    );
};

export default GuestRoute;
