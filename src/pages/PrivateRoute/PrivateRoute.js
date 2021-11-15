import React from 'react';
import { Navigate, useLocation} from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { user, isLoading } = useAuth();
    console.log(isLoading, user, children)

    if (isLoading) {
        return <div className="flex w-screen min-h-screen justify center align-middle">
            <div className=" flex mx-auto items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
            </div>
        </div>
    };

    return user?.email ? children : <Navigate to="/login" state={ {from: location }}/>;
};

export default PrivateRoute;