import React, { useEffect, useState } from "react";
import CardUI from "./CardUI";
import img1 from "../../images/pix1.jpeg";
import img2 from "../../images/pix2.jpeg";
import img3 from "../../images/pix3.jpeg";
import Loaders from "react-loading-icons";
import { Link } from "react-router-dom";
import "./card.styles.css";

import axios from "axios";

function Cards() {
  const [isLoading, setIsLoading] = useState([]);
  const [angularData, setAngularData] = useState(true);

  const url = `${process.env.REACT_APP_GITHUB_URL}/orgs/Angular`;

  const getAngularContributors = async () => {
    try {
      const result = await axios({
        url: url,
        method: "GET",
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          "Content-type": "application/json",
        },
      });

      const data = await result.data;
      setAngularData([]);

      const nextResult = await fetch(
        `${process.env.REACT_APP_GITHUB_URL}/orgs/angular/repos?per_page=2`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const currentData = await nextResult.json();

      const contrubutor = currentData.map(async (element) => {
        const nextNextResponse = await fetch(element.contributors_url, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        return await nextNextResponse.json();
      });

      const allRepoContributors = await Promise.all(contrubutor);

      const ranks = {};

      allRepoContributors.forEach((repo) => {
        repo.forEach((contributor) => {
          if (!ranks[contributor.login]) {
            ranks[contributor.login] = {
              login: contributor.login,
              contribution: contributor.contributions,
              avatarUrl: contributor.avatar_url,
              userUrl: contributor.url,
              followers: contributor.followers_url,
              gists: contributor.gists_url,
            };
          } else {
            ranks[contributor.login].contribution =
              ranks[contributor.login].contribution + contributor.contributions;
          }
        });
      });

      const allUsersPromises = Object.values(ranks).map(async (user) => {
        const response = await fetch(user.userUrl, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        return await response.json();
      });

      const allUsers = await Promise.all(allUsersPromises);

      allUsers.forEach((user) => {
        ranks[user.login] = {
          ...ranks[user.login],
          name: user.name,
          followers: user.followers,
          public_repos: user.public_repos,
          public_gists: user.public_gists,
          repos_url: user.repos_url,
        };
      });

      const sortedUsers = Object.values(ranks).sort((a, b) =>
        a.contribution < b.contribution
          ? 1
          : b.contribution < a.contribution
          ? -1
          : 0
      );

      setAngularData(sortedUsers);

      setIsLoading(false);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAngularContributors();
  }, []);

  useEffect(() => {
    const getContributors = async () => {
      await getAngularContributors();
    };
    getContributors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortByContributions = (e) => {
    const sortedContributions = [...angularData];
    sortedContributions.sort((a, b) =>
      a.contribution < b.contribution
        ? 1
        : b.contribution < a.contribution
        ? -1
        : 0
    );

    setAngularData(sortedContributions);
  };

  const sortByFollowers = () => {
    const sortedFollowers = [...angularData];
    sortedFollowers.sort((a, b) =>
      a.followers < b.followers ? 1 : b.followers < a.followers ? -1 : 0
    );

    setAngularData(sortedFollowers);
  };

  const sortByPublicRepos = () => {
    const sortedPublicRepos = [...angularData];
    sortedPublicRepos.sort((a, b) =>
      a.public_repos < b.public_repos
        ? 1
        : b.public_repos < a.public_repos
        ? -1
        : 0
    );

    setAngularData(sortedPublicRepos);
  };

  const sortByPublicGists = () => {
    const sortedPublicGists = [...angularData];
    sortedPublicGists.sort((a, b) =>
      a.public_gists < b.public_gists
        ? 1
        : b.public_gists < a.public_gists
        ? -1
        : 0
    );

    setAngularData(sortedPublicGists);

    console.log(angularData);
  };

  return (
    <div>
      {angularData.length > 0 &&
        angularData.map((contributors) => (
          // <div className="container-fluid d-grid justify-content-center">
          <div className="wrapper">
            {/* <div className="row"> */}
            {/* <div className="wrapper"> */}

            <CardUI
              contributors={contributors}
              key={contributors.id}
              img={contributors.avatarUrl}
              title={contributors.name}
              contributions={contributors.contribution}
              followers={contributors.followers}
              publicRepos={contributors.public_repos}
              publicGists={contributors.public_gists}
              // data={angularData}
            />
            {/* <Link
              className="btn btn-outline-success "
              to={`/userprofile/${contributors.login}`}
              state={{ contributors }}
            >
              <button className="btn">More Details</button>
            </Link> */}

            {/* </div> */}
            {/* <div className="col-md-3 col-sm-6 mb-3">
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
        </div> */}
            {/* </div> */}
          </div>
        ))}
    </div>
  );
}

export default Cards;
