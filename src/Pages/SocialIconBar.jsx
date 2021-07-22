import React, { useState } from "react";


export default function SocialIconBar() {
    const [hideSideBar, setHideBar] = useState(" ");
    const [screenSize, setScreenSize] = useState(window.screen.width);

    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });
    const changeBarView = () => {
        if (window.scrollY >= 1900) {
            setHideBar("hideBar");
        }

        if (window.scrollY < 1900) {
            setHideBar(" ");
        }
    };

    window.addEventListener("scroll", changeBarView);

    var Icons = [
        "fab fa-github fa-lg github",
        "fab fa-lg fa-gmail facebook",
        "fab fa-lg fa-linkedin linkedin",
        "fab fa-lg fa-twitter twitter",
    ];

    return (
        <div className={`socialPane ${hideSideBar}`}  >
            <div className='paneBorder'>
                <div className='socialArray' >
                    
                    {Icons.map((icon, id)=>{
                        return (
                            <div
                                className='socialIconC '
                                key={id}
                                style={
                                    screenSize <= 480
                                        ? { height: "3rem", width: "3rem", marginBottom:"1vh" }
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
                                <i className={icon}></i>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
