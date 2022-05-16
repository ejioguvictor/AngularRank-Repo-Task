import React from "react";
import "./card.styles.css";
import { Link } from "react-router-dom";

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
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img
            src={img}
            alt="image1"
            className="card-img-top w-50 mt-4 rounded-circle"
          />
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
  );
};

export default CardUI;
