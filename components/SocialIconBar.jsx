import React, { useState } from "react";

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

    var Icons = {
        github: 'https://github.com/abhi19201',
        gmail: 'mailto:abhiwankhade192@gmail.com',
        linkedin: 'https://www.linkedin.com/in/abhijeetwankhade/',
        phone: "tel: +917720998898"
    };

    return (
        <div className={`socialPane ${hideSideBar}`}>
            <div className='paneBorder'>
                <div className='socialArray'>
                    {Object.keys(Icons).map((icon, id) => {
                        return (
                            <div
                                className='socialIconC '
                                key={id}
                                onClick={() => {
                                    window.open(Icons[icon]);
                                }}
                                
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
                                <img
                                    src={`/icons/${icon}.png`}
                                    className='icons'
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
