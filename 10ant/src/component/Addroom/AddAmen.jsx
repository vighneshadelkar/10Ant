import React from 'react'
import '../../pages/Addroom/Addroom.css';

function AddAmen({ roomData, setroomData, handleInput }) {
  return (
    <div className="addroom-comp">

      <div className="city-state-child">
        <h3>Address:</h3>
        <input
          type="text"
          name="address"
          value={roomData.address}
          onChange={handleInput}
          placeholder="Room No. 4 ,New Mhada, Rajendar Nagar"
          required
          className='address-inp'
        />
      </div>
      <div className="city-state">
        <div className="city-state-child">
          <h3>City:</h3>
          <input
            type="text"
            name="city"
            value={roomData.city}
            onChange={handleInput}
            placeholder="Mumbai"
            required
          // className='address-inp'
          />
        </div>
        <div className="city-state-child">
          <h3>State:</h3>
          <input
            type="text"
            name="state"
            value={roomData.state}
            onChange={handleInput}
            placeholder="Maharashtra"
            required
          // className='address-inp'
          />
        </div>
      </div>
      <div className="city-state-child">
          <h3>Zip:</h3>
          <input
            type="number"
            name="zip"
            value={roomData.zip}
            onChange={handleInput}
            // placeholder="400050"
            required
          className='num-inp'
          />
        </div>

    </div>
  )
}

export default AddAmen