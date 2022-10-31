import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const isLogin = () => {

        if (localStorage.getItem('accessToken') !== null) {
            return true;
        }
        else {
            // if (localStorage.getItem('REFRESH_TOKEN') === null)
            //     return false;
            // else {
            //     return true;
            // }
            return false
        }

    }

    const isLoggedIn = isLogin();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return children;
}

export default PrivateRoute