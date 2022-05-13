import React from "react";
// import img1 from "../../images/pix1.jpeg";
import "./card.styles.css";

const CardUI = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.img} alt="image1" className="card-img-top w-50 mt-4" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <h5 className="card-text text-secondary">
          contributions: {props.contributions}
        </h5>
        <h5 className="card-text text-secondary">
          followers: {props.followers}
        </h5>
        <h5 className="card-text text-secondary">
          public repos: {props.publicRepos}
        </h5>
        <h5 className="card-text text-secondary">
          public gists: {props.publicGists}
        </h5>
        <a href="/contributor" className="btn btn-outline-success ">
          More Details
        </a>
      </div>
    </div>
  );
};

export default CardUI;
