import React, { useState } from "react";
import "./Signup.css"
import { Link } from "react-router-dom"
import axios from "axios";

export default function Signup() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { username, email, password, confirmpassword } = form;
      if (password !== confirmpassword) {
        alert("Passwords do not match");
      } else {
        console.log(form)
        const res = await axios.post("http://localhost:8000/api/register/", {
          username,
          email,
          password,
        });
        console.log(res.data);
        res.data && window.location.replace("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="circle"></div>
        <div className="login">
          <h2>
            WELCOME TO <br></br>
            <span className="title">10ANT</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <article>Username</article>
            <input type="text" name="username" value={form.username} onChange={handleChange}/>
            <article>Email</article>
            <input type="email" name="email" value={form.email} onChange={handleChange}/>
            <article>Password</article>
            <input type="password" name="password" value={form.password} onChange={handleChange}/>
            <article>Confirm Password</article>
            <input type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleChange}/>
            <br></br>
            <button className="submit-btn" type="submit">
              Signup
            </button>
          </form>
          <p>
            Dont have an account?<Link to='/login'><span className="signupLink">Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
