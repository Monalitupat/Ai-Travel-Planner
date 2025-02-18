import "../App.css";
import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

export default function CreateTrip() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div>
          <h2 className="fw-bold" style={{ marginTop: "200px" }}>
            Tell us your travel preferences
          </h2>
          <p className="">
            just provide some basic information, & our trip planner will
            generate a customized itinerary based on your preferences.
          </p>
        </div>
        <div>
          <h3>Your Destination</h3>
          {/* <GooglePlacesAutocomplete apiKey="" /> */}
        </div>
      </div>
    </>
  );
}
