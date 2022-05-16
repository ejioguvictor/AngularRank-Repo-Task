import "./styles.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="layout">
      <div className="layout-page">
        <h1>
          A single-page application displaying <span> Angular </span>
          repository contributors, with details page of each contributor, their
          diverse repositories and possible contributors to their repositories.
        </h1>
      </div>
      <Link to="/contributors">
        <button className="btn-layout">Contributors</button>{" "}
      </Link>
    </div>
  );
};

export default LandingPage;
