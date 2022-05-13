import React from "react";
import img1 from "../../images/pix1.jpeg";
import "./card.styles.css";

const CardUI = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Contributor</h4>
        <p className="card-text text-secondary">Followers</p>
        <a href="/contributor" className="btn btn-outline-success ">
          More Details
        </a>
      </div>
    </div>
  );
};

export default CardUI;
