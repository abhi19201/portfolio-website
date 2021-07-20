import React, { useState } from "react";
import Resume from "../Content/Resume.pdf";
import ABlogo from "../Components/ABLogo";

export default function Navbar() {
    const [navOpen, setnavOpen] = useState(false);
    const [navOpen2, setnavOpen2] = useState(false);
    const [navState, setState] = useState("");
    const [navClose, setNavClose] = useState("");
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });

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
                                        document
                                            .getElementById("top")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}>
                                    Home
                                </li>
                                <li
                                    className='item item2'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        document
                                            .getElementById("about")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}>
                                    About
                                </li>
                                <li
                                    className='item item3'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        document
                                            .getElementById("skills")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}>
                                    Skills
                                </li>
                                <li
                                    className='item item3'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        document
                                            .getElementById("project")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}>
                                    Projects
                                </li>
                                <li
                                    className='item item4'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        document
                                            .getElementById("footer")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}>
                                    Contact
                                </li>
                                <li
                                    className='item item4'
                                    onClick={() => {
                                        if (screenSize <= 768) navButton();
                                        window.location.href = Resume;
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
