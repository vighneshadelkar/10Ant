import React, { useState, useContext } from "react";
import "./Addroom.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

export default function Addroom() {
  let {user} = useContext(AuthContext);

  const [roomData, setroomData] = useState({
    price: 0,
    bhk: null,
    description: "",
    tenants: 1,
    sqft:null,
    address:"",
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setroomData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    //console.log(roomData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(roomData);
    console.log(user.user_id);
    const res = await axios.postForm("http://localhost:8000/api/room/", {
      owner_pkey: user.user_id,
      title: "title",
      address: "address",
      price: 10000,
      bhk: 50,
      description: roomData.description,
      tenants: 2,
      sqft:1000,
    });

    if (!res) {
      alert("something went wrong");
    }

    if (res) {
      const result = await res.json;
      console.log(result);
      setroomData({
        price: null,
        bhk: "",
        description: "",
        tenants: null,
        sqft:"",
        address:"",
      });
    }
  };

  return (
    <div className="addroom">
      <div className="addroomWrapper">
        <h2>Add your room: </h2>
        <form onSubmit={handleSubmit}>
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
          {/* <div className="location">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              value={roomData.location}
              onChange={handleInput}
              placeholder="egs:Mahim,Mumbai"
            />
            
          </div> */}
          <div className="roomates">
            <label htmlFor="roomates">Address:</label>
            <input
              type="text"
              name="address"
              value={roomData.address}
              onChange={handleInput}
              placeholder=""
              required
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
              name="tenants"
              value={roomData.tenants}
              onChange={handleInput}
              placeholder=""
              required
            />
          </div>
          <div className="roomates">
            <label htmlFor="roomates">SQFT:</label>
            <input
              type="text"
              name="sqft"
              value={roomData.sqft}
              onChange={handleInput}
              placeholder="sqft"
              required
            />
          </div>
          <button className="create">Post Your add for free</button>
        </form>
      </div>
    </div>
  );
}