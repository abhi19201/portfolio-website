import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../Content/Profile.jpg";
import Particles from "particlesjs";
import Par from "./homeParticles";

AOS.init({
    delay: 3000,
    duration: 800,
});



export default function Home() {

    return (
        <div className='particleBackground'>
            <Par/>
            {/* https://marcbruederlin.github.io/particles.js/#documentation */}

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
