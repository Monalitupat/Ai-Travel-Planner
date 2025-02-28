import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";

import TripCard from "./TripCard";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";
import { useNavigation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Service/firebaseConfig";

export default function MyTrip() {
  const navigation = useNavigation;
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);

  // use to get all user trips
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

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
      <div className="container " style={{ marginTop: "60px" }}>
        <h3 className="mb-4">📍 My Trips</h3>
        <div className="row">
          {userTrips?.length > 0
            ? userTrips.map((trip, index) => (
                <div key={index} className="">
                  <TripCard trip={trip} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-50 bg-slate-200 animate-pulse rounded-xl"
                ></div>
              ))}
        </div>
      </div>
    </>
  );
}
