import { Link } from "react-router-dom";
import "../App.css";
import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";

export default function LoginPage() {
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
        <h3
          style={{
            marginLeft: "635px",
            marginTop: "100px",
          }}
        >
          Login Page
        </h3>
        <div
          style={{
            backgroundColor: "#d1d1d1",
            width: "400px",
            height: "500px",
            marginLeft: "530px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <form className="ms-5 py-4">
            <div className="mb-3 mt-4 ms-2 pt-4">
              <label for="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                style={{ width: "280px" }}
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
                className="form-control"
                style={{ width: "280px" }}
                id="exampleInputPassword1"
              />
            </div>
            <Link to={"/home"}>
              <button
                type="submit"
                className="btn btn-primary px-5"
                style={{
                  marginLeft: "10px",
                  marginTop: "40px",
                  width: "280px",
                }}
              >
                Login
              </button>
            </Link>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textDecoration: "underline",
                marginLeft: "60px",
                marginTop: "20px",
              }}
            >
              Signup if you don't have Account
            </p>

            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-outline-dark px-3 py-1 mt-3"
                style={{ marginLeft: "120px" }}
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
