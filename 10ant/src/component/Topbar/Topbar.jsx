import React, {useContext} from "react";
import "./Topbar.css";
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Topbar() {
  let {user} = useContext(AuthContext);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <img src={logo} alt="logo" className="logo"/>
          {user && <span> Hello {user.user_id}!</span>}
          {/* <h2>10ANT</h2> */}
        </div>
        <div className="navCenter">
          <div>
            <input placeholder="Search" className="searchInput"></input>
          </div>
        </div>
        <div className="navRight">
          <div className="navLinks">
            <Link to='/'><h4>HOME</h4></Link>
            <h4>ROOMMATE</h4>
            <Link to='/rooms'><h4>ROOM</h4></Link>
            {user ? <Link to='/logout'><h4>LOGOUT</h4></Link> : <Link to='/login'><h4>LOGIN</h4></Link>}
            
          </div>
        </div>
      </div>
    </nav>
  );
}
