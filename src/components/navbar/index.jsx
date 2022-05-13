import angular from "../../images/angular.png";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="img-nav" src={angular} alt="img" />
      </Link>
      <div className=" navbar-list">
        <Link to="/">Home</Link>
        <Link to="/contributors">Contributors</Link>
      </div>
    </div>
  );
}
