import React, { useState, useEffect } from "react";

export default function IconBackground(props) {
    const [screenHeight, setScreenHeight] = useState(window.screen.height);

    window.addEventListener("resize", () => {
        setScreenHeight(window.screen.height);
    });

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
                <i className='fab fa-react marquee-icons'></i>
                <i className='fab fa-css3-alt marquee-icons'></i>
                <i className='fab fa-css3 marquee-icons'></i>
                <i className='fab fa-dev marquee-icons'></i>
                <i className='fab fa-docker marquee-icons'></i>
                <i className='fab fa-figma marquee-icons'></i>
                <i className='fab fa-github marquee-icons'></i>
                <i className='fab fa-git-square marquee-icons'></i>
                <i className='fab fa-html5 marquee-icons'></i>
                <i className='fab fa-java marquee-icons'></i>
                <i className='fab fa-js-square marquee-icons'></i>
                <i className='fab fa-linux marquee-icons'></i>
                <i className='fab fa-mailchimp marquee-icons'></i>
                <i className='fab fa-node marquee-icons'></i>
                <i className='fab fa-node-js marquee-icons'></i>
                <i className='fab fa-npm marquee-icons'></i>
                <i className='fab fa-sass marquee-icons'></i>

                <i className='fab fa-react marquee-icons'></i>
                <i className='fab fa-css3-alt marquee-icons'></i>
                <i className='fab fa-css3 marquee-icons'></i>
                <i className='fab fa-dev marquee-icons'></i>
                <i className='fab fa-docker marquee-icons'></i>
                <i className='fab fa-figma marquee-icons'></i>
                <i className='fab fa-github marquee-icons'></i>
                <i className='fab fa-git-square marquee-icons'></i>
                <i className='fab fa-html5 marquee-icons'></i>
            </div>
        );
    }

    return (
        <section className='marquee-collection'>
            <div className='marquee'>{bgSchema()}</div>
        </section>
    );
}
