import React, { useState } from "react";
import "./Addroom.css";

export default function Addroom() {
  const [roomData, setroomData] = useState({
    name: "",
    location: "",
    price: 0,
    bhk: "",
    description: "",
    roommate: 1,
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setroomData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(roomData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/room", {
      method: "POST",
      body: JSON.stringify(roomData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res) {
      alert("something went wrong");
    }

    if (res) {
      const result = await res.json();
      console.log(result);
      setroomData({
        name: "",
        location: "",
        price: null,
        bhk: "",
        description: "",
        roommate: null,
      });
    }
  };

  return (
    <div className="addroom">
      <div className="addroomWrapper">
        <h2>Add your room: </h2>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              className="name"
              name="name"
              value={roomData.name}
              onChange={handleInput}
              placeholder="egs: Vighnesh Adelkar"
              required
            />
          </div>
          <hr></hr>
          <div className="roomtype">
            <label htmlFor="roomtype">Room type:</label>
            <select name="bhk" onChange={handleInput}>
              <option value="1 bhk">1 Bhk</option>
              <option value="2 bhk">2 Bhk</option>
              <option value="3 bhk">3 Bhk</option>
              <option value="4 bhk">4 Bhk</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
          <div className="cost">
            <label htmlFor="cost">Cost per month(INR):</label>
            <input
              type="number"
              min={1500}
              name="price"
              onChange={handleInput}
              value={roomData.price}
              required
            />
          </div>
          <div className="location">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              value={roomData.location}
              onChange={handleInput}
              placeholder="egs:Mahim,Mumbai"
            />
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              value={roomData.description}
              onChange={handleInput}
              placeholder="Write something about yourself"
              required
            />
          </div>
          <div className="roomates">
            <label htmlFor="roomates">No of roomates you need:</label>
            <input
              type="text"
              name="roommate"
              value={roomData.roommate}
              onChange={handleInput}
              placeholder=""
              required
            />
          </div>
          <button className="create">Post Your add for free</button>
        </form>
      </div>
    </div>
  );
}
