import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Components/HomePage.jsx";
import CreateTrip from "./Components/CreateTrip.jsx";
import MyTrip from "./Components/MyTrip.jsx";
import Profile from "./Components/Profile.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import SignupPage from "./Components/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/createTrip",
    element: <CreateTrip />,
  },
  {
    path: "/myTrip",
    element: <MyTrip />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
