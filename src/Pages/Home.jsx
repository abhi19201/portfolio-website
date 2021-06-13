import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    delay: 3000,
    duration: 800,
});

export default function Home() {

    return (
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
    )
}
