import React from 'react'
import '../../pages/Addroom/Addroom.css';

function PriceImg({ roomData, setroomData, handleInput, houseTypeSelected, sethouseTypeSelected }) {
    return (
        <div className="addroom-comp">
            <div className="city-state">
                <div className="city-state-child">
                    <h3>Deposit:</h3>
                    <input
                        type="number"
                        name="deposit"
                        value={roomData.deposit}
                        onChange={handleInput}
                        placeholder="0"
                        required
                        className='num-inp'
                    />
                </div>
                <div className="city-state-child">
                    <h3>Rent:</h3>
                    <input
                        type="number"
                        name="rent"
                        value={roomData.rent}
                        onChange={handleInput}
                        placeholder="0"
                        required
                        className='num-inp'
                    />
                </div>
            </div>
            <div className="city-state">
                <div className="city-state-child">
                    <h3>Sq-Feet:</h3>
                    <input
                        type="number"
                        name="sqft"
                        value={roomData.sqft}
                        onChange={handleInput}
                        placeholder="0"
                        required
                        className='num-inp'
                    />
                </div>
                <div className="city-state-child">
                    <h3>Tenants Required:</h3>
                    <input
                        type="number"
                        name="tenants"
                        value={roomData.tenants}
                        onChange={handleInput}
                        placeholder="0"
                        required
                        className='num-inp'
                    />
                </div>
            </div>
            <div className="city-state-child">
                <h3>House Type:</h3>
                <div className="custom-select">
                <select name="houseType" onChange={handleInput} value={houseTypeSelected}>
                    <option value="Flat">Flat</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>                    
                </select>
                <div className="select-arrow"></div> 
                </div>
            </div>
        </div>

    )
}

export default PriceImg;