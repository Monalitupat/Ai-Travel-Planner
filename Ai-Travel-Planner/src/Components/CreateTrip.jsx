import "../App.css";
import Navbar from "./Navbar";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
export default function CreateTrip() {
  return (
    <>
      <div className="container">
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

            <h3 className="field">Budget</h3>
            <div className="card-div">
              <div className="budget-card">
                <p>Cheap</p>
                <p>Stay conscious of costs</p>
              </div>

              <div className="budget-card">
                <p>Moderate</p>
                <p>Keep cost on the average side</p>
              </div>

              <div className="budget-card">
                <p>Luxury</p>
                <p>Don't worry about cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
