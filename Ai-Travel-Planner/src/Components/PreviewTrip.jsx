import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon1 from "../assets/images/destination.png";
import icon2 from "../assets/images/date.png";
import icon3 from "../assets/images/budget.png";
import icon4 from "../assets/images/travelers.png";
import icon5 from "../assets/images/days.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { db } from "../Service/firebaseConfig";
import { AI_PROMPT } from "../Constants/options";
import { chatSession } from "../Service/AIModel";
import { doc, setDoc } from "firebase/firestore";

export default function PreviewTrip() {
  const navigate = useNavigate(); // Initialize navigation
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const {
    destination,
    travelDays,
    travelDate,
    selectedBudget,
    selectedTravel,
  } = location.state || {
    destination: "Not selected",
    travelDays: "N/A",
    travelDate: "N/A",
    selectedBudget: { title: "N/A", icon: icon3 },
    selectedTravel: { title: "N/A", icon: icon4 },
  };

  // Function to navigate to CreateTrip and focus on a specific field
  const handleEdit = (field) => {
    navigate("/createtrip", {
      state: {
        editField: field,
        destination,
        travelDays,
        travelDate,
        selectedBudget,
        selectedTravel,
      },
    });
  };

  const OnBuildTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{destination}",
      location.state?.destination
    )
      .replace("{travelDays}", location.state?.travelDays)
      .replace(
        "{travelDate}",
        location.state?.travelDate?.startDate,
        location.state?.travelDate?.endDate
      )
      .replace("{selectBudget}", location.state?.selectedBudget)
      .replace("{selectTravel}", location.state?.selectedTravel);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };
  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));

    // Add a new document in collection "cities"
    // Debugging - Check if user exists
    if (!user || !user.email) {
      console.error("User not found or email is missing:", user);
      alert("User is not logged in. Please log in again.");
      setLoading(false);
      return; // Stop execution
    }

    const docId = Date.now().toString();

    try {
      await setDoc(doc(db, "AITrips", docId), {
        userSelection: location,
        tripData: TripData,
        userEmail: user.email, // Ensure this is not undefined
        id: docId,
      });
      console.log("Trip saved successfully!");
    } catch (error) {
      console.error("Error saving trip:", error);
    }

    setLoading(false);
  };
  return (
    <div>
      <h3 className="loginHeading mt-5">Preview Your Trip</h3>
      <p className="preview-subheading">
        Before generating your trip, please review your selection
      </p>

      <div className="PreviewBox">
        {/* Destination */}
        <div
          className="d-flex ms-4"
          onClick={() => handleEdit("destination")}
          style={{ cursor: "pointer" }}
        >
          <img src={icon1} alt="" className="preview-icon1" />
          <div className="mt-5 ms-4">
            <h4>Destination ✏️</h4>
            <p className="preview-description">{destination}</p>
          </div>
        </div>

        {/* Travel Days */}
        <div
          className="d-flex ms-4"
          onClick={() => handleEdit("travelDays")}
          style={{ cursor: "pointer" }}
        >
          <img src={icon5} alt="" className="preview-icon" />
          <div className="mt-2 ms-4">
            <h4>Travel Day ✏️</h4>
            <p className="preview-description">{travelDays} days</p>
          </div>
        </div>

        {/* Travel Date */}
        <div
          className="d-flex ms-4"
          onClick={() => handleEdit("travelDate")}
          style={{ cursor: "pointer" }}
        >
          <img src={icon2} alt="" className="preview-icon" />
          <div className="mt-2 ms-4">
            <h4>Travel Date ✏️</h4>
            <p className="preview-description">
              {travelDate.startDate
                ? new Date(travelDate.startDate).toDateString()
                : "N/A"}{" "}
              -{" "}
              {travelDate.endDate
                ? new Date(travelDate.endDate).toDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Budget */}
        <div
          className="d-flex ms-4"
          onClick={() => handleEdit("budget")}
          style={{ cursor: "pointer" }}
        >
          <img src={icon3} alt="" className="preview-icon" />
          <div className="mt-2 ms-4">
            <h4>Budget ✏️</h4>
            <p className="preview-description">{selectedBudget.title}</p>
          </div>
        </div>

        {/* Who is Traveling */}
        <div
          className="d-flex ms-4"
          onClick={() => handleEdit("travelCompanion")}
          style={{ cursor: "pointer" }}
        >
          <img src={selectedTravel.icon} alt="" className="preview-icon" />
          <div className="mt-2 ms-4">
            <h4>Who is Traveling ✏️</h4>
            <p className="preview-description">{selectedTravel.title}</p>
          </div>
        </div>

        <div className="preview-buttons">
          <Link
            to={"/buildtrip"}
            state={{
              destination,
              travelDays,
              travelDate: {
                startDate: travelDate?.startDate
                  ? new Date(travelDate.startDate).toISOString()
                  : "",
                endDate: travelDate?.endDate
                  ? new Date(travelDate.endDate).toISOString()
                  : "",
              },
              selectedBudget,
              selectedTravel,
            }}
          >
            <button
              className="btn btn-dark fw-bold fs-6 px-4 py-2"
              onClick={() => OnBuildTrip()}
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
              ) : (
                "Build Your Trip"
              )}
            </button>
          </Link>

          <Link to={"/createtrip"}>
            <button className="btn btn-dark fw-bold fs-6 px-4 py-2 ms-5">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list'
