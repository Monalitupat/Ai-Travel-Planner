import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/src/Service/firebaseConfig";
// import { InfoSection } from "/src/View-trip/components/InfoSection";

export default function BuildTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  // use get trip data from firebase

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const tripData = docSnap.data();
      console.log("Fetched Trip Data:", tripData);

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

  // const hotels = [
  //   {
  //     name: "The Venetian Resort Las Vegas",
  //     address: "3355 Las Vegas Blvd S, Las Vegas, NV 89109",
  //     price: "$200-$350 per night",
  //     stars: "4.5 stars",
  //     image: "https://via.placeholder.com/250", // Replace with actual image URL
  //   },
  //   {
  //     name: "The Cosmopolitan of Las Vegas",
  //     address: "3708 Las Vegas Blvd S, Las Vegas, NV 89109",
  //     price: "$250-$450 per night",
  //     stars: "4.5 stars",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     name: "The Wynn Las Vegas",
  //     address: "3131 Las Vegas Blvd S, Las Vegas, NV 89109",
  //     price: "$300-$500 per night",
  //     stars: "5 stars",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     name: "The Palazzo Resort Hotel Casino",
  //     address: "3325 Las Vegas Blvd S, Las Vegas, NV 89109",
  //     price: "$220-$380 per night",
  //     stars: "4.5 stars",
  //     image: "https://via.placeholder.com/250",
  //   },
  // ];

  // const places = [
  //   {
  //     time: "10:00 AM - 12:00 PM",
  //     name: "High Roller Observation Wheel",
  //     description:
  //       "A giant observation wheel on the Strip that offers stunning 360-degree views of the city. It's a great way to start your trip and get your bearings.",
  //     duration: "15 minutes",
  //     price: "$30-$40 per person",
  //     image: "https://via.placeholder.com/250", // Replace with actual image URL
  //   },
  //   {
  //     time: "12:00 PM - 2:00 PM",
  //     name: "The LINQ Promenade",
  //     description:
  //       "An outdoor shopping and dining promenade on the Strip. It's a great place to grab lunch and explore the shops.",
  //     duration: "10 minutes",
  //     price: "Free",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     time: "2:00 PM - 4:00 PM",
  //     name: "Bellagio Conservatory & Botanical Garden",
  //     description:
  //       "A stunning botanical garden located inside the Bellagio Hotel. It's a free attraction and a great place to relax and admire the beautiful flowers and sculptures.",
  //     duration: "15 minutes",
  //     price: "Free",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     time: "4:00 PM - 6:00 PM",
  //     name: "The Venetian and The Palazzo",
  //     description:
  //       "Explore the luxurious Venetian and Palazzo resorts. Take a gondola ride through the canals, shop at the upscale boutiques, or try your luck at the casino.",
  //     duration: "10 minutes",
  //     price: "Varies depending on activities",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     time: "6:00 PM - 8:00 PM",
  //     name: "Dinner at a restaurant on the Strip",
  //     description:
  //       "There are countless dining options on the Strip, from casual to fine dining. Choose a restaurant that suits your taste and budget.",
  //     duration: "None",
  //     price: "Varies",
  //     image: "https://via.placeholder.com/250",
  //   },
  //   {
  //     time: "8:00 PM - 10:00 PM",
  //     name: "Fountains of Bellagio",
  //     description:
  //       "Enjoy a spectacular water and light show that takes place every 15 minutes in front of the Bellagio Hotel.",
  //     duration: "None",
  //     price: "Free",
  //     image: "https://via.placeholder.com/250",
  //   },
  // ];
  return (
    <>
      {/* Information Section */}
      <div className="  border-0 " style={{ marginTop: "20px" }}>
        <h2 style={{ marginLeft: "150px" }}>Build Your Trip</h2>
        <img
          src="/c2.jpg"
          className="card-img-top rounded"
          //    alt={trip?.userSelection?.location?.label || "Trip Location"}
          style={{ height: "450px", width: "1200px", marginLeft: "150px" }}
        />

        <div className="card-body" style={{ marginLeft: "150px" }}>
          <h5 className="card-title fw-bold">
            {trip?.tripData?.destination || "Trip Location"}
          </h5>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaClock className="text-danger" />{" "}
              {trip?.tripData?.travelDays || "Trip Days"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaClock className="text-danger" />{" "}
              {trip?.tripData?.travelDate || "Trip Date"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaWallet className="text-warning" />{" "}
              {trip?.tripData?.selectedBudget || "Trip budget"}
            </span>
            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
              <FaUsers className="text-primary" />
              {trip?.tripData?.selectedTravel || "Traveler"}
            </span>
          </div>
          <div
            className="d-flex justify-content-end mt-3"
            style={{ marginRight: "150px" }}
          >
            <button className="btn btn-dark">
              <FaPaperPlane className="me-1" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Hotels */}
      <section style={{ marginTop: "50px" }}>
        <div className="container my-5">
          <h3 className="mb-4">🏨 Hotel Recommendation</h3>
          <div className="d-flex felx-row gap-5" style={{ rowGap: "100px" }}>
            {trip?.tripData?.hotels?.map((hotel, index) => (
              <Link
                to={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  hotel?.hotelName +
                  ", " +
                  hotel?.hotelAddress
                }
                target="_blank"
              >
                <div key={index} className="">
                  <div className="card shadow-sm" style={{ width: "300px" }}>
                    <img
                      src="/c2.jpg"
                      className="card-img-top"
                      style={{ width: "300px" }}
                      // alt={hotel.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{hotel?.hotelName}</h5>
                      <p className="card-text">
                        📍 {hotel?.hotelAddress} <br />
                        💰 <strong>{hotel?.Price}</strong> <br />⭐
                        <strong>{hotel?.rating}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Daily Plan */}
      {/* 📍 Places to Visit Section */}
      <section>
        <div className="container my-5">
          <h3 className="mb-4">📍 Places to Visit</h3>
          <div className="row">
            {trip?.tripData?.itinerary?.map((dayPlan, index) => (
              <div key={index} className="col-12">
                <h4 className="text-muted fw-bold mb-3">
                  {dayPlan.day} - {dayPlan.theme}
                </h4>
                <div className="row">
                  {dayPlan.plan?.map((place, i) => (
                    <Link
                      to={
                        "https://www.google.com/maps/search/?api=1&query=" +
                        place.placeName
                      }
                      target="_blank"
                    >
                      <div key={i} className="col-12 col-md-6 col-lg-4 mb-3">
                        <div className="card shadow-sm">
                          <img
                            src="/c2.jpg"
                            className="card-img-top"
                            alt={place.placeName}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{place.placeName}</h5>
                            <p className="card-text">{place.placeDetails}</p>
                            <p>
                              🕒 {place.timeToTravel} | 💰 {place.ticketPricing}
                            </p>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
                              target="_blank"
                              className="btn btn-primary"
                            >
                              View on Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
