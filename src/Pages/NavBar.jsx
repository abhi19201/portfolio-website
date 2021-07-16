import React from 'react';
import Resume from "../Content/Resume.pdf";
import ABlogo from "../Components/ABLogo";

export default function Navbar() {
    return (
        <div className='navBa'>
            <div className='navTop'>
                <div className='mylogo'>
                    <ABlogo height='8vmax' />
                </div>
            </div>

            <ul className='navItems'>
                <li
                    className='item item1'
                    onClick={() => {
                        document
                            .getElementById("top")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    Home
                </li>
                <li
                    className='item item2'
                    onClick={() => {
                        document
                            .getElementById("about")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    About
                </li>
                <li
                    className='item item3'
                    onClick={() => {
                        document
                            .getElementById("project")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    Projects
                </li>
                <li
                    className='item item4'
                    onClick={() => {
                        document
                            .getElementById("footer")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    Contact
                </li>
                <li
                    className='item item4'
                    onClick={() => {
                        window.location.href = Resume;
                    }}>
                    Resume
                </li>
                {/* <li className="item item4" onClick={()=>{$("#top").visible(true) ? alert("ok") : alert("no") }} >Contact</li> */}
            </ul>
            <div className='line' />
        </div>
    );
}
