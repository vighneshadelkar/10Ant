import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    let [token, setToken] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8000/api/token', {
            'username': e.target.username.value,
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
                console.log(jwt_decode(response.data.access));
            }
            else {
                alert('Invalid Credentials')
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }                

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


