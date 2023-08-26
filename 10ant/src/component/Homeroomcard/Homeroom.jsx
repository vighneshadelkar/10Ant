import React from 'react';
import "./Homeroom.css"

export default function Homeroom(props) {
  return (
    <div className="homeroom">
        <div className="homeroomWrapper">
            <div className='card'>
                <img src={props.image} alt="" className="cardimg"/>
                <h2 className='city'>{props.city}</h2>
            </div>
        </div>
    </div>
  )
}
