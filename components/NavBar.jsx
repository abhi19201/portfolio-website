import React, { useState } from "react";
import ABlogo from "../utils/ABLogo";

export default function Navbar() {
    const [navOpen, setnavOpen] = useState(false);
    const [navOpen2, setnavOpen2] = useState(false);
    const [navState, setState] = useState("");
    const [navClose, setNavClose] = useState("");
    const [screenSize, setScreenSize] = useState(
        typeof window !== "undefined" ? window.screen.width : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenSize(window.screen.width);
        });
    }

    const ResumeLink =
        "https://drive.google.com/file/d/10S1jdt3Rahcf2eke5AYiC_4cp-3mkRnx/view?usp=sharing";
    

    function navButton() {
        setnavOpen(!navOpen);
        if (!navOpen2) {
            setnavOpen2(true);
            setNavClose("");
        } else {
            setNavClose("closeAnnimation");
            setTimeout(() => {
                setnavOpen2(false);
            }, 1000);
        }
        setState((s) => {
            if (s === "") {
                return "is-active";
            } else {
                return "";
            }
        });
    }

    return (
        <div>
            {screenSize <= 768 ? (
                <div className='navOpenBtn'>
                    <button
                        className={`hamburger hamburger--arrowalt ${navState} ham`}
                        onClick={() => {
                            navButton();
                        }}
                        type='button'>
                        <span className='hamburger-box'>
                            <span className='hamburger-inner'></span>
                        </span>
                    </button>
                </div>
            ) : null}
            <div>
                {navOpen2 || screenSize > 768 ? (
                    <div className={`navBa ${navClose}`} id='navBar'>
                        <div>
                            <div className='navTop'>
                                <div className='mylogo'>
                                    <ABlogo
                                        height={
                                            screenSize <= 768
                                                ? "15vmax"
                                                : "8vmax"
                                        }
                                    />
                                </div>

                                {screenSize <= 768 ? (
                                    <div className='nameUnderLogo'>
                                        {" "}
                                        Abhijeet Wankhade
                                    </div>
                                ) : null}
                            </div>

                            <ul className='navItems'>
                                <li
                                    className='item item1'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        
                                        if (typeof document !== "undefined") {
                                            document
                                                .getElementById("top")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }
                                    }}>
                                    Home
                                </li>
                                <li
                                    className='item item2'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        
                                        if (typeof document !== "undefined") {
                                            document
                                                .getElementById("about")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }
                                    }}>
                                    About
                                </li>
                                <li
                                    className='item item3'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        
                                        if (typeof document !== "undefined") {
                                            document
                                                .getElementById("skills")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }
                                    }}>
                                    Skills
                                </li>
                                <li
                                    className='item item3'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        
                                        if (typeof document !== "undefined") {
                                            document
                                                .getElementById("project")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }
                                    }}>
                                    Projects
                                </li>
                                <li
                                    className='item item4'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        
                                        if (typeof document !== "undefined") {
                                            document
                                                .getElementById("footer")
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }
                                    }}>
                                    Contact
                                </li>
                                <li
                                    className='item item4'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        window.open(ResumeLink, "_blank");
                                    }}>
                                    Resume
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='mobileNav'></div>
                )}
            </div>
        </div>
    );
}
