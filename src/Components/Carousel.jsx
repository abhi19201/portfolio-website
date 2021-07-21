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
                console.log("hello ji" + Object.values(data));
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
