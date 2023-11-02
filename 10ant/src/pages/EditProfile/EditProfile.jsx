import React, { useState, useContext } from "react";
import "./EditProfile.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import Img1 from "./5568530_2879736.jpg";
import { useNavigate } from "react-router-dom";


export default function EditProfile() {
    let { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [profileData, setProfileData] = useState({
        name: user.name || "",
        contact: user.contact || "",
        email: user.email || "",
        bio: user.bio || "",
        profilePic: user.profilePic || "",
    });

    const [selectedFile, setSelectedFile] = useState(null);

    function handleInput(event) {
        const { name, value } = event.target;

        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleFileInput(event) {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(profileData);
        console.log(user.user_id);


        const formData = new FormData();
        formData.append("username", profileData.name);
        formData.append("phone_no", profileData.contact);
        formData.append("email", profileData.email);
        formData.append("bio", profileData.bio);
        formData.append("profile_pic", selectedFile);

        
        const res = await axios.put("http://localhost:8000/api/user/update/"+user.user_id+"/", formData);

        if (!res) {
            alert("Something went wrong");
        }

        if (res) {
            const result = await res.json;
            console.log(result);
        }

        navigate("/profile");
    };

    return (
        <div className="editProfile">
            <div className="form-container">
                <h2>Edit Your Profile: </h2>
                <div className="profile-pic-container">
                    {selectedFile ? (
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Profile Preview"
                        />
                    ) : (
                        <img src={profileData.profilePic} alt="Profile" />
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="contact">
                        <label htmlFor="contact">Contact:</label>
                        <input
                            type="text"
                            name="contact"
                            value={profileData.contact}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="bio">
                        <label htmlFor="bio">Bio:</label>
                        <input
                            type="text"
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="profilePic">Profile Picture:</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="profilePic"
                            onChange={handleFileInput}
                        />
                    </div>
                    <button className="update">Update Profile</button>
                </form>
            </div>
                    <div className="editpagepic">
                        <img src={Img1} alt="Pic" />
                    </div>

        </div>
    );
}
