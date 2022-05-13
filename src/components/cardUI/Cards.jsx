import React from "react";
import CardUI from "./CardUI";
import img1 from "../../images/pix1.jpeg";
import img2 from "../../images/pix2.jpeg";
import img3 from "../../images/pix3.jpeg";

function Cards() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <CardUI img={img1} />
        </div>
        <div className="col-md-4">
          <CardUI img={img2} />
        </div>
        <div className="col-md-4">
          <CardUI img={img3} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
