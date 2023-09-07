import React from "react";
import "./Signup.css"

export default function Signup() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="circle"></div>
        <div className="login">
          <h2>
            WELCOME TO <br></br>
            <span className="title">10ANT</span>
          </h2>
          <form>
            <article>Username</article>
            <input type="text" name="username" />
            <article>Email</article>
            <input type="email" name="email" />
            <article>Password</article>
            <input type="password" name="password" />
            <article>Confirm Password</article>
            <input type="password" name="password" />
            <br></br>
            <button className="submit-btn" type="submit">
              Signup
            </button>
          </form>
          <p>
            Dont have an account?<span className="signupLink">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
