import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { auth } from "../Service/firebaseConfig"; // Import Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if user already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      alert("User already exists! Please login.");
      return;
    }

    // Save user data
    const newUser = { name, email, password, profile: {} };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Set the current user as logged in
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Signup successful! Please login.");
    navigate("/login"); // Redirect to login page
  };

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
          <form className="ms-5 py-4" onSubmit={handleSignup}>
            <div className="mb-3 mt-4 ms-2">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-dark px-5 mt-3 Loginbtn">
              Sign Up
            </button>

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
