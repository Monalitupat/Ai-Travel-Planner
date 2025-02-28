import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const trips = [
  {
    name: "North Carolina, USA",
    duration: "2 Days trip with Moderate Budget",
    image: "https://via.placeholder.com/250", // Replace with actual image URL
    link: "/build-trip/north-carolina",
  },
  {
    name: "New York, NY, USA",
    duration: "2 Days trip with Cheap Budget",
    image: "https://via.placeholder.com/250",
    link: "/build-trip/new-york",
  },
  {
    name: "North Carolina, USA",
    duration: "2 Days trip with Cheap Budget",
    image: "https://via.placeholder.com/250",
    link: "/build-trip/north-carolina-cheap",
  },
  {
    name: "Paris, France",
    duration: "2 Days trip with Luxury Budget",
    image: "https://via.placeholder.com/250",
    link: "/build-trip/paris",
  },
  {
    name: "Smoky Mountain, Tennessee, USA",
    duration: "2 Days trip with Cheap Budget",
    image: "https://via.placeholder.com/250",
    link: "/build-trip/smoky-mountain",
  },
  {
    name: "Las Vegas, NV, USA",
    duration: "2 Days trip with Moderate Budget",
    image: "https://via.placeholder.com/250",
    link: "/build-trip/las-vegas",
  },
];

export default function MyTrip() {
  return (
    <>
      <Navbar />

      <div className="container " style={{ marginTop: "60px" }}>
        <h3 className="mb-4">📍 My Trips</h3>
        <div className="row">
          {trips.map((trip, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm">
                <Link to={trip.link} className="text-decoration-none">
                  <img
                    src={trip.image}
                    className="card-img-top"
                    alt={trip.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{trip.name}</h5>
                    <p className="card-text text-muted">{trip.duration}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
