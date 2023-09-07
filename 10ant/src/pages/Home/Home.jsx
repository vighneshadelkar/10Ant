import React from "react";
// import Homeimg from "../Images/homeimg.jpg";
import Homeroom from "../../component/Homeroomcard/Homeroom";
import Mumbai from "../../component/Images/mumbai.jpg";
import Banglore from "../../component/Images/banglore.jpg";
import Delhi from "../../component/Images/delhi.jpg";
import Chennai from "../../component/Images/chennai.jpg";
import House from "../../component/Images/houseimg.png";
import Entirehome from "../../component/Images/entirehouse.jpg"
import Coliving from "../../component/Images/coliving.jpg"
import Pg from "../../component/Images/pg.jpg"
import Room from "../../component/Images/room.jpg"
import Flatmate from "../../component/Images/flatmate.jpg"
import People from "../../component/Images/people.jpg"
import Roommate from "../../component/Images/roommate.jpg"
import "./Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="imgdiv">
          <img src={People} alt="homeimg" class="homeimg"></img>
          <h2 id="imgheader">Find Rooms Near You</h2>
          <input
            type="text"
            class="search"
            placeholder="Search by locality"
          ></input>
        </div>

        <div className="homedetails">
          {/* cities */}
          <section>
            <h2>Finding a room made easier than ever!</h2>
            <article>Choose the city in which you want to find a room.</article>
            <div className="cards">
              <Homeroom city="Mumbai" image={Mumbai}></Homeroom>
              <Homeroom city="Banglore" image={Banglore}></Homeroom>
              <Homeroom city="Delhi" image={Delhi}></Homeroom>
              <Homeroom city="Chennai" image={Chennai}></Homeroom>
            </div>
          </section>

          {/* find my room */}
          <section>
            <div className="listRooms">
              <div className="roomsWrapper">
                <div className="content">
                  <h2>List Your Rooms With FindMyRoom</h2>
                  <p>
                    Convert Your Vacant Space Into Revenue Generating Asset. Get
                    The Space Listed And Obtain Visibility From Lakhs Of Users
                    <br></br>
                    Who Are Looking For A Space In Top Cities Of India.
                  </p>
                  <button type="submit" className="listbutton">
                    List Your Space
                  </button>
                </div>
                <div className="house">
                  <img src={House} alt="houseimg" className="houseimg"></img>
                </div>
              </div>
            </div>
          </section>

          <hr></hr>

          <section>
            <div className="gridContainer">
              <div className="gridItem1">
                <h2>
                  Explore The Latest <br></br>Listings
                </h2>
              </div>
              <div className="gridItem">
                <Homeroom city="Roommate" image={Roommate}></Homeroom>
              </div>
              <div className="gridItem">
                <Homeroom city="Flatmate" image={Flatmate}></Homeroom>
              </div>
              <div className="gridItem">
                <Homeroom city="Coliving" image={Coliving}></Homeroom>
              </div>
              <div className="gridItem">
                <Homeroom city="PG" image={Pg}></Homeroom>
              </div>
              <div className="gridItem">
                <Homeroom city="Entire House" image={Entirehome}></Homeroom>
              </div>
              <div className="gridItem">
                <Homeroom city="Room" image={Room}></Homeroom>
              </div>
            </div>
          </section>

          <hr></hr>
        </div>
      </div>
    </div>
  );
}
