import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconBackground(props) {
    const [screenHeight, setScreenHeight] = useState(
        typeof window !== "undefined" ? window.screen.height : null
    );

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenHeight(window.screen.height);
        });
    }

    var Icons = [
        "react",
        "css3-alt",
        "css3",
        "dev",
        "docker",
        "figma",
        "github",
        "git-square",
        "html5",
        "java",
        "js-square",
        "linux",
        "mailchimp",
        "node",
        "node-js",
        "npm",
        "sass",

        "react",
        "css3-alt",
        "css3",
        "dev",
        "docker",
        "figma",
        "github",
        "git-square",
        "html5",
    ];

    useEffect(() => {
        const marqueeCollection = document.querySelector(".marquee-collection");

        var numOfIconArrays = 15;

        if (screenHeight >= 900) {
            numOfIconArrays = 14;
        } else if (screenHeight >= 750) {
            numOfIconArrays = 16;
        } else if (screenHeight >= 680) {
            numOfIconArrays = 17;
        } else if (screenHeight >= 630) {
            numOfIconArrays = 18;
        } else if (screenHeight <= 580) {
            numOfIconArrays = 19;
        } else {
            numOfIconArrays = 20;
        }

        for (var i = 0; i < numOfIconArrays; i++)
            marqueeCollection.appendChild(
                marqueeCollection.children[0].cloneNode(true)
            );
    }, [screenHeight]);

    function bgSchema() {
        return (
            <div>
                {Icons.map((icon, id) => {
                    return (
                        <FontAwesomeIcon
                            key={id}
                            className='marquee-icons'
                            icon={["fab", `${icon}`]}
                        />
                    );
                })}
                
            </div>
        );
    }

    return (
        <section className='marquee-collection'>
            <div className='marquee'>{bgSchema()}</div>
        </section>
    );
}
