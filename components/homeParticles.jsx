import React, { useState, useEffect } from "react";
import Particles from "particlesjs";

export default function HomeParticles() {
    const [screenSize, setScreenSize] = useState(
        typeof window !== "undefined" ? window.screen.width : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenSize(window.screen.width);
        });
    }

    useEffect(() => {
        Particles.init({
            selector: ".background",
            connectParticles: true,
            color: "#FFFFFF",
            speed: 5,
            maxParticles: size(),
            sizeVariations: 3,
        });
    }, []);

    const size = () => {
        if (screenSize <= 1070) {
            return 20;
        } else {
            return 70;
        }
    };

    return (
        <div>
            <canvas className='background'></canvas>
        </div>
    );
}
