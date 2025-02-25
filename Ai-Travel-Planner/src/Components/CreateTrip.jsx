import "../App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/cheap icon.png";
import icon2 from "../assets/images/luxury icon.png";
import icon3 from "../assets/images/moderate icon.png";
import icon4 from "../assets/images/just me.png";
import icon5 from "../assets/images/couple.png";
import icon6 from "../assets/images/family.png";
import icon7 from "../assets/images/friends.png";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTrip() {
  const [selectedDates, setSelectedDates] = useState([null, null]);
  return (
    <>
      <div className="container pb-5">
        <Navbar />
        <div className="container-fluid ">
          <div className="createTrip-Heading">
            <h2 className="fw-bold">Tell us your travel preferences</h2>
            <p className="fs-5">
              just provide some basic information, & our trip planner will
              generate a customized itinerary based on your preferences.
            </p>
          </div>
          <div>
            <h3 className="field">Your Destination</h3>
            <div className="input">
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              />
            </div>
          </div>
          <div>
            <h3 className="field mt-5">
              How many days are you planning your trip ?
            </h3>
            <input
              type="number"
              placeholder="Ex : 3"
              className="input-field1 ms-5"
            />
          </div>
          <div>
            <h3 className="field mt-5">Travel Date</h3>
            <DatePicker
              selected={selectedDates[0]} // 🟢 Fix: Using correct start date
              onChange={(dates) => setSelectedDates(dates)} // Fix: Update state correctly
              startDate={selectedDates[0]}
              endDate={selectedDates[1]}
              selectsRange
              placeholderText="Select your travel dates"
              isClearable
              className="input-field1 ms-5"
            />
            <div>
              <h3 className="field">Budget</h3>
              <div className="card-div">
                <div className="budget-card">
                  <img src={icon1} alt="icon" className="budget-icons" />
                  <p className="card-heading">Cheap</p>
                  <p className="card-subheading">Stay conscious of costs</p>
                </div>

                <div className="budget-card">
                  <img src={icon2} alt="icon" className="budget-icons" />
                  <p className="card-heading">Moderate</p>
                  <p className="card-subheading">
                    Keep cost on the average side
                  </p>
                </div>

                <div className="budget-card">
                  <img src={icon3} alt="icon" className="budget-icons" />
                  <p className="card-heading">Luxury</p>
                  <p className="card-subheading">Don't worry about cost</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="field mt-5">
                Who do you plan on traveling with on your next adventure ?
              </h3>
              <div className="card-div mt-4">
                <div className="budget-card">
                  <img src={icon4} alt="icon" className="budget-icons" />
                  <p className="card-heading">Just Me</p>
                  <p className="card-subheading fs-6">
                    Solo adventures for self-discovery & freedom
                  </p>
                </div>

                <div className="budget-card">
                  <img src={icon5} alt="icon" className="budget-icons" />
                  <p className="card-heading">Couple</p>
                  <p className="card-subheading fs-6">
                    Romantic getaways to create unforgettable memories
                  </p>
                </div>

                <div className="budget-card">
                  <img src={icon6} alt="icon" className="budget-icons" />
                  <p className="card-heading">Family</p>
                  <p className="card-subheading fs-6">
                    Special moments with loved ones on a dream getaway
                  </p>
                </div>
              </div>
              <div className="budget-card mt-3 ms-5">
                <img src={icon7} alt="icon" className="budget-icons" />
                <p className="card-heading">Friends</p>
                <p className="card-subheading fs-6">
                  Fun-filled trips with your favorite people
                </p>
              </div>
            </div>
            <div className="btn-div">
              <Link to={"/preview"}>
                <button className="btn btn-dark fw-bold fs-5 px-4 py-2 preview-btn">
                  Preview Your Trip
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
