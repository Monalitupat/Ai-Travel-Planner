import "../App.css";
import Navbar from "./Navbar";
import React, { useState } from "react";
import img from "../assets/images/image.png";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Khemansh",
    lastName: "Bisen",
    email: "Khemanshbisen@gmail.com",
    phone: "9322379327",
    bio: "Software Devloper",
    country: "India",
    city: "Gondia , Maharastra",
    postalCode: "441614",
  });
  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleSave = () => setIsEditing(false);

  return (
    <>
      <Navbar />
      <div className="container " style={{ marginTop: "80px" }}>
        <h3 className="mb-3">My Profile</h3>

        {/* Profile Card */}
        <div className="card p-3 mb-3">
          <div className="d-flex align-items-center">
            <img
              src={img}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "75px", height: "75px" }}
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
        <div className="card p-3 mb-3">
          <h5>Personal Information</h5>
          {isEditing ? (
            <>
              <input
                className="form-control mb-2"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
              />
              <button
                className="btn btn-success me-2 mb-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
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
        <div className="card p-3">
          <h5>Address</h5>
          {isEditing ? (
            <>
              <input
                className="form-control mb-2"
                name="country"
                value={profile.country}
                onChange={handleChange}
              />
              <input
                className="form-control mb-2"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />
              {/* <input
                className="form-control mb-2"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleChange}
              /> */}
              <input
                className="form-control mb-2"
                name="taxId"
                value={profile.taxId}
                onChange={handleChange}
              />
              <button
                className="btn btn-success me-2 mb-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
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
                <strong>Pin code:</strong> {profile.postalCode}
              </p>
              {/* <p>
                <strong>TAX ID:</strong> {profile.taxId}
              </p> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
