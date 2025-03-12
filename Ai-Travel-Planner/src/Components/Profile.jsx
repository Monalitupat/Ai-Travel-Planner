import "../App.css";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Get profile from localStorage
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("currentUser"))?.profile || {
      firstName: "",
      lastName: "",
      email: JSON.parse(localStorage.getItem("currentUser"))?.email || "",
      phone: "",
      bio: "",
      country: "",
      city: "",
      postalCode: "",
      profileImage: "",
    }
  );

  // Function to enable edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to save edited profile
  const handleSave = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    currentUser.profile = profile;

    // Update localStorage
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // Update users list in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((user) =>
      user.email === currentUser.email ? currentUser : user
    );
    localStorage.setItem("users", JSON.stringify(users));

    setIsEditing(false);
  };

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/"); // Redirect to home
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Function to handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "75px" }}>
        <h3 className="mb-3">My Profile</h3>

        {/* Profile Card */}
        <div className="p-3 mb-3" id="profileCard">
          <div className="d-flex align-items-center">
            <label htmlFor="profileImageUpload">
              <img
                src={profile.profileImage || "default-avatar.png"} // Add default image
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="profileImageUpload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <div>
              <h5 className="mb-1">
                {profile.firstName} {profile.lastName}
              </h5>
              <p className="text-muted mb-0">{profile.bio}</p>
              <p className="text-muted mb-0">{profile.city}</p>
            </div>
            <button
              className="btn btn-outline-primary ms-auto"
              onClick={handleEdit}
            >
              ✎ Edit
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-3 mb-3" id="personalInfo">
          <h5>Personal Information</h5>
          {isEditing ? (
            <>
              <input
                className="form-control mb-2"
                name="firstName"
                placeholder="Enter First Name"
                value={profile.firstName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="lastName"
                placeholder="Enter Last Name"
                value={profile.lastName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="email"
                placeholder="Enter Email ID"
                value={profile.email}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="bio"
                placeholder="Enter Your Bio"
                value={profile.bio}
                onChange={handleChange}
              />
            </>
          ) : (
            <div>
              <p>
                <strong>First Name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Phone:</strong> {profile.phone}
              </p>
              <p>
                <strong>Bio:</strong> {profile.bio}
              </p>
            </div>
          )}
        </div>

        {/* Address Information */}
        <div className="card p-3" id="addInfo">
          <h5>Address</h5>
          {isEditing ? (
            <>
              <input
                className="form-control mb-2"
                name="country"
                placeholder="Enter Your Country"
                value={profile.country}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="city"
                placeholder="Enter Your City"
                value={profile.city}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="postalCode"
                placeholder="Enter Pin Code"
                value={profile.postalCode}
                onChange={handleChange}
              />
            </>
          ) : (
            <div>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <p>
                <strong>City/State:</strong> {profile.city}
              </p>
              <p>
                <strong>Pin Code:</strong> {profile.postalCode}
              </p>
            </div>
          )}
        </div>

        {/* Save & Cancel Buttons */}
        {isEditing && (
          <div className="text-center mt-3">
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}

        {/* Logout Button */}
        <div className="text-center mt-3 mb-4">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
