import "../App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SelectBudgetOptions, SelectTravelsList } from "../Constants/options";

export default function CreateTrip() {
  const [destination, setDestination] = useState("");
  const [travelDays, setTravelDays] = useState("");
  const [travelDate, setTravelDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedBudget, setSelectedBudget] = useState(SelectBudgetOptions[0]); // Default budget
  const [selectedTravel, setSelectedTravel] = useState(SelectTravelsList[0]); // Default travel companion

  // const handleDateChange = (e) => {
  //   setTravelDate(e.target.value); // Ensures date is stored as a string (YYYY-MM-DD format)
  // };

  return (
    <>
      <div className="container pb-5">
        <Navbar />
        <div className="container-fluid ">
          <div className="createTrip-Heading">
            <h2 className="fw-bold">
              Tell us your travel preferences<span className="fs-2"> 🏕️🏝️</span>
            </h2>
            <p className="fs-5">
              just provide some basic information, & our trip planner will
              generate a customized itinerary based on your preferences
            </p>
          </div>
          <div>
            <label className="field">Your Destination 🌎</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Destination"
              className="input-field1 ms-5"
            />
          </div>
          <div>
            <h3 className="field mt-5">
              How many days are you planning your trip 📌
            </h3>
            <input
              type="number"
              value={travelDays}
              onChange={(e) => setTravelDays(e.target.value)}
              placeholder="Enter Days"
              className="input-field1 ms-5"
            />
          </div>
          <div>
            <h3 className="field mt-5">Travel Date 📅</h3>
            <DatePicker
              selected={travelDate.startDate} // Set initial start date
              onChange={(dates) => {
                const [start, end] = dates;
                setTravelDate({ startDate: start, endDate: end }); // Store both dates
              }}
              startDate={travelDate.startDate}
              endDate={travelDate.endDate}
              selectsRange
              placeholderText="Select your travel dates"
              isClearable
              className="input-field1 ms-5"
            />

            <div>
              <h3 className="field">Budget</h3>
              <div className="card-div">
                {SelectBudgetOptions.map((item) => (
                  <div
                    className={`budget-card ${
                      selectedBudget.id === item.id ? "selected" : ""
                    }`}
                    key={item.id}
                    onClick={() => setSelectedBudget(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={item.icon} alt="icon" className="budget-icons" />
                    <p className="card-heading">{item.title}</p>
                    <p className="card-subheading">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="field mt-5">
                Who do you plan on traveling with on your next adventure 🚀
              </h3>
              <div className="card-div mt-4">
                {SelectTravelsList.filter((item) => item.id !== 4).map(
                  (item) => (
                    <div
                      className={`budget-card ${
                        selectedTravel.id === item.id ? "selected" : ""
                      }`}
                      key={item.id}
                      onClick={() => setSelectedTravel(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="budget-icons"
                      />
                      <p className="card-heading">{item.title}</p>
                      <p className="card-subheading fs-6">{item.desc}</p>
                    </div>
                  )
                )}
              </div>

              {/* Separate row for 'Friends' option */}
              <div className="card-div mt-3 ms-5">
                {SelectTravelsList.filter((item) => item.id === 4).map(
                  (item) => (
                    <div
                      className={`budget-card ${
                        selectedTravel.id === item.id ? "selected" : ""
                      }`}
                      key={item.id}
                      onClick={() => setSelectedTravel(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="budget-icons"
                      />
                      <p className="card-heading">{item.title}</p>
                      <p className="card-subheading fs-6">{item.desc}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="btn-div">
              <Link
                to="/preview"
                state={{
                  destination,
                  travelDays,
                  travelDate: {
                    startDate: travelDate.startDate
                      ? travelDate.startDate.toISOString()
                      : "",
                    endDate: travelDate.endDate
                      ? travelDate.endDate.toISOString()
                      : "",
                  },
                  selectedBudget,
                  selectedTravel,
                }}
              >
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
