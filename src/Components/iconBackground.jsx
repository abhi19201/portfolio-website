import React,{useEffect} from 'react';

export default function Abhi(props) {
    
    useEffect(() => {
        const marqueeCollection = document.querySelector(".marquee-collection");

        for(var i=0; i<15; i++)
        marqueeCollection.appendChild(marqueeCollection.children[0].cloneNode(true));

    }, [])

    function bgSchema(){

        return (
            <div>
            <i className="fab fa-react marquee-icons"></i>
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

            <i className="fab fa-react marquee-icons"></i>
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
    };


    function bgMain(){
        return(
            <div className="marquee">
                {bgSchema()}
            </div>
        );
    }

    return (
        <section className="marquee-collection">
            {bgMain()}
        </section>
    )
}
