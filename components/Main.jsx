import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import SocialBar from "./SocialIconBar";

function Welcome() {
    return (
        <div className='welcomeScreen' id='top'>
            <NavBar />

            <SocialBar />

            <Home />

            <About />

            <Projects />
        </div>
    );
}

export default Welcome;
