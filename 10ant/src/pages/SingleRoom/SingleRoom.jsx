import React from "react";
import Room from "../../component/Images/room.jpg";
import './SingleRoom.css'


export default function SingleRoom() {
    return (
        <div className="oneroom-cont">
            <div className="oneroom-wrap">
                <img src={Room} alt="roompic" className="room-pic" />
                <div className="room-desc">
                    <div className="loc-title">Mumbai</div>
                    <div className="loc-title">Owner : Abuzaid Ansari</div>
                    <div className="owner">
                        Price : 2000

                    </div>
                    <p>
                        Roommates: 2
                    </p>
                    <p>
                        {/* <br /> */}
                        Desc:
                        A very Nice room with several amenities along with  a safe and healthy environment. There are children playgrounds and also gyms around.
                    </p>
                <div className="amenities">
                    <div className="loc-title">Amenities:</div>
                    <div className="navRight">
                        <div className="navLinks">
                            Air Condition &nbsp;&nbsp;
                            Refridgerator &nbsp;&nbsp;
                            Washing Machine &nbsp;&nbsp;
                            Television &nbsp;&nbsp;
                            Wifi &nbsp;&nbsp;
                        </div>
                    </div>
                    <div className="loc-title">Contact:</div>
                    <div className="contact-owner">
                        Mobile : 540931258
                        <br />
                        Email: abcd@gmail.com
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

