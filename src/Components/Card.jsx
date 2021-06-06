import React from "react";
import { useEffect, useRef } from 'react';
import ABLogo from "./ABLogo";
import VanillaTilt from "vanilla-tilt";


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  

function Card(props) {

    

    const options = {
      max: 25,
      speed: 400,
    };


    return (
        <Tilt className="box blob"  options={options} >
            {/* <button className="buy" onClick={props.onClick}>Start</button> */}
            <div className="product">
                <ABLogo 
                  height="15vmax"
                />
            </div>
        </Tilt>
    );
}

export default Card;