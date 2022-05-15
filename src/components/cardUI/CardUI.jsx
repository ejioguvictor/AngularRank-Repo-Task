import React from "react";
// import img1 from "../../images/pix1.jpeg";
import "./card.styles.css";
import { Link } from "react-router-dom";
import UserProfile from "../contributorProfile/UserProfile";

const CardUI = ({
  angularData,
  img,
  contributions,
  followers,
  title,
  publicRepos,
  publicGists,
  contributors,
}) => {
  console.log(angularData);
  return (
    <div>
      <div className="container">
        <div className="card text-center">
          <div className="overflow">
            <img src={img} alt="image1" className="card-img-top w-50 mt-4" />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">{title}</h4>
            <h5 className="card-text text-secondary">
              contributions: {contributions}
            </h5>
            <h5 className="card-text text-secondary">followers: {followers}</h5>
            <h5 className="card-text text-secondary">
              public repos: {publicRepos}
            </h5>
            <h5 className="card-text text-secondary">
              public gists: {publicGists}
            </h5>
            {/* <Link to="/userprofile" className="btn btn-outline-success ">
              More Details
            </Link> */}
            <Link
              className="btn btn-outline-success "
              to={`/userprofile/${contributors.login}`}
              state={{ contributors }}
            >
              <button className="btn">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
