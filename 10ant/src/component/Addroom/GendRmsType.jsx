import React ,{useState} from 'react'
import '../../pages/Addroom/Addroom.css';
import femaleImage from '../Images/female.jpg';
import maleImage from '../Images/male.jpg';
import anyImage from '../Images/any.jpg';


function GendRmsType({ roomData, setroomData, handleInput , genderSelected, setGenderSelected,BhkSelected, setBhkSelected}) {

    const gender = [
        { id: 'Female', imageUrl: femaleImage },
        { id: 'Male', imageUrl: maleImage },      
        { id: 'Any', imageUrl: anyImage }  
      ];

    return (
        <div className="addroom-comp">
            <div className="roomtype">
                {/* <label htmlFor="roomtype">Room type:</label> */}
                <h3>Room Type:</h3>
                <select name="bhk" onChange={handleInput} value={BhkSelected}>
                    <option value="1 bhk">1 Bhk</option>
                    <option value="2 bhk">2 Bhk</option>
                    <option value="3 bhk">3 Bhk</option>
                    <option value="4 bhk">4 Bhk</option>
                    <option value="Villa">Villa</option>
                </select>
            </div>
            <div className="roomOptions">

                <h3>Room Options:</h3>
                <div className="image-options">

                    {gender.map((option) => (
                        <label key={option.id} className="image-option">
                            <input
                                type="radio"
                                name="gender"
                                value={option.id}
                                checked={genderSelected === option.id}
                                onChange={handleInput}
                            />
                            <img src={option.imageUrl} alt={option.id}
                                className={genderSelected === option.id ? 'selected-image' : ''} />
                                <div className="tag-img">{option.id}</div>
                        </label>
                    ))}
                </div>
                <div>
                    {genderSelected && (
                        <div>
                            <h3>Selected Option: {genderSelected}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
        

    )
}

export default GendRmsType