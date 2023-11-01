import React from "react";
import "./Roomcard.css";
import Room from "../Images/room.jpg";
import { useNavigate,Link } from "react-router-dom";

export default function Roomcard(props) {
  const navigate=useNavigate()

  const handleCardClick=(r)=>
  {
    navigate({
      pathname: '/one',
      search: `?price=${props.price}&address=${props.address}&tenants=${props.tenants}&bhk=${props.bhk}&description=${props.description}&title=${props.title}&owner_pkey=${props.owner_pkey}&photo=${props.photo}`
    });
  }

  const chatbtn=()=>
  {
    navigate('/chat');
  }
  return (
    <div className="roomcard" onClick={()=>handleCardClick(props)}>
      <div className="roomcardWrapper">
        <div className="roomDetails">
          <div className="allroomDetails">
            <div >
              <img src={props.photo} alt="img" className="roomImage"></img>
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
            <span className="roomDescription" >
              Description: {props.description}
            </span>
            <hr></hr>
            <div className="roomOwner">
              <span>Owner: {props.title}</span>
            </div>
            <button className="chatbtn" onClick={chatbtn}>Chat with owner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
