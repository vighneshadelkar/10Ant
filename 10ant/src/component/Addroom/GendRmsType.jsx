import React ,{useState} from 'react'
import '../../pages/Addroom/Addroom.css';
import femaleImage from '../Images/female.jpg';
import maleImage from '../Images/male.jpg';
import anyImage from '../Images/any.jpg';


function GendRmsType({ roomData, setroomData, handleInput , genderSelected, setGenderSelected}) {

    const gender = [
        { id: 'Female', imageUrl: femaleImage },
        { id: 'Male', imageUrl: maleImage },      
        { id: 'Any', imageUrl: anyImage }  
      ];

    return (
        <div className="addroom-comp">
            <div className="roomtype">
                {/* <label htmlFor="roomtype">Room type:</label> */}
                <h3>Description</h3>
                <textarea name="desc" id="desc" cols="44" rows="4" onChange={handleInput} value={roomData.desc}></textarea>
                
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