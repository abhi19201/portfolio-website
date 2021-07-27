import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";

import gitLocalData from "../content/github";

export default function Carousel() {
    const gitUrl = "https://api.github.com/users/Abhi19201/repos";

    const [GitData, setGitData] = React.useState([...gitLocalData]);
    const [current, setCurrent] = useState(0);
    const [languages, setLanguages] = useState({});
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
        var gitProjects = gitLocalData;
        async function fetchGitRepo() {
            let repos = await fetch(
                "https://api.github.com/users/Abhi19201/repos"
            );

            if (repos.status === 200) {
                repos = await repos.json();

                gitProjects = [...repos];
                setGitData([...repos]);
            }
        }



        fetchGitRepo().then(() => {
            gitProjects.forEach((count, id) => {
                fetch(count.languages_url)
                    .then((response) => response.json())
                    .then((result) => {
                        setLanguages((language) => ({ ...language, [count.name]: Object.keys(result) }));
                        
                    })
                    .catch(function (err) {
                        console.error();
                    });
            });
        });

        // var gitProjects = gitLocalData;//GitDataFetch();

        // setGitData([...gitProjects]);

        // if (gitProjects) {
        //     gitProjects.forEach((count, id) => {
        //         fetch(count.languages_url)
        //             .then((response) => response.json())
        //             .then((result) => {
        //                 setLanguages((language) => [...language, result]);
        //             })
        //             .catch(function (err) {
        //                 console.error();
        //             });
        //     });
        // }

        // fetch("https://api.github.com/users/Abhi19201/repos")
        //     .then((res) => {
        //         res.json();
        //         setGitStatus(res.status);
        //         console.log(gitStatus + " ybjn " + res.status);
        //     })
        //     .then((data) => {
        //         if (gitStatus === 200) {
        //             gitProjects = Object.values(data);
        //             setGitData([...data]);

        //             console.log("11" + gitStatus);

        //             if (data) {
        //                 data.forEach((count, id) => {
        //                     fetch(count.languages_url)
        //                         .then((response) => response.json())
        //                         .then((result) => {
        //                             setLanguages((language) => [
        //                                 ...language,
        //                                 result,
        //                             ]);
        //                         })
        //                         .catch(function (err) {
        //                             console.error();
        //                         });
        //                 });
        //             }
        //         } else {
        //             gitProjects = Object.values(gitReposLocal);
        //             setGitData([...gitReposLocal]);

        //             console.log("11" + gitStatus);

        //             if (gitReposLocal) {
        //                 gitReposLocal.forEach((count, id) => {
        //                     fetch(count.languages_url)
        //                         .then((response) => response.json())
        //                         .then((result) => {
        //                             setLanguages((language) => [
        //                                 ...language,
        //                                 result,
        //                             ]);
        //                         })
        //                         .catch(function (err) {
        //                             console.error();
        //                         });
        //                 });
        //             }
        //         }
        //     });

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
                }}
                aria-label='leftArrow'>
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
                                                                  }}
                                                                  aria-label='repoHome'>
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
                                                              }}
                                                              aria-label='gitButton'>
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
                                                                  {languages[repo.name]
                                                                      ? languages[repo.name].map(
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

            <Button
                className='arrow2'
                onClick={nextProject}
                aria-label='rightArrow'>
                <ArrowForwardIosIcon className='rightArrow' />
            </Button>
        </div>
    );
}
