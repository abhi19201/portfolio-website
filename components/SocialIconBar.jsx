import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SocialIconBar() {
    const [hideSideBar, setHideBar] = useState(" ");
    const [screenSize, setScreenSize] = useState(
        typeof window !== "undefined" ? window.screen.width : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenSize(window.screen.width);
        });
    }

    const changeBarView = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY >= 1900) {
                setHideBar("hideBar");
            }

            if (window.scrollY < 1900) {
                setHideBar(" ");
            }
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeBarView);
    }

    var Icons = ["github", "fa-gmail", "linkedin", "twitter"];

    return (
        <div className={`socialPane ${hideSideBar}`}>
            <div className='paneBorder'>
                <div className='socialArray'>
                    {Icons.map((icon, id) => {
                        return (
                            <div
                                className='socialIconC '
                                key={id}
                                style={
                                    screenSize <= 480
                                        ? {
                                              height: "3rem",
                                              width: "3rem",
                                              marginBottom: "1vh",
                                          }
                                        : { height: "4rem", width: "4rem" }
                                }>
                                <svg
                                    height={screenSize <= 480 ? "3rem" : "4rem"}
                                    width={screenSize <= 480 ? "3rem" : "4rem"}>
                                    <circle
                                        cx={
                                            screenSize <= 480
                                                ? "1.5rem"
                                                : "2rem"
                                        }
                                        cy={
                                            screenSize <= 480
                                                ? "1.5rem"
                                                : "2rem"
                                        }
                                        r='1.2rem'
                                        stroke='white'
                                        strokeWidth='2'
                                        fill='none'></circle>
                                </svg>
                                {icon != "fa-gmail" ? (
                                    <FontAwesomeIcon
                                        className={`icons fa-lg ${icon}`}
                                        icon={["fab", `${icon}`]}
                                    />
                                ) : (
                                    <i className='fab fa-lg fa-gmail facebook'></i>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
