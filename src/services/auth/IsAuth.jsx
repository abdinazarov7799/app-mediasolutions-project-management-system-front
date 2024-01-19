import {isNil} from "lodash";
import useAuth from "../../hooks/auth/useAuth.js";

const IsAuth = ({children}) => {
    const {isAuthenticated = false,token} = useAuth();
    return !!(!isNil(token) && isAuthenticated) ? children : null
};

export default IsAuth;
