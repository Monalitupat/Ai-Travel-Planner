import { Link } from "react-router-dom";
import "../App.css";
import icon from "../assets/images/Profile icon.svg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid p-5">
          <div className="">
            <img src="/logo.svg" alt="." className="d-inline" />
            <h5 className="d-inline">WANDERWISE</h5>
          </div>

          <div className="d-flex pe-4">
            <Link to={"/home"} className="nav-Link active pe-4 ">
              Home
            </Link>
            <Link to={"/createTrip"} className="nav-Link px-4 ">
              Create Trips
            </Link>
            <Link to={"/myTrip"} className="nav-Link px-4 ">
              My Trips
            </Link>
            <Link to={"/profile"} className="nav-Link px-4 ">
              <img src={icon} alt="" className="Picon" />
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
