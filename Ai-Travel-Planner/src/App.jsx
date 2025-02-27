import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { useEffect, useState } from "react";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import HomePage from "./Components/HomePage";
// import PrivateRoute from "./Service/PrivateRoute";
import LandingPage from "./Components/LandingPage";
import { Outlet } from "react-router-dom";
function App() {
  // const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Outlet>
      <Router>
        <Routes>
          {/* Show LandingPage on "/" */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Protect Home Page */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </Outlet>
  );
}

export default App;
