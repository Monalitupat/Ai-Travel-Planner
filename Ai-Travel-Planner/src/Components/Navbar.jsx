import { Link } from "react-router-dom";
import "../App.css";
import icon from "../assets/images/Profile icon.svg";
import logo from "../assets/images/WanderWise Logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid p-5">
          <div className="">
            <img src={logo} alt="logo" className="d-inline Logo" />
            <h5 className="d-inline">WANDERWISE</h5>
          </div>

          <div className="d-flex gap-4">
            <Link to={"/home"} className="nav-Link active">
              Home
            </Link>
            <Link to={"/createTrip"} className="nav-Link">
              Create Trips
            </Link>
            <Link to={"/myTrip"} className="nav-Link">
              My Trips
            </Link>
            <Link
              to={"/profile"}
              className="nav-Link d-flex align-items-center gap-1"
            >
              <img src={icon} alt="profile" className="Picon" />
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
