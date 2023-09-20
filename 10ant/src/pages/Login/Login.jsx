import React, {useContext} from 'react'
import "./Login.css"
import { Link } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';

export default function Login() {
  let {loginUser} = useContext(AuthContext);

  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="circle">

            </div>
            <div className="login">
                <h2>WELCOME TO <br></br><span className="title">10ANT</span></h2>
                <form onSubmit={loginUser}>
                    <article>Username</article>
                    <input type="text" name="username" id="lgnusername" />
                    <article>Email</article>
                    <input type="email" name="email" id="lgnemail" />
                    <article>Password</article>
                    <input type="password" name="password" id="lgnpass" /><br></br>
                    <button className='submit-btn' type='submit'>Login</button>
                </form>
                <p>Dont have an account?<Link to='/signup'><span className='signupLink'>Signup</span></Link></p>
            </div>
        </div>
    </div>
  )
}
