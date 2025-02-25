import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/destination.png";
import icon2 from "../assets/images/date.png";
import icon3 from "../assets/images/budget.png";
import icon4 from "../assets/images/travelers.png";
import icon5 from "../assets/images/days.png";

export default function PreviewTrip() {
  return (
    <>
      <div>
        <h3 className="loginHeading mt-5">Preview Your Trip</h3>
        <p className="preview-subheading">
          Before generating your trip, please review your selection
        </p>
        <div className="PreviewBox">
          <div className="d-flex ms-4">
            <img src={icon1} alt="" className="preview-icon1" />
            <div className="mt-5 ms-4">
              <h4>Destination</h4>
              <p className="preview-description">Destination name</p>
            </div>
          </div>
          <div className="d-flex ms-4">
            <img src={icon5} alt="" className="preview-icon" />
            <div className="mt-2 ms-4">
              <h4>travel Day</h4>
              <p className="preview-description">3 days</p>
            </div>
          </div>
          <div className="d-flex ms-4">
            <img src={icon2} alt="" className="preview-icon" />
            <div className="mt-2 ms-4">
              <h4>Travel Date</h4>
              <p className="preview-description">Date</p>
            </div>
          </div>
          <div className="d-flex ms-4">
            <img src={icon3} alt="" className="preview-icon" />
            <div className="mt-2 ms-4">
              <h4>Budget</h4>
              <p className="preview-description">Cheap</p>
            </div>
          </div>
          <div className="d-flex ms-4">
            <img src={icon4} alt="" className="preview-icon" />
            <div className="mt-2 ms-4">
              <h4>Who is Traveling</h4>
              <p className="preview-description">Friends</p>
            </div>
          </div>
          <div className="preview-buttons">
            <Link to={"/buildtrip"}>
              <button className="btn btn-dark fw-bold fs-6 px-4 py-2">
                Build Your Trip
              </button>
            </Link>
            <Link to={"/createtrip"}>
              <button className="btn btn-dark fw-bold fs-6 px-4 py-2 ms-5">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
