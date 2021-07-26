import React, { useState } from "react";
import Background from "../utils/iconBackground";
import Carousel from "../utils/Carousel";
import { skillSet1, skillSet2 } from "../content/Skills";
import Footer from "./Footer";

export default function Projects() {
    const [screenSize, setScreenSize] = useState(
        typeof window !== "undefined" ? window.screen.width : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenSize(window.screen.width);
        });
    }

    return (
        <div>
            <h1 className='skills' id='skills'>
                Skills
            </h1>
            <div className='iconsBackground'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Background />
                </div>

                <div className='iconsBackContent'>
                    <div className='row skillsRow '>
                        <div className='column skillsColumn'>
                            {skillSet1.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        {skill.icon ? skill.icon : null}
                                        <h3>{skill.skill}</h3>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='skillsBorder'></div>
                        <div className='column skillsColumn'>
                            {skillSet2.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        {skill.icon ? skill.icon : null}
                                        <h3>{skill.skill}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <h1 className='projects' id='project'>
                        Projects
                    </h1>

                    <Carousel />

                    <h1 className='Connect'>
                        {screenSize <= 1070 ? "Contact Me" : "Contact Me ..."}
                    </h1>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
