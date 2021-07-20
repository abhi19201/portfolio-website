import React, { useState } from "react";


export default function SocialIconBar() {
    const [hideSideBar, setHideBar] = useState(" ");
    const [screenSize, setScreenSize] = useState(window.screen.width);
    const [screenRatio, setScreenRatio] = useState(
        window.screen.height
    );

    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
        setScreenRatio(window.screen.height);
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
        "fab fa-instagram fa-lg instagram",
        "fab fa-lg fa-facebook-f facebook",
        "fab fa-lg fa-twitter twitter",
        "fab fa-lg fa-youtube youtube",
    ];

    return (
        <div className={`socialPane ${hideSideBar}`} onClick={()=>{console.log(screenRatio + "hi " + screenSize);}} >
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
