import React, { useState, useContext } from "react";
import "./Addroom.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import TitBhkOpt from "../../component/Addroom/TitBhkOpt";
import GendRmsType from "../../component/Addroom/GendRmsType";
import AddAmen from "../../component/Addroom/AddAmen";
import PriceImg from "../../component/Addroom/PriceImg";
import { Form } from "react-router-dom";

export default function Addroom() {
  let {user} = useContext(AuthContext);

  // curr form state
  const [page,setPage]=useState(0);

  const FormTitles=["Add New Room","Room Details","Enter Address","Pricing"]

  const [roomData, setroomData] = useState({
    title: "",
    bhk: "",
    roomOptions:"",
    gender:"",
    houseType:"",
    address:"",
    city:"",
    state:"",
    zip:0,
    description: "",
    tenants: 1,
    sqft:0,
    deposit:0,
    rent:0,
    images:[]
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [description, setDescription] = useState('A description about the room');
  const [genderSelected, setGenderSelected] = useState(null);
  const [BhkSelected, setBhkSelected] = useState("1 BHK");
  const [houseTypeSelected, sethouseTypeSelected] = useState("Flat");

  function handleInput(event) {
    const { name, value } = event.target;
    
    if (name === 'roomOptions') {
      setSelectedOption(value);
      setroomData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name === 'gender') {
      setGenderSelected(value);
      setroomData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name === 'bhk') {
      setBhkSelected(value); 
      setroomData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    else if (name === 'houseType') {
      sethouseTypeSelected(value); 
      setroomData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setroomData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    console.log(roomData);
  }
  

  const PageDisplay=()=>{
    if (page===0) {
      return <TitBhkOpt roomData={roomData} setroomData={setroomData} handleInput={handleInput} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>;
    }
    else if (page===1) {
      return <GendRmsType roomData={roomData} setroomData={setroomData} handleInput={handleInput} genderSelected={genderSelected}  setGenderSelected={setGenderSelected} BhkSelected={BhkSelected}  setBhkSelected={setBhkSelected}/>;
    }
    else if (page===2) {
      return <AddAmen roomData={roomData} setroomData={setroomData} handleInput={handleInput}/>
    }
    else{
      return <PriceImg roomData={roomData} setroomData={setroomData} handleInput={handleInput} houseTypeSelected={houseTypeSelected} sethouseTypeSelected={sethouseTypeSelected}/>
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(roomData);
    console.log(user.user_id);
    
    const res = await axios.postForm("http://localhost:8000/api/room/", {
    owner_pkey: user.user_id,
    title: roomData.title,
    address: roomData.address,
    city: roomData.city,
    state: roomData.state,
    zipcode: roomData.zip,
    description: roomData.description,
    price: roomData.rent,
    bhk: roomData.bhk,
    sqft: roomData.sqft,
    tenants: roomData.tenants,
    room_option: roomData.roomOptions,
    gender: roomData.gender,
    room_type: roomData.houseType,
    deposit: roomData.deposit,
  });

    if (!res) {
      alert("something went wrong");
    }

    if (res) {
      const result = await res.json();
      console.log(result);
      setroomData({
        title: "",
        bhk: "",
        roomOptions:"",
        gender:"",
        houseType:"",
        address:"",
        city:"",
        state:"",
        zip:0,
        description: "",
        tenants: 1,
        sqft:0,
        deposit:0,
        rent:0,
        images:[]
      });
    }
  };

  return (
    <div className="addroom">
      <div className="progressbar">
        <div style={{width:page===0?"25%":page===1?"50%":page===2?"75%":"100%"}}></div>
      </div>
      <div className="addroomWrapper">

        <div className="addroomheader">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="addroom-body">
          {PageDisplay()}
        </div>

          <div className="addroom-foot">
          <button className="btn prev-btn" onClick={()=>{
            setPage((currPg)=> currPg-1);
          }} disabled={page===0}>Previous</button>
          {page===FormTitles.length-1?(
            <button className="btn next-btn" style={{ backgroundColor: 'blue' }} onClick={handleSubmit}>Submit</button>
          ):(<>
          <button className="btn next-btn" onClick={()=>{
            setPage((currPg)=> currPg+1);
          }} disabled={page===FormTitles.length-1}>Next</button>
          </>
          )}
          
          </div>
      </div>
    </div>
  );
}