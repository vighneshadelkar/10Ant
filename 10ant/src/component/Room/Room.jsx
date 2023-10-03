import React, { useEffect, useState } from "react";
import "./Room.css";
import Roomdata from "../Data/Data";
import Roomcard from "../Roomcard/Roomcard";
import axios from 'axios';

export default function Room() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/room/");
        if (response && response.data) {
          setRooms(response.data);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } 
    }

    fetchRooms();
  }, []);

  return (
    <div className="room">
      <div className="roomWrapper">
        {/* <Sidebar/> */}
        <div className="roomCards">
          {rooms?.map((r,index) => {
            return <Roomcard key={r.id} {...r} />;
          })}
        </div>
        <hr className="divider"></hr>
        <div className="maps">
          <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d168134.03925894178!2d72.82531174544626!3d19.1378018543937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spaying%20guest%20rooms%20mumbai%20maps!5e0!3m2!1sen!2sin!4v1692804885420!5m2!1sen!2sin"
            width="400"
            height="650"
            // style={border-radiu:20px;}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
