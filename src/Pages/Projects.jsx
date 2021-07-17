import React from "react";
import Background from "../Components/iconBackground";
import ProjectArray from "../Content/Projects";
import Carousel from "../Components/Carousel";
import { skillSet1, skillSet2 } from "../Content/Skills";
import Footer from "../Structure/Footer";

export default function Projects() {
    return (
        <div >
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
                            {skillSet1.map((skill) => {
                                return (
                                    <div>
                                        {skill.icon ? skill.icon : null}
                                        <h3>{skill.skill}</h3>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='skillsBorder'></div>
                        <div className='column skillsColumn'>
                            {skillSet2.map((skill) => {
                                return (
                                    <div>
                                        {skill.icon ? skill.icon : null}
                                        <h3>{skill.skill}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <h1 className='projects' id='project' >
                        Projects
                    </h1>

                    <Carousel projects={ProjectArray} />

                    <h1 className='Connect'>Let's Connect ...</h1>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
