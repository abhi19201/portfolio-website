import React from 'react';
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

export default function Navbar() {

    const options = {
        max: 25,
        speed: 400,
      };

    return (
        <div style={{zIndex:"-1"}}>
           <nav className="navBar">
   <a href="#first"><i className="far fa-user"></i></a>
   <a href="#second"><i className="fas fa-briefcase"></i></a>
   <a href="#third"><i className="far fa-file"></i></a>
   <a href="#fourth"><i className="far fa-address-card"></i></a>
 </nav>
  
<div className= 'containerSCSS'> 
  <section className= 'sectionSCSS' id= 'first'>
    <h1>First</h1>
  </section>
  
  <section  className= 'sectionSCSS' id= 'second'>
    <h1>Second</h1>
  </section>
  
 <section  className= 'sectionSCSS' id= 'third'>
   <h1>Third</h1>
  </section>
  
 <section  className= 'sectionSCSS' id= 'fourth'>
   <h1>Fourth</h1>
  </section>
</div>
        </div>
    )
}

{/* <div style={{backgroundColor: "white",height: "100%",position: "fixed",width: "6%"}}>
        <Tilt className="box"  options={options} >
            <div className="product">
                <ABLogo 
                    height="6rem"
                />
            </div>
        </Tilt>
        </div> */}