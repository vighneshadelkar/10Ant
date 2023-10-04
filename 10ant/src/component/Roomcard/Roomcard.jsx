import React from "react";
import "./Roomcard.css";
import Room from "../Images/room.jpg";
import { useNavigate } from "react-router-dom";

export default function Roomcard(props) {
  const navigate=useNavigate()

  const handleCardClick=()=>
  {
    navigate('/one')
  }
  return (
    <div className="roomcard" onClick={handleCardClick}>
      <div className="roomcardWrapper">
        <div className="roomDetails">
          <div className="allroomDetails">
            <div >
              <img src={Room} alt="img" className="roomImage"></img>
            </div>
            <h4 className="roomPrice">{props.price} per person</h4>
            <div className="roomLocation">
              <label htmlFor="Location">Location: </label>
              <span className="Location">{props.address}</span>
            </div>
            <div className="roomatesNeeded">
              <label htmlFor="roomates">Roomates Needed: </label>
              <span className="roomates">{props.tenants}</span>
            </div>
            <span className="roomConfiguration">Bhk: {props.bhk}</span>
            <hr></hr>
            <span className="roomDescription" min={100}>
              Description: {props.description}
            </span>
            <hr></hr>
            <div className="roomOwner">
              <span>Owner: {props.title}</span>
            </div>
            <button className="chatbtn">Chat with owner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
