import React ,{useState} from 'react'
import '../../pages/Addroom/Addroom.css';
import femaleImage from '../Images/female.jpg';
import maleImage from '../Images/male.jpg';
import anyImage from '../Images/any.jpg';


function GendRmsType({ roomData, setroomData, handleInput , genderSelected, setGenderSelected, description, setDescription}) {

    const gender = [
        { id: 'Female', imageUrl: femaleImage },
        { id: 'Male', imageUrl: maleImage },      
        { id: 'Any', imageUrl: anyImage }  
      ];

    return (
        <div className="addroom-comp">
            <div className='description'>
                <h3>Description:</h3>
                <textarea
                    type="text"
                    name="description"
                    value={roomData.description}
                    onChange={handleInput}
                    placeholder="A description about the room"
                    required
                    className='address-inp'
                />
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