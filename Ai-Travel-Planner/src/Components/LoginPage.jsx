import { Link, useNavigate } from "react-router-dom";
import { useState, useEff } from "react";
import { auth } from "../Service/firebaseConfig"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";

import "../App.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user in localStorage
    let foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isAuthenticated", "true"); // Store authentication status
      localStorage.setItem("currentUser", JSON.stringify(foundUser)); // Store user details
      alert("Login successful!");
      navigate("/home"); // Redirect to home page
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top my-nav">
        <div className="container-fluid p-5">
          <div className="">
            <img src="/logo.svg" alt="." className="d-inline" />
            <h5 className="d-inline">WANDERWISE</h5>
          </div>
        </div>
      </nav>
      <div>
        <h3 className="loginHeading">Login Page</h3>
        <div className="LoginBox">
          <form className="ms-5 py-4" onSubmit={handleLogin}>
            <div className="mb-3 mt-4 ms-2 pt-4">
              <label for="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3 ms-2 mt-4">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-dark px-5 Loginbtn">
              Login
            </button>

            <Link to={"/signup"}>
              <p className="textbtn">Signup if you don't have Account</p>
            </Link>
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-outline-dark px-3 py-1 mt-3 back-btn"
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
