import React from "react";
import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <span className="siderbarListitemText"><Link to={'/home'}>HOME</Link></span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText"><Link to={'/rooms'}>ROOMS</Link></span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText"><Link to={'/addroom'}>ADDROOM</Link></span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText"><Link to={'/chat/all'}>CHATS</Link></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
