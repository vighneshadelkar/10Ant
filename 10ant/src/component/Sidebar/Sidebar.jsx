import React from "react";
import "../Sidebar/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <span className="siderbarListitemText">Dashboard</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">Rooms</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">Roomates</span>
          </li>
          <li className="sidebarListitem">
            <span className="siderbarListitemText">Chats</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
