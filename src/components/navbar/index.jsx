import angular from "../../images/angular.png";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ backgroundColor: "#198754", border: "1px solid #ccc" }}
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
              <Link className="nav-link active" aria-current="page" to="/">
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

    // <header>
    //   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#">
    //         Carousel
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarCollapse"
    //         aria-controls="navbarCollapse"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarCollapse">
    //         <ul class="navbar-nav me-auto mb-2 mb-md-0">
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               Link
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link disabled"
    //               href="#"
    //               tabindex="-1"
    //               aria-disabled="true"
    //             >
    //               Disabled
    //             </a>
    //           </li>
    //         </ul>
    //         <form class="d-flex">
    //           <input
    //             class="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button class="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}
