import React, { useState, useEffect, useRef } from "react";
// import "../mySASS/_carousel.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";

export default function Carousel() {
    const [GitData, setGitData] = React.useState(null);
    const [current, setCurrent] = useState(0);
    const [languages, setLanguages] = useState([]);
    const [swipeDirection, setDirection] = useState("rightSwipe");
    const [imgDirection, setImgDirection] = useState("imgRightMove");
    const [screenSize, setScreenSize] = useState(
        typeof window !== "undefined" ? window.screen.width : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenSize(window.screen.width);
        });
    }

    var IntervalId = useRef;

    useEffect(() => {
        var gitProjects;

        fetch("https://api.github.com/users/Abhi19201/repos")
            .then((res) => res.json())
            .then((data) => {
                gitProjects = Object.values(data);
                setGitData([...data]);

                if (data) {
                    data.forEach((count, id) => {
                        fetch(count.languages_url)
                            .then((response) => response.json())
                            .then((result) => {
                                setLanguages((language) => [
                                    ...language,
                                    result,
                                ]);
                            })
                            .catch(function (err) {
                                console.error();
                            });
                    });
                }
            });

        IntervalId.current = setInterval(() => {
            setCurrent((c) => {
                if (c === gitProjects.length - 1) {
                    return 0;
                } else {
                    return c + 1;
                }
            });
        }, 5000);

        return () => clearInterval(IntervalId);
    }, [IntervalId]);

    const nextProject = () => {
        setDirection("rightSwipe");
        setImgDirection("imgRightMove");
        if (GitData) {
            setCurrent(current === GitData.length - 1 ? 0 : current + 1);
        }
    };

    // if (GitData)
    //     fetch(GitData[current].languages_url)
    //         .then((response) => response.json())
    //         .then((result) => setLanguages(Object.keys(result)))
    //         .catch(function (err) {
    //             console.error();
    //         });

    function prevProject() {
        setDirection("leftSwipe");
        setImgDirection("imgLeftMove");
        if (GitData)
            setCurrent(current === 0 ? GitData.length - 1 : current - 1);
    }

    if (!Array.isArray(GitData) || GitData.length <= 0) {
        return null;
    }

    return (
        <div
            className='carousel'
            onMouseOver={() => {
                clearInterval(IntervalId.current);
            }}
            onMouseOut={() => {
                IntervalId.current = setInterval(() => {
                    setCurrent((c) => {
                        if (c === GitData.length - 1) {
                            return 0;
                        } else {
                            return c + 1;
                        }
                    });
                }, 5000);
                setDirection("rightSwipe");
                setImgDirection("imgRightMove");
            }}>
            <div className='hoverTag'>Hover To Pause</div>
            <Button
                className='arrow1'
                onClick={() => {
                    prevProject();
                }}>
                <ArrowBackIosIcon className='leftArrow' />
            </Button>

            <div className='crouselContent'>
                {GitData != null
                    ? GitData.map((repo, index) => {
                          return (
                              <div
                                  className={
                                      index === current
                                          ? "slide active"
                                          : "slide"
                                  }
                                  key={index}>
                                  {index === current && (
                                      <div>
                                          <div
                                              className={`carouselContainer ${swipeDirection}`}>
                                              <div className='container_content'>
                                                  <div className='container_content_inner'>
                                                      <div className='projTitle'>
                                                          <h1 className='projHead'>
                                                              {repo.name}
                                                          </h1>
                                                      </div>
                                                      <div className='par'>
                                                          <p className='projDes'>
                                                              {repo.description}
                                                          </p>
                                                      </div>
                                                      <div className='btns'>
                                                          {repo.homepage ? (
                                                              <Button
                                                                  className='btns_more'
                                                                  onClick={() => {
                                                                      window.open(
                                                                          repo.homepage
                                                                      );
                                                                  }}>
                                                                  {" "}
                                                                  View Project{" "}
                                                              </Button>
                                                          ) : null}
                                                          <Button
                                                              className='btns_more'
                                                              onClick={() => {
                                                                  window.open(
                                                                      repo.html_url
                                                                  );
                                                              }}>
                                                              <FontAwesomeIcon
                                                                  className='fa-2x gitIcon'
                                                                  icon={[
                                                                      "fab",
                                                                      "github",
                                                                  ]}
                                                              />
                                                              
                                                              Repo
                                                          </Button>
                                                      </div>

                                                      {screenSize >= 650 ? (
                                                          <div className='languages'>
                                                              <div className='borderC'></div>
                                                              <div className='lanCollection'>
                                                                  {languages[
                                                                      current
                                                                  ]
                                                                      ? Object.keys(
                                                                            languages[
                                                                                current
                                                                            ]
                                                                        ).map(
                                                                            (
                                                                                language,
                                                                                id
                                                                            ) => {
                                                                                return (
                                                                                    <div
                                                                                        className='lan'
                                                                                        key={
                                                                                            id
                                                                                        }>
                                                                                        {" "}
                                                                                        {
                                                                                            language
                                                                                        }{" "}
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )
                                                                      : null}
                                                              </div>
                                                          </div>
                                                      ) : null}
                                                  </div>
                                              </div>
                                              <div className='container_outer_img'>
                                                  <div className='img-inner'>
                                                      <img
                                                          src={`https://raw.githubusercontent.com/abhi19201/${repo.name}/master/screenshot.png`}
                                                          alt=''
                                                          className={`container_img ${imgDirection}`}
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                          <div className='overlay'></div>
                                      </div>
                                  )}
                              </div>
                          );
                      })
                    : null}
            </div>

            <Button className='arrow2' onClick={nextProject}>
                <ArrowForwardIosIcon className='rightArrow' />
            </Button>
        </div>
    );
}

// /*
//     [
//     {
//         "id": 328544391,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzMjg1NDQzOTE=",
//         "name": "AMS",
//         "full_name": "abhi19201/AMS",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/AMS",
//         "description": "Attendance Management System is a flutter based application for achieving online attendance marking.",
//         "fork": true,
//         "url": "https://api.github.com/repos/abhi19201/AMS",
//         "forks_url": "https://api.github.com/repos/abhi19201/AMS/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/AMS/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/AMS/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/AMS/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/AMS/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/AMS/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/AMS/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/AMS/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/AMS/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/AMS/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/AMS/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/AMS/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/AMS/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/AMS/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/AMS/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/AMS/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/AMS/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/AMS/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/AMS/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/AMS/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/AMS/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/AMS/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/AMS/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/AMS/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/AMS/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/AMS/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/AMS/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/AMS/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/AMS/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/AMS/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/AMS/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/AMS/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/AMS/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/AMS/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/AMS/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/AMS/deployments",
//         "created_at": "2021-01-11T04:03:53Z",
//         "updated_at": "2021-07-15T12:25:48Z",
//         "pushed_at": "2021-07-15T07:31:59Z",
//         "git_url": "git://github.com/abhi19201/AMS.git",
//         "ssh_url": "git@github.com:abhi19201/AMS.git",
//         "clone_url": "https://github.com/abhi19201/AMS.git",
//         "svn_url": "https://github.com/abhi19201/AMS",
//         "homepage": "",
//         "size": 58,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": "JavaScript",
//         "has_issues": false,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": null,
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "master"
//     },
//     {
//         "id": 328544240,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzMjg1NDQyNDA=",
//         "name": "IIITR-Insights",
//         "full_name": "abhi19201/IIITR-Insights",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/IIITR-Insights",
//         "description": "IIITR-Insights is a general utility android app for students of Indian Institute Of Information Technology, Raichur.",
//         "fork": true,
//         "url": "https://api.github.com/repos/abhi19201/IIITR-Insights",
//         "forks_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/IIITR-Insights/deployments",
//         "created_at": "2021-01-11T04:03:02Z",
//         "updated_at": "2021-07-15T07:52:00Z",
//         "pushed_at": "2021-07-15T07:24:10Z",
//         "git_url": "git://github.com/abhi19201/IIITR-Insights.git",
//         "ssh_url": "git@github.com:abhi19201/IIITR-Insights.git",
//         "clone_url": "https://github.com/abhi19201/IIITR-Insights.git",
//         "svn_url": "https://github.com/abhi19201/IIITR-Insights",
//         "homepage": "",
//         "size": 5935,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": "Dart",
//         "has_issues": false,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "apache-2.0",
//             "name": "Apache License 2.0",
//             "spdx_id": "Apache-2.0",
//             "url": "https://api.github.com/licenses/apache-2.0",
//             "node_id": "MDc6TGljZW5zZTI="
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "master"
//     },
//     {
//         "id": 355241354,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzNTUyNDEzNTQ=",
//         "name": "LLVM",
//         "full_name": "abhi19201/LLVM",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/LLVM",
//         "description": "Report on OOP concepts and interesting C++ features used in LLVM ",
//         "fork": false,
//         "url": "https://api.github.com/repos/abhi19201/LLVM",
//         "forks_url": "https://api.github.com/repos/abhi19201/LLVM/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/LLVM/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/LLVM/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/LLVM/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/LLVM/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/LLVM/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/LLVM/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/LLVM/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/LLVM/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/LLVM/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/LLVM/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/LLVM/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/LLVM/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/LLVM/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/LLVM/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/LLVM/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/LLVM/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/LLVM/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/LLVM/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/LLVM/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/LLVM/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/LLVM/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/LLVM/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/LLVM/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/LLVM/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/LLVM/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/LLVM/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/LLVM/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/LLVM/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/LLVM/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/LLVM/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/LLVM/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/LLVM/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/LLVM/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/LLVM/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/LLVM/deployments",
//         "created_at": "2021-04-06T15:34:56Z",
//         "updated_at": "2021-04-06T18:55:09Z",
//         "pushed_at": "2021-04-06T15:39:02Z",
//         "git_url": "git://github.com/abhi19201/LLVM.git",
//         "ssh_url": "git@github.com:abhi19201/LLVM.git",
//         "clone_url": "https://github.com/abhi19201/LLVM.git",
//         "svn_url": "https://github.com/abhi19201/LLVM",
//         "homepage": null,
//         "size": 3,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": null,
//         "has_issues": true,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "mit",
//             "name": "MIT License",
//             "spdx_id": "MIT",
//             "url": "https://api.github.com/licenses/mit",
//             "node_id": "MDc6TGljZW5zZTEz"
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "main"
//     },
//     {
//         "id": 331227070,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzMzEyMjcwNzA=",
//         "name": "Polling-Web-App-using-MERN-Stack",
//         "full_name": "abhi19201/Polling-Web-App-using-MERN-Stack",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/Polling-Web-App-using-MERN-Stack",
//         "description": "This Project helps to Create Forms containing questions and their options to choose between. Each Form will get it's own unique key which will give access to people wanting to submit their responses to the poll. ",
//         "fork": false,
//         "url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack",
//         "forks_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/Polling-Web-App-using-MERN-Stack/deployments",
//         "created_at": "2021-01-20T07:29:27Z",
//         "updated_at": "2021-07-16T06:29:59Z",
//         "pushed_at": "2021-07-16T06:29:57Z",
//         "git_url": "git://github.com/abhi19201/Polling-Web-App-using-MERN-Stack.git",
//         "ssh_url": "git@github.com:abhi19201/Polling-Web-App-using-MERN-Stack.git",
//         "clone_url": "https://github.com/abhi19201/Polling-Web-App-using-MERN-Stack.git",
//         "svn_url": "https://github.com/abhi19201/Polling-Web-App-using-MERN-Stack",
//         "homepage": "https://polling-mern-app.herokuapp.com/",
//         "size": 18918,
//         "stargazers_count": 3,
//         "watchers_count": 3,
//         "language": "JavaScript",
//         "has_issues": true,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "mit",
//             "name": "MIT License",
//             "spdx_id": "MIT",
//             "url": "https://api.github.com/licenses/mit",
//             "node_id": "MDc6TGljZW5zZTEz"
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 3,
//         "default_branch": "master"
//     },
//     {
//         "id": 321234588,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzMjEyMzQ1ODg=",
//         "name": "Restaurant-Management-System",
//         "full_name": "abhi19201/Restaurant-Management-System",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/Restaurant-Management-System",
//         "description": "This Project provides a Restaurant Management System with simplistic GUI and makes it easy for both customers and restaurant managers to handle their tasks with ease. It can be used by Restaurants to increase their reach to customers through online presence.",
//         "fork": false,
//         "url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System",
//         "forks_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/Restaurant-Management-System/deployments",
//         "created_at": "2020-12-14T04:37:55Z",
//         "updated_at": "2021-07-15T07:30:51Z",
//         "pushed_at": "2021-07-15T07:30:49Z",
//         "git_url": "git://github.com/abhi19201/Restaurant-Management-System.git",
//         "ssh_url": "git@github.com:abhi19201/Restaurant-Management-System.git",
//         "clone_url": "https://github.com/abhi19201/Restaurant-Management-System.git",
//         "svn_url": "https://github.com/abhi19201/Restaurant-Management-System",
//         "homepage": "",
//         "size": 7406,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": "Java",
//         "has_issues": true,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "mit",
//             "name": "MIT License",
//             "spdx_id": "MIT",
//             "url": "https://api.github.com/licenses/mit",
//             "node_id": "MDc6TGljZW5zZTEz"
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "master"
//     },
//     {
//         "id": 331192785,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzMzExOTI3ODU=",
//         "name": "Sign-Up-Sign-In-REST-Api",
//         "full_name": "abhi19201/Sign-Up-Sign-In-REST-Api",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/Sign-Up-Sign-In-REST-Api",
//         "description": "Project delivers an RESTful API to register and login an user. User's signin password is encrypted using hashing and salting. Therefore only the hash and salt will be stored in database with their email ids.",
//         "fork": false,
//         "url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api",
//         "forks_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/Sign-Up-Sign-In-REST-Api/deployments",
//         "created_at": "2021-01-20T04:31:21Z",
//         "updated_at": "2021-07-15T07:25:29Z",
//         "pushed_at": "2021-07-15T07:25:26Z",
//         "git_url": "git://github.com/abhi19201/Sign-Up-Sign-In-REST-Api.git",
//         "ssh_url": "git@github.com:abhi19201/Sign-Up-Sign-In-REST-Api.git",
//         "clone_url": "https://github.com/abhi19201/Sign-Up-Sign-In-REST-Api.git",
//         "svn_url": "https://github.com/abhi19201/Sign-Up-Sign-In-REST-Api",
//         "homepage": null,
//         "size": 119,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": "EJS",
//         "has_issues": true,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "mit",
//             "name": "MIT License",
//             "spdx_id": "MIT",
//             "url": "https://api.github.com/licenses/mit",
//             "node_id": "MDc6TGljZW5zZTEz"
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "master"
//     },
//     {
//         "id": 384881998,
//         "node_id": "MDEwOlJlcG9zaXRvcnkzODQ4ODE5OTg=",
//         "name": "tnp",
//         "full_name": "abhi19201/tnp",
//         "private": false,
//         "owner": {
//             "login": "abhi19201",
//             "id": 56535297,
//             "node_id": "MDQ6VXNlcjU2NTM1Mjk3",
//             "avatar_url": "https://avatars.githubusercontent.com/u/56535297?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/abhi19201",
//             "html_url": "https://github.com/abhi19201",
//             "followers_url": "https://api.github.com/users/abhi19201/followers",
//             "following_url": "https://api.github.com/users/abhi19201/following{/other_user}",
//             "gists_url": "https://api.github.com/users/abhi19201/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/abhi19201/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/abhi19201/subscriptions",
//             "organizations_url": "https://api.github.com/users/abhi19201/orgs",
//             "repos_url": "https://api.github.com/users/abhi19201/repos",
//             "events_url": "https://api.github.com/users/abhi19201/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/abhi19201/received_events",
//             "type": "User",
//             "site_admin": false
//         },
//         "html_url": "https://github.com/abhi19201/tnp",
//         "description": "Website For training and placement cell of IIITR",
//         "fork": true,
//         "url": "https://api.github.com/repos/abhi19201/tnp",
//         "forks_url": "https://api.github.com/repos/abhi19201/tnp/forks",
//         "keys_url": "https://api.github.com/repos/abhi19201/tnp/keys{/key_id}",
//         "collaborators_url": "https://api.github.com/repos/abhi19201/tnp/collaborators{/collaborator}",
//         "teams_url": "https://api.github.com/repos/abhi19201/tnp/teams",
//         "hooks_url": "https://api.github.com/repos/abhi19201/tnp/hooks",
//         "issue_events_url": "https://api.github.com/repos/abhi19201/tnp/issues/events{/number}",
//         "events_url": "https://api.github.com/repos/abhi19201/tnp/events",
//         "assignees_url": "https://api.github.com/repos/abhi19201/tnp/assignees{/user}",
//         "branches_url": "https://api.github.com/repos/abhi19201/tnp/branches{/branch}",
//         "tags_url": "https://api.github.com/repos/abhi19201/tnp/tags",
//         "blobs_url": "https://api.github.com/repos/abhi19201/tnp/git/blobs{/sha}",
//         "git_tags_url": "https://api.github.com/repos/abhi19201/tnp/git/tags{/sha}",
//         "git_refs_url": "https://api.github.com/repos/abhi19201/tnp/git/refs{/sha}",
//         "trees_url": "https://api.github.com/repos/abhi19201/tnp/git/trees{/sha}",
//         "statuses_url": "https://api.github.com/repos/abhi19201/tnp/statuses/{sha}",
//         "languages_url": "https://api.github.com/repos/abhi19201/tnp/languages",
//         "stargazers_url": "https://api.github.com/repos/abhi19201/tnp/stargazers",
//         "contributors_url": "https://api.github.com/repos/abhi19201/tnp/contributors",
//         "subscribers_url": "https://api.github.com/repos/abhi19201/tnp/subscribers",
//         "subscription_url": "https://api.github.com/repos/abhi19201/tnp/subscription",
//         "commits_url": "https://api.github.com/repos/abhi19201/tnp/commits{/sha}",
//         "git_commits_url": "https://api.github.com/repos/abhi19201/tnp/git/commits{/sha}",
//         "comments_url": "https://api.github.com/repos/abhi19201/tnp/comments{/number}",
//         "issue_comment_url": "https://api.github.com/repos/abhi19201/tnp/issues/comments{/number}",
//         "contents_url": "https://api.github.com/repos/abhi19201/tnp/contents/{+path}",
//         "compare_url": "https://api.github.com/repos/abhi19201/tnp/compare/{base}...{head}",
//         "merges_url": "https://api.github.com/repos/abhi19201/tnp/merges",
//         "archive_url": "https://api.github.com/repos/abhi19201/tnp/{archive_format}{/ref}",
//         "downloads_url": "https://api.github.com/repos/abhi19201/tnp/downloads",
//         "issues_url": "https://api.github.com/repos/abhi19201/tnp/issues{/number}",
//         "pulls_url": "https://api.github.com/repos/abhi19201/tnp/pulls{/number}",
//         "milestones_url": "https://api.github.com/repos/abhi19201/tnp/milestones{/number}",
//         "notifications_url": "https://api.github.com/repos/abhi19201/tnp/notifications{?since,all,participating}",
//         "labels_url": "https://api.github.com/repos/abhi19201/tnp/labels{/name}",
//         "releases_url": "https://api.github.com/repos/abhi19201/tnp/releases{/id}",
//         "deployments_url": "https://api.github.com/repos/abhi19201/tnp/deployments",
//         "created_at": "2021-07-11T07:03:42Z",
//         "updated_at": "2021-07-15T07:29:34Z",
//         "pushed_at": "2021-07-15T07:29:32Z",
//         "git_url": "git://github.com/abhi19201/tnp.git",
//         "ssh_url": "git@github.com:abhi19201/tnp.git",
//         "clone_url": "https://github.com/abhi19201/tnp.git",
//         "svn_url": "https://github.com/abhi19201/tnp",
//         "homepage": "https://tnp-dev.vercel.app/",
//         "size": 30639,
//         "stargazers_count": 0,
//         "watchers_count": 0,
//         "language": "JavaScript",
//         "has_issues": false,
//         "has_projects": true,
//         "has_downloads": true,
//         "has_wiki": true,
//         "has_pages": false,
//         "forks_count": 0,
//         "mirror_url": null,
//         "archived": false,
//         "disabled": false,
//         "open_issues_count": 0,
//         "license": {
//             "key": "mit",
//             "name": "MIT License",
//             "spdx_id": "MIT",
//             "url": "https://api.github.com/licenses/mit",
//             "node_id": "MDc6TGljZW5zZTEz"
//         },
//         "forks": 0,
//         "open_issues": 0,
//         "watchers": 0,
//         "default_branch": "master"
//     }
// ]
//     */
