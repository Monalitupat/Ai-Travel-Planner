import "../App.css";
import Navbar from "./Navbar";
import TripCard from "./TripCard";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";

export default function MyTrip() {
  const trips = [
    {
      image: "https://your-image-url.com/lasvegas.jpg", // Replace with actual image URL
      location: "Las Vegas, NV, USA",
      duration: "2 Days",
      budget: "Moderate Budget",
      travelers: "5 to 10 People",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="fw-bold mb-3">My Trips</h2>
        <div className="row">
          {trips.map((trip, index) => (
            <div key={index} className="">
              <TripCard {...trip} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
