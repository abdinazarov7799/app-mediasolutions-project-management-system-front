import React from 'react';
import useAuth from "../../hooks/auth/useAuth";

const IsAuth = ({children, ...rest}) => {
    const {isAuthenticated, token = true} = useAuth({});
    return !!(token) ? children : null
};

export default IsAuth;
