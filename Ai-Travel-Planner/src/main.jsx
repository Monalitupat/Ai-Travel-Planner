// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import App from "./App.jsx";
// import HomePage from "./Components/HomePage.jsx";
// import CreateTrip from "./Components/CreateTrip.jsx";
// import MyTrip from "./Components/MyTrip.jsx";
// import Profile from "./Components/Profile.jsx";
// import LoginPage from "./Components/LoginPage.jsx";
// import SignupPage from "./Components/SignupPage.jsx";
// import PreviewTrip from "./Components/PreviewTrip.jsx";
// import BuildTrip from "./Components/BuildTrip.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "/home",
//     element: <HomePage />,
//   },
//   {
//     path: "/createTrip",
//     element: <CreateTrip />,
//   },
//   {
//     path: "/myTrip",
//     element: <MyTrip />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/preview",
//     element: <PreviewTrip />,
//   },
//   {
//     path: "/buildtrip",
//     element: <BuildTrip />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}> */}
//     <RouterProvider router={router} />
//     {/* </GoogleOAuthProvider> */}
//   </StrictMode>
// );

import React from "react";
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
import PreviewTrip from "./Components/PreviewTrip.jsx";
import BuildTrip from "./View-trip/[tripId]/BuildTrip.jsx";

import LandingPage from "./Components/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Acts as a layout
    children: [
      { path: "/", element: <LandingPage /> }, // Redirect root to login
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },

      // Protected Routes
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
      {
        path: "/preview",
        element: <PreviewTrip />,
      },
      {
        path: "/view-trip/:tripId",
        element: <BuildTrip />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
