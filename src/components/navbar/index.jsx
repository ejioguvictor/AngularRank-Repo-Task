import angular from "../../images/angular.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        backgroundColor: "#198754",
        border: "1px solid #fff",
        borderBottom: "gray 1px solid",
      }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <img
            src={angular}
            style={{ width: "60px", height: "60px" }}
            alt="Logo"
          />
          AngularRepo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/landingPage"
              >
                Home
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link className="nav-link active" to="/contributors">
                Contributors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
