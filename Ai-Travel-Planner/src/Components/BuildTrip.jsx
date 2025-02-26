import React from "react";
import "../App.css";
import img from "../assets/images/p4.avif";
import { useLocation } from "react-router-dom";

export default function BuildTrip() {
  const location = useLocation();
  const {
    destination,
    travelDays,
    travelDate,
    selectedBudget,
    selectedTravel,
  } = location.state || {}; // Handle case when there's no state

  return (
    <>
      <div className="buildtrip-background">
        <div>
          <img src={img} alt="img" className="banner-img" />
        </div>
        <div className="buildtravel-contents">
          <h3>Destination</h3>

          <div className="d-flex">
            <p className="destination-detail p-2 me-4">
              {destination || "N/A"}
            </p>
            <div className="destination-detail p-2">
              {travelDays ? `${travelDays} Days` : "N/A"}
            </div>
            <div className="date-detail ms-4 p-2">
              {travelDate?.startDate
                ? new Date(travelDate.startDate).toDateString()
                : "N/A"}{" "}
              -{" "}
              {travelDate?.endDate
                ? new Date(travelDate.endDate).toDateString()
                : "N/A"}
            </div>
            <div className="destination-detail ms-4 p-2">
              {selectedBudget ? selectedBudget.title : "N/A"}
            </div>
            <div className="destination-detail ms-4 p-2">
              {selectedTravel ? selectedTravel.title : "N/A"}
            </div>
          </div>

          <h3 className="mt-3">Place to Visit</h3>
        </div>
      </div>
    </>
  );
}
