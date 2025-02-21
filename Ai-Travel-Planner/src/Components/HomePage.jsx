import "../App.css";
import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";
function HomePage() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LOGO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content1">
        <p>Discover Your Next Adventure With AI:</p>
        <p className="p2">Personalized Itineraries at Your Fingertips</p>
      </div>
      <button type="button" className="b1">
        Get Started, It's Free
      </button>
    </>
  );
}
export default HomePage;
