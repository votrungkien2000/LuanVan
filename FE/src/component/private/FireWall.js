import { Navigate, useLocation } from "react-router-dom";
import Admin from "view/admin/Admin"
import HomePage from "view/HomePage"


const FireWall = () => {
    const role = localStorage.getItem('role')

    const location = useLocation();

    if (role == 0) {
        return <Admin/>
    }
    else if (role == 1){
        return <HomePage/>
    }
}

export default FireWall