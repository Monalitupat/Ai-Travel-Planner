import React from "react";
import "../App.css";
import { FaClock, FaWallet, FaUsers, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function TripCard({ trip }) {
  return (
    <>
      <Link to={"/view-trip/" + trip?.id}>
        <div className="card shadow-sm border-0 mb-4">
          <div className="d-flex mt-3">
            <div>
              <img src="./c2.jpg" className="mytrip-img" alt="image" />
            </div>
            <div className="mytrip-detail ms-5">
              <h5 className="mt-5 fs-4">
                Destination : {trip?.userSelection?.destination}
              </h5>

              <div
                className="
                 mt-5"
              >
                <h3 className=" bg-light text-dark d-flex align-items-center mt-3 fs-5">
                  <FaClock className="text-danger" /> Days to Travel :
                  {trip?.userSelection?.travelDays}
                </h3>
                <h3 className="bg-light text-dark d-flex align-items-center mt-3  fs-5">
                  <FaWallet className="text-warning" />
                  Budget : {trip?.userSelection?.noOfDays} Days trip with
                  {trip?.userSelection?.selectedbudget}Budget
                </h3>
                <h3 className=" bg-light text-dark d-flex align-items-center mt-3 fs-5">
                  <FaUsers className="text-primary" />
                  Travel Companion :{trip?.userSelection?.selectedTravel}
                </h3>
              </div>
            </div>
            <Link to={"/view-trip/" + trip?.id}>
              <button className="btn btn-dark mytrip-btn">View More</button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
