import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';




const RequireAuth = ({ children }) => {
    const location = useLocation();

    const key = localStorage.getItem('user')

    if (!localStorage.getItem('user')) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;