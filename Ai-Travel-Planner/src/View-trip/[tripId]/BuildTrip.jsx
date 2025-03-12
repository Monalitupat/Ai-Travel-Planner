import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "/src/Service/firebaseConfig";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

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
  const navigate = useNavigate(); // ✅ Initialize navigation function

  const [showPopup, setShowPopup] = useState(false);

  const handleSaveTrip = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user
    if (!user) {
      console.error("User not logged in");
      return;
    }

    try {
      const tripData = {
        userEmail: user.email,
        tripData: { ...trip.tripData }, // Save full trip details
        userSelection: { ...trip.userSelection }, // Save user selections
        createdAt: new Date(), // Timestamp
      };

      const tripRef = doc(db, "AITrips", tripId || Date.now().toString()); // Unique tripId if not available
      await setDoc(tripRef, tripData); // Use setDoc instead of addDoc

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/home"); // Redirect to My Trip page
      }, 2000);
    } catch (error) {
      console.error("Error saving trip:", error);
    }
  };
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

      // Convert itinerary object to array & sort by day number
      const itineraryArray = tripData.tripData?.itinerary
        ? Object.entries(tripData.tripData.itinerary)
            .map(([key, value]) => ({
              day: key, // e.g., "day1", "day2", etc.
              ...value,
            }))
            .sort((a, b) => {
              // Extract numeric part of "day1", "day2", etc.
              const dayNumberA = parseInt(a.day.replace(/\D/g, ""), 10);
              const dayNumberB = parseInt(b.day.replace(/\D/g, ""), 10);
              return dayNumberA - dayNumberB;
            })
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
      <div className="card-body mt-5">
        {/* Information Section */}
        <div className="  border-0 fs-3" style={{ marginTop: "30px" }}>
          <h2
            style={{
              marginLeft: "130px",
              marginTop: "50px",
              fontWeight: "bold",
            }}
          >
            Build Your Trip
          </h2>
          <img
            src="/c2.jpg"
            className="card-img-top rounded mt-4"
            //    alt={trip?.userSelection?.location?.label || "Trip Location"}
            style={{ height: "450px", width: "1250px", marginLeft: "130px" }}
          />

          <div className="card-body" style={{ marginLeft: "130px" }}>
            <h2 className="card-title fw-bold mt-4">
              {trip?.tripData?.destination || "Trip Location"}
            </h2>
            <div className="d-flex">
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-light text-dark d-flex align-items-center gap-1">
                  📆
                  {trip?.tripData?.travelDays || "Trip Days"}
                </span>
                <span className="badge bg-light text-dark d-flex align-items-center gap-1">
                  📅
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
              <div className="mt-1 ms-2">
                <button className="btn btn-light py-1 px-2 fs-5">
                  <FaPaperPlane className="me-1 text-dark" />
                  <span className="fw-bold">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container my-5">
        <h3 className="hotel-heading">🏨 Hotel Recommendations</h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Show 3 cards at a time (adjust as needed)
          navigation
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {trip?.tripData?.hotels?.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm p-3">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container my-5">
        <h3 className="hotel-heading">📍 Places to Visit</h3>
        <div className="row">
          {trip?.tripData?.itinerary?.map((dayPlan, index) => (
            <div key={index} className="col-12">
              <h4 className="text-muted fw-bold mb-3 ms-4">
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
          {/* ✅ Save Trip Button */}
          <div className="mt-4 text-center">
            <button
              className="btn btn-primary px-4 py-2 fw-bold"
              onClick={() => {
                console.log("Button clicked!"); // Debugging
                handleSaveTrip();
              }}
            >
              Save Trip
            </button>
          </div>
          {/* ✅ Popup Notification */}
          {showPopup && (
            <div className="popup-container">
              <div className="popup">
                <p>✅ Trip Saved Successfully!</p>
              </div>
            </div>
          )}
          {/* ✅ Popup Styles */}
          <style>{`
        .popup-container {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #28a745;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          animation: fadeInOut 2s ease-in-out;
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          10% { opacity: 1; transform: translateX(-50%) translateY(0px); }
          90% { opacity: 1; transform: translateX(-50%) translateY(0px); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
        </div>
      </section>
    </>
  );
}
