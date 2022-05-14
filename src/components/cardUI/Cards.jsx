import React, { useEffect } from "react";
import CardUI from "./CardUI";
import img1 from "../../images/pix1.jpeg";
import img2 from "../../images/pix2.jpeg";
import img3 from "../../images/pix3.jpeg";

// import { BASE_URL } from "../../constant/contstant";
import axios from "axios";

function Cards() {
  // const url = `https://api.github.com/orgs/Angular`;
  const url = `${process.env.REACT_APP_GITHUB_URL}/orgs/Angular`;
  console.log(url);

  useEffect(() => {
    const getAngularRepo = async () => {
      const result = await axios({
        url: url,
        method: "GET",
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          "Content-type": "application/json",
        },
      });
      console.log(result);
    };

    getAngularRepo();
  }, []);
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
