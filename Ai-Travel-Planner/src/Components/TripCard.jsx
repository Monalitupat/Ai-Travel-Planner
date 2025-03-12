import React from "react";
import "../App.css";
import { FaWallet, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  return (
    <Link to={"/view-trip/" + trip?.id} className="text-decoration-none">
      <div className="card shadow-sm border-0 mb-4 p-3">
        <img src="./c2.jpg" className="mytrip-img rounded" alt="Trip Image" />

        <div className="mytrip-detail mt-3">
          <h5 className="fw-bold">
            Destination: {trip?.tripData?.destination || "Unknown"}
          </h5>

          <div className="mt-3">
            <p className="d-flex align-items-center">
              <FaCalendarAlt className="text-danger me-2" />
              <strong>Days to Travel:</strong>{" "}
              {trip?.tripData?.travelDays || "N/A"}
            </p>
            <p className="d-flex align-items-center">
              <FaWallet className="text-warning me-2" />
              <strong>Budget:</strong> {trip?.tripData?.selectedBudget || "N/A"}
            </p>
            <p className="d-flex align-items-center">
              <FaUsers className="text-primary me-2" />
              <strong>Travel Companion:</strong>{" "}
              {trip?.tripData?.selectedTravel || "N/A"}
            </p>
          </div>
        </div>

        <Link to={"/view-trip/" + trip?.id} className="btn btn-dark w-100 mt-3">
          View More
        </Link>
      </div>
    </Link>
  );
}
