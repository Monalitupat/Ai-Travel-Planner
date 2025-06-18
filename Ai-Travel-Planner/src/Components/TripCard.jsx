import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { FaWallet, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { fetchUnsplashImage } from "../unsplash"; // ✅ Make sure this is the correct path

export default function TripCard({ trip }) {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      if (trip?.tripData?.destination) {
        if (!imageUrls[trip.tripData.destination]) {
          const imageUrl = await fetchUnsplashImage(trip.tripData.destination);
          setImageUrls((prev) => ({
            ...prev,
            [trip.tripData.destination]: imageUrl,
          }));
        }
      }
    };

    fetchImages();
  }, [trip]);

  return (
    <Link to={"/view-trip/" + trip?.id} className="text-decoration-none">
      <div className="card shadow-sm border-0 mb-4 p-4 pt-1">
        <div className="mytripCard">
          <div>
            <img
              src={
                imageUrls[trip?.tripData?.destination] || "/default-image.jpg"
              }
              className="card-img-top rounded mt-4 "
              alt={trip?.tripData?.destination || "Trip Destination image"}
              style={{ height: "350px", width: "600px" }}
            />
          </div>
          <div className="mytrip-detail">
            <div className="place">
              <h2 className="fw-bold">Destination: </h2>
              <p className="fs-2 mt-2 ps-2">
                {trip?.tripData?.destination || "Destination Name"}
              </p>
            </div>
            <div className="mt-3">
              <p className="d-flex align-items-center">
                <FaCalendarAlt className="text-danger me-2" />
                <strong className="fs-4">Date to Travel:</strong>
                <span className="ms-3 fs-4">
                  {trip?.tripData?.travelDate || "Travel Date"}
                </span>
              </p>
              <p className="d-flex align-items-center">
                <FaCalendarAlt className="text-danger me-2" />
                <strong className="fs-4">Days to Travel:</strong>
                <span className="ms-3 fs-4">
                  {trip?.tripData?.travelDays || "Travel Days"}
                </span>
              </p>
              <p className="d-flex align-items-center">
                <FaWallet className="text-warning me-2" />
                <strong className="fs-4">Budget:</strong>
                <span className="ms-3 fs-4">
                  {trip?.tripData?.selectedBudget || "Budget"}
                </span>
              </p>
              <p className="d-flex align-items-center">
                <FaUsers className="text-primary me-2" />
                <strong className="fs-4">Travel Companion:</strong>
                <span className="ms-3 fs-4">
                  {trip?.tripData?.selectedTravel || "Travel Companion"}
                </span>
              </p>
            </div>
            <Link
              to={"/view-trip/" + trip?.id}
              className="btn btn-dark w-100 mt-3"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
