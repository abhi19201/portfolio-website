import React,{useEffect} from 'react';
import Portfolio from "../Components/Portfolio";
import Card from "../Components/Card";
import Social from "../Components/Social";
import Particles from "react-particles-js";
import Home from "./Home";
import ProjectCard from "../Components/projectCard";
import { Button } from '@material-ui/core';
import $ from "jquery";

function Welcome() {

  const [btnClass, addClass] = React.useState("");
  const [GitData, setGitData] = React.useState(null);

  useEffect(() => {
    
    fetch('https://api.github.com/users/Abhi19201/repos')
      .then(res=> res.json())
      .then(data => {
        setGitData([...data]);
      });
  }, [])


    return (
      <div className="welcomeScreen" id="top" >

        <div className="navBa" >
          <div className="navTop" ></div>

          <div className="mylogo" >
            <Card />
          </div>

          <ul className="navItems" >
            <li className="item item1" onClick={()=>{document.getElementById('top').scrollIntoView({ behavior: 'smooth' })}} >Home</li>
            <li className="item item2" onClick={()=>{document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}} >About</li>
            <li className="item item3" onClick={()=>{document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}} >Projects</li>
            <li className="item item4" onClick={()=>{document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}} >Contact</li>
            <li className="item item4" onClick={()=>{$("#top").visible(true) ? alert("ok") : alert("no") }} >Contact</li>
          </ul>

          <div className="line"/>
        </div>

        <div className="particleBackground" >
        <Particles
          params={{
            "particles": {
              "number": {
                  "value": 60
              },
              "size": {
              "value": 3
              }
          },
          "interactivity": {
              "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
              }
          }
        }} />

        <Home/>

        </div>

        <div className="aboutMe" id="about">
          <div className="word" >About</div>
          <p className="about">
          Indian Institute of Information Technology, Nagpur is one of the Indian Institutes of Information Technology and an Institute of National Importance located in Nagpur, Maharashtra. The institute started functioning from July 2016 in a temporary campus at Bharat Sanchar Nigam Limited's Regional Telecom Training Centre
          </p>
        </div>
        
        <h1 className="project" id="project">Projects</h1>
        <div className="iconsBackground">
          <Portfolio/>

          <div class="projectCard" onClick={()=>{console.log(GitData)}} >
            {GitData!=null ? GitData.map((repo, id)=>{
              return(
                <ProjectCard
                id={repo.name}
                name={repo.name}
                url={repo.html_url}
              />
              )
            })
            : (<ProjectCard
                id="1"
                name="null"
              />)
            }

          </div>
        </div>

      </div>
    )
}



export default Welcome;

