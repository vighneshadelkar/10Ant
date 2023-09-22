import React from "react";
import "./Roomcard.css";
import Room from "../Images/room.jpg"

export default function Roomcard(props) {
  return (
    <div className="roomcard">
      <div className="roomcardWrapper">
        <div className="roomDetails">
          <div className="allroomDetails">
            <div >
              <img src={Room} alt="img" className="roomImage"></img>
            </div>
              {/* <label htmlFor="Location">Price: </label> */}
            <h4 className="roomPrice">Price:{props.price}</h4>
            <div className="roomLocation">
              <label htmlFor="Location">Location: </label>
              <span className="Location">{props.location}</span>
            </div>
            <div className="roomOwner">
              <span> {props.name}</span>
            </div>
            <div className="roomatesNeeded">
              <label htmlFor="roomates"></label>
              <span className="roomates">Roomates Needed : {props.roommates}</span>
            </div>
            <span className="roomConfiguration">BHK: {props.bhk}</span>
            <hr></hr>
            <span className="roomDescription" min={100}>
             Job:  {props.description}
            </span>
            <span className="roomProfession" min={100}>
             {props.profession}
            </span>
            <hr></hr>
            
            <button className="chatbtn">Chat with owner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
