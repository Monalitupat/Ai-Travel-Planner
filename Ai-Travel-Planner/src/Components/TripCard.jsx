import React from "react";
import "../App.css";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";

export default function TripCard({
  image,
  location,
  duration,
  budget,
  travelers,
}) {
  return (
    <>
      <div className="card shadow-sm border-0 mb-4">
        <img src={image} className="card-img-top rounded" alt={location} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{location}</h5>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaClock className="text-danger" /> {duration}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaWallet className="text-warning" /> {budget}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaUsers className="text-primary" /> {travelers}
            </span>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-dark">
              <FaPaperPlane className="me-1" /> Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
