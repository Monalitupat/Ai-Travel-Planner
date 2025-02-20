import "../App.css";
import Navbar from "./Navbar";

export default function CreateTrip() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="createTrip-Heading">
          <h2 className="fw-bold">Tell us your travel preferences</h2>
          <p className="fs-5">
            just provide some basic information, & our trip planner will
            generate a customized itinerary based on your preferences.
          </p>
        </div>
        <div className="">
          <h3>Your Destination</h3>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          />
        </div>
      </div>
    </>
  );
}
