import React, { useState, useEffect } from "react";
import "./Room.css";
import Roomdata from "../Data/Data";
import Roomcard from "../Roomcard/Roomcard";

export default function Room() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [professionFilter, setProfessionFilter] = useState("");
  const [bhkFilter, setBhkFilter] = useState("");
  const [filteredData, setFilteredData] = useState(Roomdata);

  const locationOptions = [...new Set(Roomdata.map((room) => room.location))];
  const bhkOptions = [...new Set(Roomdata.map((room) => room.bhk.toString()))];
  const professionOptions = [...new Set(Roomdata.map((room) => room.profession))];

  const filterData = () => {
    const filtered = Roomdata.filter((room) => {
      //name
      const nameMatch = room.name.toLowerCase().includes(searchQuery.toLowerCase());

      //location 
      const locationMatch = !locationFilter || room.location.toLowerCase() === locationFilter.toLowerCase();

      //price
      const priceMatch = (!priceRange.min || room.price >= parseFloat(priceRange.min)) &&
        (!priceRange.max || room.price <= parseFloat(priceRange.max));

      // profession 
      const professionMatch = !professionFilter || room.profession.toLowerCase() === professionFilter.toLowerCase();

      //BHK 
      const bhkMatch = !bhkFilter || room.bhk.toString() === bhkFilter;

      return nameMatch && locationMatch && priceMatch && professionMatch && bhkMatch;
    });

    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocationFilter("");
    setPriceRange({ min: "", max: "" });
    setProfessionFilter("");
    setBhkFilter("");
    setFilteredData(Roomdata); // Reset to the original data
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [searchQuery, locationFilter, priceRange, professionFilter, bhkFilter]);

  return (
    <div className="room">
      <div className="searchBar">
        {/* <input 
          type="text"
          placeholder="Search"
          className="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
        <div>
        <select className="minimal"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Location</option>
          {locationOptions.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select className="minimal"
          value={professionFilter}
          onChange={(e) => setProfessionFilter(e.target.value)}
        >
          <option value="">Profession</option>
          {professionOptions.map((profession, index) => (
            <option key={index} value={profession}>
              {profession}
            </option>
          ))}
        </select>
        <select className="minimal"
          value={bhkFilter}
          onChange={(e) => setBhkFilter(e.target.value)}
        >
          <option value="">BHK</option>
          {bhkOptions.map((bhk, index) => (
            <option key={index} value={bhk}>
              {`${bhk} BHK`}
            </option>
          ))}
        </select>
          <span className="priceRange">
          Price Range: 
        <input className="minimal"
            type="number"
            placeholder="Min Price"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
          <input className="minimal"
            type="number"
            placeholder="Max Price"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          />
          </span>
        </div>
        
      <button id="nofilter" onClick={clearFilters}>Clear Filters</button>
      </div>
      
      <div className="roomWrapper">
        <div className="roomCards">
          {filteredData.map((room) => (
            <Roomcard key={room.id} {...room} />
          ))}
        </div>
        <hr className="divider" />
        <div className="maps">
          <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d168134.03925894178!2d72.82531174544626!3d19.1378018543937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spaying%20guest%20rooms%20mumbai%20maps!5e0!3m2!1sen!2sin!4v1692804885420!5m2!1sen!2sin"
            width="400"
            height="650"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
