import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    let [token, setToken] = useState(()=>localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
    let [user, setUser] = useState(()=>localStorage.getItem('user') ? jwt_decode(localStorage.getItem('token')) : null);
    const navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8000/api/token/', {
            'email': e.target.email.value,
            'password': e.target.password.value
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 200){
                setToken(response.data);
                setUser(jwt_decode(response.data.access));

                localStorage.setItem('token', JSON.stringify(response.data));
                localStorage.setItem('user', JSON.stringify(jwt_decode(response.data.access)));
                navigate('/');
            }
            else {
                alert('Invalid Credentials')
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }                

    let logoutUser = () => {
        console.log('logout');
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }
    

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


