import React, { useState } from 'react'
import '../../pages/Addroom/Addroom.css';
import sharedImage from '../Images/shared2.jpg';
import maleImage from '../Images/male.jpg';

function TitBhkOpt({ roomData, setroomData, handleInput, selectedOption, setSelectedOption, BhkSelected, setBhkSelected }) {

    const RoomOptions = [
        { id: 'Shared Room', imageUrl: sharedImage },
        { id: 'Private Room', imageUrl: maleImage },
    ];
    const inlineHeadingStyle = {
        marginBottom: '6px',
    };

    return (
        <div className="addroom-comp">
            <div className="title">
                {/* <label htmlFor="title">Title:</label> */}
                <h3 style={inlineHeadingStyle}>Title:</h3>
                <input
                    type="text"
                    name="title"
                    value={roomData.title}
                    onChange={handleInput}
                    placeholder="eg:1BHK in Mahim"
                    required
                />
            </div>
            <div className="roomtype">
                {/* <label htmlFor="roomtype">Room type:</label> */}
                <div className="roomtype">
                    <h3>Room Type:</h3>
                    <div className="custom-select">
                        <select name="bhk" onChange={handleInput} value={BhkSelected}>
                            <option value="1 bhk">1 Bhk</option>
                            <option value="2 bhk">2 Bhk</option>
                            <option value="3 bhk">3 Bhk</option>
                            <option value="4 bhk">4 Bhk</option>
                            <option value="Villa">Villa</option>
                        </select>
                        <div className="select-arrow"></div> 
                    </div>
                </div>

            </div>
            <div className="roomOptions">

                <h3 style={inlineHeadingStyle}>Room Options:</h3>
                <div className="image-options">

                    {RoomOptions.map((option) => (
                        <label key={option.id} className="image-option">
                            <input
                                type="radio"
                                name="roomOptions"
                                value={option.id}
                                checked={selectedOption === option.id}
                                onChange={handleInput}
                            />
                            <img src={option.imageUrl} alt={option.id}
                                className={selectedOption === option.id ? 'selected-image' : ''} />
                            <div className="tag-img">{option.id}</div>
                        </label>
                    ))}
                </div>
                <div>
                    {selectedOption && (
                        <div>
                            <h3>Selected Option: {selectedOption}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TitBhkOpt;