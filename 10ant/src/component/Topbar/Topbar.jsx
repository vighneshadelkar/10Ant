import React from "react";
import "./Topbar.css"

export default function Topbar() {
  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <span>10Ant</span>
        </div>
        <div className="navCenter">
          <div>
            <input placeholder="Search" className="searchInput"></input>
          </div>
        </div>
        <div className="navRight">
          <div className="navLinks">
            <span>Home</span>
            <span>Room</span>
            <span>Roommates</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
