import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/src/Service/firebaseConfig";
import axios from "axios";

const OPENAI_API_KEY = import.meta.env.REACT_APP_OPENAI_API_KEY;

const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data[0].url;
  } catch (error) {
    console.error("Error generating AI image:", error);
  }
};

export default function BuildTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    if (tripId) {
      GetTripData(); // ✅ Now this function is defined before use
    }
  }, [tripId]);

  useEffect(() => {
    if (trip?.tripData?.itinerary) {
      trip.tripData.itinerary.forEach((dayPlan) => {
        dayPlan.plan.forEach(async (place) => {
          if (!imageUrls[place.placeName]) {
            const imageUrl = await fetchAIImage(place.placeName);
            setImageUrls((prev) => ({ ...prev, [place.placeName]: imageUrl }));
          }
        });
      });
    }
  }, [trip]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const tripData = docSnap.data();

      // Convert itinerary object to an array
      const itineraryArray = tripData.tripData?.itinerary
        ? Object.keys(tripData.tripData.itinerary).map((day) => ({
            day,
            ...tripData.tripData.itinerary[day],
          }))
        : [];

      setTrip({
        ...tripData,
        tripData: {
          ...tripData.tripData,
          itinerary: itineraryArray,
        },
      });
    } else {
      console.log("No Such Document");
    }
  };

  return (
    <>
      <div className="card shadow-sm border-0 mb-4">
        <img
          src="/c2.jpg"
          className="card-img-top rounded"
          alt={trip?.tripData?.destination || "Trip Location"}
          style={{ height: "500px" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {trip?.tripData?.destination || "Trip Location"}
          </h5>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaClock className="text-danger" />
              {trip?.tripData?.travelDays || "Trip Days"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaClock className="text-danger" />
              {trip?.tripData?.travelDate || "Trip Date"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaWallet className="text-warning" />
              {trip?.tripData?.selectedBudget || "Trip budget"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaUsers className="text-primary" />
              {trip?.tripData?.selectedTravel || "Traveler"}
            </span>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-dark">
              <FaPaperPlane className="me-1" /> Share
            </button>
          </div>
        </div>
      </div>

      <section className="container my-5">
        <h3 className="mb-4">🏨 Hotel Recommendations</h3>
        <div className="row">
          {trip?.tripData?.hotels?.map((hotel, index) => (
            <Link
              to={
                "https://www.google.com/maps/search/?api=1&query=" +
                hotel.hotelName +
                ", " +
                hotel?.hotelAddress
              }
              target="_blank"
            >
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm">
                  <img
                    src={hotel.image || "/default-image.jpg"}
                    className="card-img-top"
                    alt={hotel.hotelName}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{hotel.hotelName}</h5>
                    <p className="card-text">
                      📍 {hotel.hotelAddress} <br />
                      💰 <strong>{hotel.Price}</strong> <br />⭐
                      <strong>{hotel.rating}</strong>
                    </p>
                    <Link
                      to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName}`}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View on Map
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container my-5">
        <h3 className="mb-4">📍 Places to Visit</h3>
        <div className="row">
          {trip?.tripData?.itinerary?.map((dayPlan, index) => (
            <div key={index} className="col-12">
              <h4 className="text-muted fw-bold mb-3">
                {dayPlan.day} - {dayPlan.theme}
              </h4>
              <div className="row">
                {dayPlan.plan?.map((place, i) => (
                  <div key={i} className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card shadow-sm">
                      <img
                        src={imageUrls[place.placeName] || "/default-image.jpg"}
                        className="card-img-top"
                        alt={place.placeName}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{place.placeName}</h5>
                        <p className="card-text">{place.placeDetails}</p>
                        <p>
                          🕒 {place.timeToTravel} | 💰 {place.ticketPricing}
                        </p>
                        <Link
                          to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
                          target="_blank"
                          className="btn btn-primary"
                        >
                          View on Map
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
