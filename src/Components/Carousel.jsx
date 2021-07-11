import React from "react";
import "../mySASS/_carousel.scss";

export default function Carousel() {
    function bgSchema() {
        return (
            <div>
                <i className='fab fa-react carousel-icons'></i>
                <i className='fab fa-css3-alt carousel-icons'></i>
                <i className='fab fa-css3 carousel-icons'></i>
                <i className='fab fa-dev carousel-icons'></i>
                <i className='fab fa-docker carousel-icons'></i>
                <i className='fab fa-figma carousel-icons'></i>
                <i className='fab fa-github carousel-icons'></i>
                <i className='fab fa-git-square carousel-icons'></i>
                <i className='fab fa-html5 carousel-icons'></i>
                <i className='fab fa-java carousel-icons'></i>
                <i className='fab fa-js-square carousel-icons'></i>
                <i className='fab fa-linux carousel-icons'></i>
                <i className='fab fa-mailchimp carousel-icons'></i>
                <i className='fab fa-node carousel-icons'></i>
                <i className='fab fa-node-js carousel-icons'></i>
                <i className='fab fa-npm carousel-icons'></i>
                <i className='fab fa-sass carousel-icons'></i>

                <i className='fab fa-react carousel-icons'></i>
                <i className='fab fa-css3-alt carousel-icons'></i>
                <i className='fab fa-css3 carousel-icons'></i>
                <i className='fab fa-dev carousel-icons'></i>
                <i className='fab fa-docker carousel-icons'></i>
                <i className='fab fa-figma carousel-icons'></i>
                <i className='fab fa-github carousel-icons'></i>
                <i className='fab fa-git-square carousel-icons'></i>
                <i className='fab fa-html5 carousel-icons'></i>
            </div>
        );
    }

    return (
        <section className='carousel-collection projectCard'>
            <div className='carousel'>{bgSchema()}</div>
        </section>
    );
}
