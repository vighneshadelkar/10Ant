import React from "react";
import Room from "../../component/Images/room.jpg";
import "./SingleRoom.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function SingleRoom(props) {
  const navigate=useNavigate()
    // const location = useLocation();
    // const props = location.state ? location.state.r : null;
    
    // if (!props) {
    //     return null; // or handle the case where props is null
    // }
    const chatbtn=()=>
  {
    navigate('/chat');
  }
  
  return (
    <div className="oneroom-cont">
      <div className="oneroom-wrap">
        <img src={Room} alt="roompic" className="room-pic" />
        <div className="room-desc">
          <div className="loc-title">{props.address}</div>
          <div className="loc-title">Owner : {props.title} </div>
          <div className="owner">Price : {props.price}</div>
          <p>Roommates: {props.tenants}</p>
          <p>
            {/* <br /> */}
            Desc:
            {props.description}
          </p>
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
            <button className="chatbtn" onClick={chatbtn}>Chat with owner</button>

          </div>
        </div>
      </div>
    </div>
  );
}
