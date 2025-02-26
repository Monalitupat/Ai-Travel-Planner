import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SelectBudgetOptions, SelectTravelsList } from "../Constants/options";

export default function CreateTrip() {
  const location = useLocation();
  const editField = location.state?.editField || null;

  // Preserve previous data if coming from PreviewTrip
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );
  const [travelDays, setTravelDays] = useState(
    location.state?.travelDays || ""
  );
  const [travelDate, setTravelDate] = useState({
    startDate: location.state?.travelDate?.startDate
      ? new Date(location.state.travelDate.startDate)
      : null,
    endDate: location.state?.travelDate?.endDate
      ? new Date(location.state.travelDate.endDate)
      : null,
  });
  const [selectedBudget, setSelectedBudget] = useState(
    location.state?.selectedBudget || null
  );
  const [selectedTravel, setSelectedTravel] = useState(
    location.state?.selectedTravel || null
  );
  const [errors, setErrors] = useState({}); // Store multiple errors

  const navigate = useNavigate();

  // Refs for scrolling
  const destinationRef = useRef(null);
  const travelDaysRef = useRef(null);
  const datePickerRef = useRef(null);
  const budgetRef = useRef(null);
  const travelRef = useRef(null);

  //Function to scroll to the correct section
  useEffect(() => {
    if (editField) {
      const fieldRefs = {
        destination: destinationRef,
        travelDays: travelDaysRef,
        travelDate: datePickerRef,
        budget: budgetRef,
        travel: travelRef,
      };

      const targetRef = fieldRefs[editField];
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [editField]);

  const handlePreviewClick = () => {
    const newErrors = {}; // Reset errors

    if (!destination)
      newErrors.destination = "⚠️ Please enter your destination.";
    if (!travelDays)
      newErrors.travelDays = "⚠️ Please enter the number of travel days.";
    if (!travelDate.startDate || !travelDate.endDate)
      newErrors.travelDate = "⚠️ Please select your travel dates.";
    if (!selectedBudget) newErrors.budget = "⚠️ Please select a budget.";
    if (!selectedTravel)
      newErrors.travel = "⚠️ Please select a travel companion.";

    setErrors(newErrors);

    // If errors exist, scroll to the first missing field
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.destination)
        destinationRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (newErrors.travelDays)
        travelDaysRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (newErrors.travelDate)
        datePickerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (newErrors.budget)
        budgetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (newErrors.travel)
        travelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return; // Stop navigation if errors exist
    }

    // If no errors, navigate to preview page
    navigate("/preview", {
      state: {
        destination,
        travelDays,
        travelDate: {
          startDate: travelDate.startDate.toISOString(),
          endDate: travelDate.endDate.toISOString(),
        },
        selectedBudget,
        selectedTravel,
      },
    });
  };

  return (
    <>
      <div className="container pb-5">
        <Navbar />
        <div className="container-fluid">
          <div className="createTrip-Heading">
            <h2 className="fw-bold">
              Tell us your travel preferences
              <span className="fs-2"> 🏕️🏝️</span>
            </h2>
            <p className="fs-5">
              Just provide some basic information, & our trip planner will
              generate a customized itinerary based on your preferences.
            </p>
          </div>

          {/* Destination Input */}
          <div ref={destinationRef}>
            <label className="field">Your Destination 🌎</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Destination"
              className="input-field1 ms-5"
            />
            {errors.destination && (
              <p className="text-danger">{errors.destination}</p>
            )}
          </div>

          {/* Travel Days Input */}
          <div ref={travelDaysRef}>
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
            {errors.travelDays && (
              <p className="text-danger">{errors.travelDays}</p>
            )}
          </div>

          {/* Travel Date Picker */}
          <div ref={datePickerRef}>
            <h3 className="field mt-5">Travel Date 📅</h3>
            <DatePicker
              selected={travelDate.startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setTravelDate({ startDate: start, endDate: end });
              }}
              startDate={travelDate.startDate}
              endDate={travelDate.endDate}
              selectsRange
              placeholderText="Select your travel dates"
              isClearable
              className="input-field1 ms-5"
            />
            {errors.travelDate && (
              <p className="text-danger">{errors.travelDate}</p>
            )}
          </div>

          {/* Budget Selection */}
          <div ref={budgetRef}>
            <h3 className="field mt-5">Budget 💰</h3>
            <div className="card-div">
              {SelectBudgetOptions.map((item) => (
                <div
                  className={`budget-card ${
                    selectedBudget?.id === item.id ? "selected" : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    setSelectedBudget(item);
                    setErrors((prev) => ({ ...prev, budget: "" })); // Clear error when selected
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} alt="icon" className="budget-icons" />
                  <p className="card-heading">{item.title}</p>
                  <p className="card-subheading">{item.desc}</p>
                </div>
              ))}
            </div>
            {errors.budget && <p className="text-danger">{errors.budget}</p>}
          </div>

          {/* Travel Companion Selection */}
          <div ref={travelRef}>
            <h3 className="field mt-5">
              Who do you plan on traveling with on your next adventure 🚀
            </h3>
            <div className="card-div mt-4">
              {SelectTravelsList.filter((item) => item.id !== 4).map((item) => (
                <div
                  className={`budget-card ${
                    selectedTravel?.id === item.id ? "selected" : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    setSelectedTravel(item);
                    setErrors((prev) => ({ ...prev, travelCompanion: "" })); //Clear error when selected
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} alt="icon" className="budget-icons" />
                  <p className="card-heading">{item.title}</p>
                  <p className="card-subheading ">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Separate row for 'Friends' option */}
            <div className="card-div mt-3 ms-5">
              {SelectTravelsList.filter((item) => item.id === 4).map((item) => (
                <div
                  className={`budget-card ${
                    selectedTravel?.id === item.id ? "selected" : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    setSelectedTravel(item);
                    setErrors((prev) => ({ ...prev, travelCompanion: "" })); //Clear error when selected
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} alt="icon" className="budget-icons" />
                  <p className="card-heading">{item.title}</p>
                  <p className="card-subheading">{item.desc}</p>
                </div>
              ))}
            </div>
            {errors.travel && <p className="text-danger">{errors.travel}</p>}
          </div>

          {/* Preview Button */}
          <div className="btn-div">
            <button
              className="btn btn-dark fw-bold fs-5 px-4 py-2 preview-btn"
              onClick={handlePreviewClick}
            >
              Preview Your Trip
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
