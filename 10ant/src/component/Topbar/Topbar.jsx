import React from "react";
import "./Topbar.css";
import logo from "../Images/logo.png"

export default function Topbar() {
  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <img src={logo} alt="logo" className="logo"/>
          {/* <h2>10ANT</h2> */}
        </div>
        <div className="navCenter">
          <div>
            <input placeholder="Search" className="searchInput"></input>
          </div>
        </div>
        <div className="navRight">
          <div className="navLinks">
            <h4>HOME</h4>
            <h4>ROOMMATE</h4>
            <h4>ROOM</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}
