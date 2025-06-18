import { useInView } from "react-intersection-observer";

import "../App.css";

import "animate.css";
import { useState, useEffect, useRef } from "react";

import img1 from "../assets/images/s1.jpg";
import img2 from "../assets/images/s2.jpg";
import img3 from "../assets/images/s3.jpg";
import img4 from "../assets/images/s4.jpg";
import img5 from "../assets/images/s5.jpg";
import greece from "../assets/images/c1.avif";
import maldives from "../assets/images/c2.jpg";
import nepal from "../assets/images/c3.jpeg";
import dubai from "../assets/images/c4.jpg";
import desert from "../assets/images/d1.png";
import icon1 from "../assets/images/indian p1.avif";
import icon2 from "../assets/images/indian2.avif";
import icon3 from "../assets/images/indian3.avif";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Import star icon
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
window.$ = $;
window.jQuery = $;

export default function HomePage() {
  const locations = [
    { name: "OIA, GREECE", img: greece, rating: 4.8, reviews: "1.2K" },
    {
      name: "GRAND RESORT, MALDIVES",
      img: maldives,
      rating: 4.7,
      reviews: "980",
    },
    { name: "ANNAPURNA, NEPAL", img: nepal, rating: 4.9, reviews: "1.5K" },
    { name: "DUBAI, UAE", img: dubai, rating: 4.6, reviews: "890" },
  ];

  const [animate, setAnimate] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  // Separate useInView hooks for different sections
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: section3Ref, inView: section3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Navbar />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginBottom: "-40px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img1} className="carousel-img" alt="Slide 1" />

            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "250px" }}
            >
              <h5>Adventure Travel – Embrace the thrill!</h5>
              <p>
                Conquer mountains, dive into the wild, and experience the
                adrenaline rush of extreme adventures.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="carousel-img" alt="Slide 2" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "250px" }}
            >
              <h5>Beach Getaways – Sun, sand, and serenity!</h5>
              <p>
                Escape to breathtaking beaches, where crystal-clear waters and
                golden shores await.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img3} className="carousel-img" alt="Slide 3" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "250px" }}
            >
              <h5>Historical Tours – Walk through time!</h5>
              <p>
                Discover ancient wonders, iconic landmarks, and the rich
                heritage of civilizations past.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img4} className="carousel-img" alt="Slide 4" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "250px" }}
            >
              <h5>Wildlife & Safari – Into the wild!</h5>
              <p>
                Witness majestic creatures in their natural habitat and explore
                lush forests and safaris.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img5} className="carousel-img" alt="Slide 5" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "250px" }}
            >
              <h5>Road Trips – Hit the road!</h5>
              <p>
                Take the scenic route, explore hidden gems, and create
                unforgettable memories on your next road trip.{" "}
              </p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div ref={section1Ref} className="container">
        <div className="reviews">
          <h2
            className={`text-white text-center mb-4 animate__animated ${
              section1InView ? "animate__backInLeft" : "opacity-0"
            }`}
          >
            Explore Top Locations
          </h2>
        </div>
        <div className="row">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`col-md-3 animate__animated ${
                section1InView ? "animate__fadeInUp" : "opacity-0"
              }`}
            >
              <div className="card location-card border-0">
                <img
                  src={location.img}
                  className="card-img"
                  alt={location.name}
                />
                <div className="overlay"></div>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="text-white fw-bold ms-2">{location.name}</h5>
                  <div className="d-flex align-items-center ms-2">
                    <FaStar className="text-warning" />
                    <span className="text-white fw-bold ms-1">
                      {location.rating}
                    </span>
                    <span className="text-light ms-2">
                      ({location.reviews} REVIEWS)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section
        ref={section2Ref}
        className="text-center text-light  py-5"
        style={{
          background: "linear-gradient(90deg, #7cf5ff 0%, #6439ff 100%)",
        }}
      >
        <div className="container">
          <h2
            className={`fw-bold animate__animated ${
              section2InView ? "animate__fadeInLeft" : "opacity-0"
            }`}
            style={{
              marginLeft: "-450px",
              marginTop: "220px",
              fontSize: "40px",
            }}
          >
            Enjoy Trip With Us! <br />
            Experience Your Imaginations <br />
            Coming To Life ✈
          </h2>

          <div
            className={`d-flex justify-content-center mt-1 animate__animated ${
              section2InView ? "animate__fadeInRight" : "opacity-0"
            }`}
          >
            <div
              className=""
              style={{ marginLeft: "800px", marginBottom: "-20px" }}
            >
              <img src={desert} alt="Travel" style={{ marginTop: "-270px" }} />
              <div
                className=" start-50 translate-middle-x bg-white px-3 py-1 rounded-pill d-flex align-items-center shadow"
                style={{
                  marginTop: "-130px",
                  marginLeft: "70px",
                  height: "50px",
                  color: "grey",
                }}
              >
                <div className="d-flex">
                  <img
                    src={icon1}
                    alt="icon1"
                    className="rounded-circle me-1"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <img
                    src={icon2}
                    alt="icon2"
                    className="rounded-circle me-1"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <img
                    src={icon3}
                    alt="icon3"
                    className="rounded-circle me-1"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <span className="ms-2 fw-bold">Destinations</span>
              </div>
            </div>
          </div>
        </div>
        <h4
          className={`fw-bold animate__animated ${
            section2InView ? "animate__fadeInUp" : "opacity-0"
          }`}
          style={{ marginTop: "210px", fontSize: "40px", marginBottom: "50px" }}
        >
          Look At All Of The Wonderful Places <br />
          We've Taken Travelers
        </h4>
      </section>
      <section
        ref={section3Ref}
        className="hero-section text-center text-white position-relative"
        style={{ height: "600px" }}
      >
        {/* Background image will be added via CSS */}
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div
          className={`container position-relative animate__animated ${
            section3InView ? "animate__zoomIn" : "opacity-0"
          }`}
          style={{ marginTop: "160px", marginBottom: "95px" }}
        >
          <h2 className="fw-bold display-5">
            Ready To Travel With Us On Your Next Trip?
          </h2>
          <Link to="/createTrip">
            <button className="btn btn-primary btn-lg mt-3 px-4 py-2 fw-bold">
              Make Your Trip
            </button>
          </Link>
        </div>
        {/* Footer Section */}
        <footer className="footer mt-5 pt-4 mb-0 text-white">
          <div className="container">
            <div className="row text-center text-md-start">
              {/* Branding Section */}
              <div className="col-md-3 mb-3 mb-md-0">
                <h4 className="fw-bold text-primary">WANDERWISE</h4>
              </div>

              {/* Travel Links */}
              <div className="col-md-3 mb-3 mb-md-0">
                <h5>Travel With Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-md-3 mb-3 mb-md-0">
                <h5>Contact Us</h5>
                <p>9300 SE 82nd Ave, Oregon, USA</p>
                <p>+88440-550-8763</p>
              </div>

              {/* Social Media Section */}
              <div className="col-md-3">
                <h5>Social Share</h5>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <a href="#" className="footer-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="footer-icon">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="footer-icon">
                    <i className="bi bi-pinterest"></i>
                  </a>
                  <a href="#" className="footer-icon">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="footer-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="footer-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom Line */}
            <hr className="my-4 border-light" />
          </div>
        </footer>{" "}
        <p className="text-center" style={{ marginTop: "-30px" }}>
          &copy; 2025 WANDERWISE. Powered by RTSoftDeveloper
        </p>
      </section>
    </>
  );
}
