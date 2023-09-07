import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="circle">

            </div>
            <div className="login">
                <h2>WELCOME TO <br></br><span className="title">10ANT</span></h2>
                <form >
                    <article>Email</article>
                    <input type="email" name="email" id="lgnemail" />
                    <article>Password</article>
                    <input type="password" name="password" id="lgnpass" /><br></br>
                    <button className='submit-btn' type='submit'>Login</button>
                </form>
                <p>Dont have an account?<span className='signupLink'>Signup</span></p>
            </div>
        </div>
    </div>
  )
}
