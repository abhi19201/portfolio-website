import React from "react";
import AOS from "aos";
//import Particles from "react-particles-js";
import "aos/dist/aos.css";
import Profile from "../Content/Profile.jpg";
import Particles from "react-tsparticles";

AOS.init({
    delay: 3000,
    duration: 800,
});

export default function Home() {
    //tsParticles.load("tsparticles", );

    return (
        <div className='particleBackground'>
            <Particles
                options={{
                    fpsLimit: 300,
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 1,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 30,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                }}
            />

            <div className='profileImg'>
                <div
                    className='profile'
                    data-aos='fade-down'
                    data-aos-easing='linear'
                    data-aos-duration='1500'>
                    <img src={Profile} alt='Profile' className='proImg' />
                </div>

                <div className='imgStripe1'></div>
                <div className='imgStripe2'></div>
                <div className='imgStripe3'></div>
            </div>

            <div className='home'>
                <div className='title'>
                    <div className='inner-title'>
                        <div className='hi'>
                            <div className='inner-hi'>Hi,</div>
                        </div>
                        <div className='name'>
                            <div className='inner-name'>I'm Abhijeet,</div>
                        </div>
                        <div className='profession' data-aos='fade-down'>
                            Full Stack and Android Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
{
                    particles: {
                        number: {
                            value: 30,
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 4,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: false,
                                mode: "repulse",
                            },
                        },
                    },
                }
*/
