import { Link } from "react-router-dom";
import "../App.css";
import img from "../assets/images/landingpage image.jpg";
import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";
function LandingPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid p-5">
          <div className="">
            <img src="/logo.svg" alt="." className="d-inline" />
            <h5 className="d-inline">WANDERWISE</h5>
          </div>
          <div>
            <Link to={"/signup"}>
              <button className="btn btn-dark px-3 py-2 me-3">Sign in</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-dark px-3 py-2">Login in</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="content1">
        <p className="pb-3">Unlock Your Next Adventure with AI:</p>
        <p className="p2">
          Effortless & Personalized Travel at Your Fingertips
        </p>
      </div>
      <div
        style={{
          fontFamily: "Lora, sans-serif",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Adventure awaits, and planning should be the easiest part! Let’s map out
        your dream journey together.
      </div>
      <div>
        <Link to={"/signup"}>
          <button
            type="button"
            className="btn btn-dark btn-lg fs-5"
            style={{ marginLeft: "640px", marginTop: "20px" }}
          >
            Get Started, It's Free
          </button>
        </Link>
      </div>
      <div className="">
        <img
          src={img}
          alt="image"
          style={{ height: "290px", marginLeft: "530px", marginTop: "20px" }}
        />
      </div>
    </>
  );
}
export default LandingPage;
