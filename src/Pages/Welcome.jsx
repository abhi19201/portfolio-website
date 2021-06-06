import React from 'react';
import Portfolio from "../Components/Portfolio";
import Card from "../Components/Card";
import Social from "../Components/Social";
import Particles from "react-particles-js";


function Welcome() {

  const [btnClass, addClass] = React.useState("");
  const [bgSection, setBg] = React.useState(<div></div>);
  const [socialIcons, setSocialIcons] = React.useState(<Social annimation="" />);
  const [cardState, setCardState] = React.useState(true);

  function open() {

    setCardState(false);

      if(btnClass.includes("open")){
        console.log("_______________________");
      }else{
        addClass("open");
        setSocialIcons(<Social annimation="exit"/>);
        setTimeout(setSocialIcons, 2000);
        setBg(<Portfolio/>);
      }
    
  }

      //   <div>

      //         {logoCard()}

      //         {socialIcons}
            
      //         {bgSection}        
        
      // </div>

    return (
      <div className="welcomeScreen">
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

        <Card 
          onClick={()=>{open()}}
        />

        </div>

        <div className="iconsBackground">
          <Portfolio/>
        </div>
      </div>
    )
}

// {logoCard()}
// {socialIcons}
// {bgSection}

export default Welcome;

/*
 <Background 
          bg = {bgSectionClass}
        />
 */