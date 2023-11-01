import React, { useContext, useState } from "react";
import Room from "../../component/Images/room.jpg";
import "./SingleRoom.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function SingleRoom() {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const price = searchParams.get("price");
  const address = searchParams.get("address");
  const tenants = searchParams.get("tenants");
  const bhk = searchParams.get("bhk");
  const description = searchParams.get("description");
  const title = searchParams.get("title");
  const owner_pkey = searchParams.get("owner_pkey");
  const photo = searchParams.get("photo");
  const [count, setcount] = useState(0);
  const [conversations, setConversations] = useState([]);

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
          <div className="loc-title">Address: {address}</div>
          <div className="loc-title">Owner : {title} </div>
          <div className="owner">Price : {price}</div>
          <div className="loc-title">Bhk: {bhk}</div>
          <p className="loc-title">Roommates: {tenants}</p>
          <div>
            <p className="loc-title">Desc:</p>
            {description}S
          </div>
          <div className="amenities">
            <div className="loc-title">Amenities:</div>
            <div className="navRight">
              <div className="navLinks">
                Air Condition &nbsp;&nbsp; Refridgerator &nbsp;&nbsp; Washing
                Machine &nbsp;&nbsp; Television &nbsp;&nbsp; Wifi &nbsp;&nbsp;
              </div>
            </div>
            <div className="loc-title">Contact:</div>
            <div className="contact-owner">
              Mobile : 540931258
              <br />
              Email: abcd@gmail.com
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
