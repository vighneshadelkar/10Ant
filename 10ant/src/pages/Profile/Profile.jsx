import React, { useState, useContext } from "react";
// import Navbar from "../../components//Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
// import Feed from "../../components/Feed/Feed";
import coverImg from "../../component/Images/coverimg.jpg";
import profilePic from "../../component/Images/profilepic.jpg";
import Roomdata from "../../component/Data/Data";
import Roomcard from "../../component/Roomcard/Roomcard";
// import Pfrightbar from "../../components/Pfrightbar/Pfrightbar";
import "./Profile.css";

export default function Profile() {

  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <img src={coverImg} alt="coverimg" className="profileCoverImg" />
            <img src={profilePic} alt="profile" className="profilePic"></img>
            <span className="profileInfo">
              <h2 className="username">Vighnesh Adelkar</h2>
              <span className="userInfo">Hello everyone!!</span>
            </span>
          </div>
          <div className="profileRightBottom">
            <h2>YOUR LISTINGS</h2>
            <hr></hr>
            <br></br>
            <div className="roomCards">
          {Roomdata.map((r) => {
            return <Roomcard key={r.id} {...r} />;
          })}
        </div>
          </div>
        </div>
      </div>
    </>
  );
}