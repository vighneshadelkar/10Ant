import React from "react";
import "../Sidebar/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <span className="siderbarListitemText">HOME</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">ROOMS</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">ROOMATES</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">ADDROOMS</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">LISTEDROOMS</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">CHATS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
