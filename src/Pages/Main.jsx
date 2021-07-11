import React from 'react';
import NavBar from "./NavBar";
import About from './About';
import Projects from './Projects';
import Home from "./Home";

function Welcome() {

    return (
      <div className="welcomeScreen" id="top" >

        <NavBar/>

        <Home/>

        <About/>
        
        <Projects/>

      </div>
    )
}



export default Welcome;

