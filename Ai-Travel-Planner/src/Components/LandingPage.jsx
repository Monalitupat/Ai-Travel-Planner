import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import img from "../assets/images/cover-img.png";
import { useEffect } from "react";
// const [openDailog, setOpenDailog] = useState(false);
function LandingPage() {
  // const OnSignUp = () => {
  //   const user = localStorage.getItem("user");

  //   if (!user) {
  //     setOpenDailog(true);
  //     return;
  //   }
  // };

  const navigate = useNavigate();

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  //   if (isAuthenticated) {
  //     navigate("/home");
  //   }
  // }, []);
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
              <button
                className="btn btn-dark fw-bold px-3 py-1 me-3"
                // onClick={() => OnSignUp()}
              >
                Sign Up
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-dark fw-bold px-3 py-1">
                Login in
              </button>
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
      <div className="Lsub-heading">
        Adventure awaits, and planning should be the easiest part! Let’s map out
        your dream journey together.
      </div>
      <div>
        <Link to={"/login"}>
          <button
            type="button"
            className="btn btn-dark btn-lg fw-bold fs-5 "
            style={{ marginLeft: "640px", marginTop: "20px" }}
            onClick={() => navigate("/login")}
          >
            Get Started, It's Free
          </button>
        </Link>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={img}
          alt="image"
          // style={{ height: "290px", marginLeft: "530px", marginTop: "20px" }}
          style={{
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
    </>
  );
}
export default LandingPage;
