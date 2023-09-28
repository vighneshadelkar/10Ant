import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = () => {
    let {user} = useContext(AuthContext);

    console.log("User: " + user)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet /> : <Navigate to="/login" />;
} 

export default PrivateRoute;