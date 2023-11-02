import React, { useContext, useState } from "react";
import Room from "../../component/Images/room.jpg";
import "./SingleRoom.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function SingleRoom() {
  const { user } = useContext(AuthContext);

  const [ownerDetails, setOwnerDetails] = useState([{}]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const price = searchParams.get("price");
  const address = searchParams.get("address");
  const city = searchParams.get("city");
  const tenants = searchParams.get("tenants");
  const bhk = searchParams.get("bhk");
  const room_type = searchParams.get("room_type");
  const description = searchParams.get("description");
  const title = searchParams.get("title");
  const owner_pkey = searchParams.get("owner_pkey");
  const photo = searchParams.get("photo");
  const list_date = searchParams.get("list_date");
  const [count, setcount] = useState(0);
  const [conversations, setConversations] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/user/" + owner_pkey + "/"
      );
      if (response && response.data) {
        console.log(response.data);
        setOwnerDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const createConvo = async (owner_pkey) => {
    const existingConvo = conversations.find(
      (convo) =>
        (convo.senderId === user.user_id && convo.receiverId === owner_pkey) ||
        (convo.senderId === owner_pkey && convo.receiverId === user.user_id)
    );

    if (existingConvo) {
      console.log("Conversation already exists");
      navigate({
        pathname: '/chat',
        search: `?owner_pkey=${owner_pkey}`
      });
      return;
    }
    try {
      const newConversation = {
        senderId: user.user_id.toString(),
        receiverId: owner_pkey,
      };

      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConversation),
        redirect: "follow",
      };

      let res = await fetch(
        "http://localhost:9000/conversation/",
        requestOptions
      );

      if (res.ok) {
        setcount((prev) => prev + 1);
        navigate({
          pathname: '/chat',
          search: `?owner_pkey=${owner_pkey}`
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="oneroom-cont">
      <div className="oneroom-wrap">
        <img src={photo} alt="roompic" className="room-pic" />
        <div className="room-desc">
          <div className="loc-title"><h2>{title} </h2></div><br></br>
          <div className="owner">Price: {price}</div><br></br>
          <div className="roomLocation">
              <strong><span className="Location">{city}</span></strong> | <strong><span className="roomates">{bhk}</span></strong> | <strong><span className="houseType">{room_type} </span></strong>
          </div> 
          <br></br>
          <div>
            Description: {description}
          </div>
          <div className="loc-title">Address: {address}</div>
          <br></br>
          <div className="amenities">
            <div className="navRight">
              <div className="navLinks">
                Air Condition &nbsp;&nbsp; Refrigerator &nbsp;&nbsp; Washing
                Machine &nbsp;&nbsp; Television &nbsp;&nbsp; Wifi &nbsp;&nbsp;
              </div>
            </div>
            <br></br><br></br>
            <div className="contact-owner">
              Name: {ownerDetails.username}
              &nbsp;&nbsp;
              Email: {ownerDetails.email}
              &nbsp;&nbsp;
              Phone: {ownerDetails.username}
            </div>
            <button className="chatbtn" onClick={() => createConvo(owner_pkey)}>
              Chat with owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
