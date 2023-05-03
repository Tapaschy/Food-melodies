import React, { useContext } from 'react';
import { UserToContext } from '../provider/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loadding } = useContext(UserToContext);
    const location=useLocation();
    if (loadding) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace={true} ></Navigate>;
};

export default PrivateRoutes;