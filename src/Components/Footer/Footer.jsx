import React, { useState } from "react";
import "./_footer.scss";
import FooterLayout from "../FooterLayout.svg";
import EmailForm from "../EmailForm";

function Footer(props) {
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });

    var Icons = [
        "fab fa-github fa-lg github",
        "fab fa-lg fa-gmail facebook",
        "fab fa-lg fa-linkedin linkedin",
        "fab fa-lg fa-twitter twitter",
    ];

    return (
        <div className='main'>
            <footer>
                {screenSize >= 1070 ? (
                    <img src={FooterLayout} alt='layout' />
                ) : null}
                <div className='svgBorder2'></div>
                <div className='svgBorder3'></div>
                <EmailForm />
                <div className='footer'></div>

                <div className='footer-bottom'>
                    <div className='copyright ' onClick={()=>{window.open(
                        "https://www.google.com/maps/place/20%C2%B023'24.3%22N+78%C2%B006'11.4%22E/@20.3900806,78.1009808,17z/data=!3m1!4b1!4m9!1m2!10m1!1e2!3m5!1s0x3bd3e60444333e1b:0x0!7e2!8m2!3d20.3900806!4d78.1031695",
                        "_blank"
                    );}} >
                            <div className='socialIcon mapI'>
                                <i className='mapIcon'></i>
                            </div>
                            <div className="location" >
                                {" "}
                                My Location
                            {" "}
                            </div>
                    </div>

                    <div className='col-md-3 footer-B'>
                        <div className='footer-socials'>
                            {Icons.map((icon, id) => {
                                return (
                                    <div
                                        className='socialIcon'
                                        key={id}
                                        style={{
                                            height: "3rem",
                                            width: "3rem",
                                            marginBottom: "1vh",
                                        }}>
                                        <svg height={"3rem"} width={"3rem"}>
                                            <circle
                                                cx={"1.5rem"}
                                                cy={"1.5rem"}
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
            </footer>
        </div>
    );
}

export default Footer;
