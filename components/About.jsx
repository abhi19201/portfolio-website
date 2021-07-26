import React from "react";
import aboutText from "../content/About.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
    return (
        <div>
            <div className='aboutMe' id='about'>
                <div className='word'>About</div>
                <p className='about'>
                    {aboutText}
                    <span
                        className='clickText'
                        onClick={() => {
                            document.getElementById("project").scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        Check out my work
                    </span>{" "}
                    and{" "}
                    <span
                        className='clickText'
                        onClick={() => {
                            document.getElementById("footer").scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        get in touch
                    </span>{" "}
                    with me.
                </p>
            </div>
        </div>
    );
}
