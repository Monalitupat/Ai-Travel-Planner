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
      where("userEmail", "==", user.email)
    );
    const querySnapshot = await getDocs(q);

    let trips = [];
    querySnapshot.forEach((doc) => {
      trips.push({ id: doc.id, ...doc.data() }); // Include Firestore ID
    });

    setUserTrips(trips); // Overwrite previous state, instead of appending
  };

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
