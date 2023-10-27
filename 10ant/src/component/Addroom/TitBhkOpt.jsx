import React, { useState } from 'react'
import '../../pages/Addroom/Addroom.css';
import sharedImage from '../Images/shared2.jpg';
import maleImage from '../Images/male.jpg';

function TitBhkOpt({ roomData, setroomData, handleInput, selectedOption, setSelectedOption }) {

    const RoomOptions = [
        { id: 'Shared Room', imageUrl: sharedImage },
        { id: 'Private Room', imageUrl: maleImage },
    ];

    return (
        <div className="addroom-comp">
            <div className="title">
                {/* <label htmlFor="title">Title:</label> */}
                <h3>Title:</h3>
                <input
                    type="text"
                    name="title"
                    value={roomData.title}
                    onChange={handleInput}
                    placeholder="eg:1BHK in Mahim"
                    required
                />
            </div>

            <div className="roomOptions">

                <h3>Room Options:</h3>
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