import React, { useState } from "react";
import Particles from "particlesjs";

export default function HomeParticles() {
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });

    const size = () => {
        if (screenSize <= 1070) {
            return 20;
        } else {
            return 70;
        }
    };

    window.onload = function () {
        Particles.init({
            selector: ".background",
            connectParticles: true,
            color: "#FFFFFF",
            speed: 5,
            maxParticles: size(),
            sizeVariations: 3,
        });
    };

    return (
        <div>
            <canvas className='background'></canvas>
        </div>
    );
}
