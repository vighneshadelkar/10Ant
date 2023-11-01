import React, {useContext} from "react";
import "./Topbar.css";
import logo from "../Images/logo.png"
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Topbar() {
  let {user, logoutUser} = useContext(AuthContext);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <img src={logo} alt="logo" className="logo"/>
          {user && <span> Hello {user.username}!</span>}
          {/* <h2>10ANT</h2> */}
        </div>
        <div className="navCenter">
          <div>
            <input placeholder="Search" className="searchInput"></input>
          </div>
        </div>
        <div className="navRight">
          <div className="navLinks">
            <NavLink to='/'><h4>HOME</h4></NavLink>
            <h4>ROOMMATE</h4>
            <NavLink to='/rooms'><h4>ROOM</h4></NavLink>
            {user && ( <NavLink to='/addroom'><h4>ADDROOM</h4></NavLink>)}  
            {user && ( <NavLink to='/chat/all'><h4>CHATS</h4></NavLink>)}    
            {user ? <NavLink onClick={logoutUser}><h4>LOGOUT</h4></NavLink> : <NavLink to='/login'><h4>LOGIN</h4></NavLink>}
          </div>
        </div>
      </div>
    </nav>
  );
}
