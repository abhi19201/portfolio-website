import React from 'react';
import AOS from 'aos';
import Particles from "react-particles-js";
import 'aos/dist/aos.css';

AOS.init({
    delay: 3000,
    duration: 800,
});

export default function Home() {

    return (
        <div  className="particleBackground"  >
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

            <div className="home">

                <div class="title">
                    <div class="inner-title">
                        <div class="hi">
                            <div class="inner-hi">Hi,</div>
                        </div>
                        <div class="name">
                            <div class="inner-name">I'm Abhijeet,</div>
                        </div>
                        <div className="profession" data-aos="fade-down" >
                            Full Stack and Android Developer 
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
