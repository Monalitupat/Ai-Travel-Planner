import { Link } from "react-router-dom";
import "../App.css";
export default function SignupPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid p-5">
          <div className="">
            <img src="/logo.svg" alt="." className="d-inline" />
            <h5 className="d-inline">WANDERWISE</h5>
          </div>
        </div>
      </nav>
      <div>
        <h3 className="loginHeading">Sign Up Page</h3>
        <div className="LoginBox">
          <form className="ms-5 py-4">
            <div className="mb-3 mt-4 ms-2">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control input-field"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 mt-2 ms-2">
              <label for="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control input-field"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 ms-2 mt-2">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-field"
                id="exampleInputPassword1"
              />
            </div>
            <Link to={"/login"}>
              <button type="submit" className="btn btn-dark px-5 mt-3 Loginbtn">
                Sign Up
              </button>
            </Link>
            <Link to={"/login"}>
              <p className="textbtn ps-4">Login if already Exist</p>
            </Link>
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-outline-dark px-3 py-1 back-btn"
              >
                Back ›
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
