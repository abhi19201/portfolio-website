import React, { useState, useEffect, useRef } from "react";
import "../mySASS/_carousel.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";

export default function Carousel() {
    const [GitData, setGitData] = React.useState(null);
    const [current, setCurrent] = useState(0);
    const [languages, setLanguages] = useState(null);
    const [swipeDirection, setDirection] = useState("rightSwipe");
    const [imgDirection, setImgDirection] = useState("imgRightMove");
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });
    var IntervalId = useRef;

    useEffect(() => {
        var gitProjects;

        fetch("https://api.github.com/users/Abhi19201/repos")
            .then((res) => res.json())
            .then((data) => {
                gitProjects = data.slice();
                setGitData([...data]);
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

    if (GitData)
        fetch(GitData[current].languages_url)
            .then((response) => response.json())
            .then((result) => setLanguages(Object.keys(result)))
            .catch(function (err) {
                console.error();
            });

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
                    console.log(GitData);
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
                                              class={`carouselContainer ${swipeDirection}`}>
                                              <div class='container_content'>
                                                  <div class='container_content_inner'>
                                                      <div class='projTitle'>
                                                          <h1 class='projHead'>
                                                              {repo.name}
                                                          </h1>
                                                      </div>
                                                      <div class='par'>
                                                          <p className='projDes'>
                                                              {repo.description}
                                                          </p>
                                                      </div>
                                                      <div class='btns'>
                                                          {repo.homepage ? (
                                                              <Button
                                                                  class='btns_more'
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
                                                              class='btns_more'
                                                              onClick={() => {
                                                                  window.open(
                                                                      repo.html_url
                                                                  );
                                                              }}>
                                                              <i className='fab fa-github fa-2x gitIcon'></i>
                                                              Repo
                                                          </Button>
                                                      </div>

                                                      {screenSize >= 650 ? (
                                                          <div className='languages'>
                                                              <div className='borderC'></div>
                                                              <div className='lanCollection'>
                                                                  {languages
                                                                      ? languages.map(
                                                                            (
                                                                                language,
                                                                                key
                                                                            ) => {
                                                                                return (
                                                                                    <div className='lan'>
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
                                              <div class='container_outer_img'>
                                                  <div class='img-inner'>
                                                      <img
                                                          src={`https://raw.githubusercontent.com/abhi19201/${repo.name}/master/screenshot.png`}
                                                          alt=''
                                                          class={`container_img ${imgDirection}`}
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class='overlay'></div>
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
