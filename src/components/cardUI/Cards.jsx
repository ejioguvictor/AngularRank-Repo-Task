import React from "react";
import CardUI from "./CardUI";
import img1 from "../../images/pix1.jpeg";
import img2 from "../../images/pix2.jpeg";
import img3 from "../../images/pix3.jpeg";

function Cards() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <CardUI
            img={img1}
            title="Developer"
            contributions={20}
            followers={200}
            publicRepos={50}
            publicGists={90}
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <CardUI
            img={img2}
            title="QA"
            contributions={20}
            followers={200}
            publicRepos={50}
            publicGists={90}
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <CardUI
            img={img3}
            title="Frontend Dev"
            contributions={20}
            followers={200}
            publicRepos={50}
            publicGists={90}
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <CardUI
            img={img3}
            title="Software Dev"
            contributions={20}
            followers={200}
            publicRepos={50}
            publicGists={90}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
