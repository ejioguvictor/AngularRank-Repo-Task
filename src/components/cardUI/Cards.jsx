import React, { useEffect, useState } from "react";
import CardUI from "./CardUI";
import "./card.styles.css";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

function Cards() {
  const [isLoading, setIsLoading] = useState(true);
  const [angularData, setAngularData] = useState([]);

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

      // eslint-disable-next-line no-unused-vars
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
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAngularContributors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getContributors = async () => {
      await getAngularContributors();
    };
    getContributors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <TailSpin ariaLabel="loading-indicator" />
        </div>
      ) : (
        <div>
          <div className="container d-flex mt-5">
            <div className="row">
              {angularData.length > 0 &&
                angularData.map((contributors, id) => (
                  <div
                    className="justify-content-center mt-2 mb-2 col-lg-3 col-md-4 d-flex col-sm-6"
                    key={id}
                  >
                    <CardUI
                      contributors={contributors}
                      img={contributors.avatarUrl}
                      title={contributors.name}
                      contributions={contributors.contribution}
                      followers={contributors.followers}
                      publicRepos={contributors.public_repos}
                      publicGists={contributors.public_gists}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
