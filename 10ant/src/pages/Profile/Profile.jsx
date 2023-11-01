import React, { useContext, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import coverImg from "../../component/Images/coverimg.jpg";
import profilePic from "../../component/Images/profilepic.jpg";
import Roomdata from "../../component/Data/Data";
import Roomcard from "../../component/Roomcard/Roomcard";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import "./Profile.css";
import { useState } from "react";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [Rooms, setRooms] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/room/");
      if (response && response.data) {
        setRooms(response.data);
        setFilteredData(
          response.data.filter((item) => item.owner_pkey === user.user_id)
        );
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  console.log(Rooms);

  const filteredData = Rooms.filter((item) => item.owner_pkey === user.user_id);

  console.log(filteredData);

  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <img src={coverImg} alt="coverimg" className="profileCoverImg" />
            <img src={profilePic} alt="profile" className="profilePic"></img>
            <span className="profileInfo">
              <h2 className="username">{user.username}</h2>
              <span className="userInfo">Hello everyone!!</span>
            </span>
          </div>
          <div className="profileRightBottom">
            <h2>YOUR LISTINGS</h2>
            <hr></hr>
            <br></br>
            <div className="roomCards">
              {filteredData.length > 0 ? (
                filteredData.map((r) => {
                  return <Roomcard key={r.id} {...r} />;
                })
              ) : (
                <h1>No listings</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
