import React from 'react';
import AOS from 'aos';
import Particles from "react-particles-js";
import 'aos/dist/aos.css';
import Profile from "../Content/Profile.jpg";

AOS.init({
    delay: 3000,
    duration: 800,
});

export default function Home() {

    return (
        <div className='particleBackground'>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 60,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />

            <div
                className='profile'
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'>
                <img src={Profile} alt='Profile' className='proImg' />
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
