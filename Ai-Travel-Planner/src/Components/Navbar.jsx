import { Link } from "react-router-dom";
import "../App.css";
import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";
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
            <Link
              to={"/home"}
              className="nav-link active pe-4 mt-1"
              style={{ fontSize: "18px" }}
            >
              Home
            </Link>
            <Link
              to={"/createTrip"}
              className="nav-link px-4 mt-1"
              style={{ fontSize: "18px" }}
            >
              + Create Trips
            </Link>
            <Link
              to={"/myTrip"}
              className="nav-link px-4 mt-1"
              style={{ fontSize: "18px" }}
            >
              My Trips
            </Link>
            <Link
              to={"/profile"}
              className="nav-link px-4 "
              style={{ fontSize: "18px" }}
            >
              <img
                src={icon}
                alt=""
                style={{ width: "30px", height: "35px", marginBottom: "5px" }}
              />
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
