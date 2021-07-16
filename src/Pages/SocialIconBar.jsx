import React, {useState} from "react";
import "../mySASS/_social.scss";

export default function SocialIconBar() {

    const [hideSideBar, setHideBar] = useState(" ");

    const changeBarView = () => {
        if (window.scrollY >= 2050) {
            setHideBar("hideBar");
        }

        if (window.scrollY < 2050) {
            setHideBar(" ");
        }
    };

    window.addEventListener("scroll", changeBarView);

    return (
        <div className={`socialPane ${hideSideBar}`}>
            <div className='paneBorder'>
                <div className='socialArray'>
                    <div className='socialIconC '>
                        <svg height='4rem' width='4rem'>
                            <circle
                                cx='2rem'
                                cy='2rem'
                                r='1.2rem'
                                stroke='white'
                                strokeWidth='2'
                                fill='none'></circle>
                        </svg>
                        <i className='fab fa-instagram fa-lg instagram'></i>
                    </div>

                    <div className='socialIconC '>
                        <svg height='4rem' width='4rem'>
                            <circle
                                cx='2rem'
                                cy='2rem'
                                r='1.2rem'
                                stroke='white'
                                strokeWidth='2'
                                fill='none'></circle>
                        </svg>
                        <i className='fab fa-lg fa-facebook-f facebook'></i>
                    </div>

                    <div className='socialIconC '>
                        <svg height='4rem' width='4rem'>
                            <circle
                                cx='2rem'
                                cy='2rem'
                                r='1.2rem'
                                stroke='white'
                                strokeWidth='2'
                                fill='none'></circle>
                        </svg>
                        <i className='fab fa-lg fa-twitter twitter'></i>
                    </div>

                    <div className='socialIconC '>
                        <svg height='4rem' width='4rem'>
                            <circle
                                cx='2rem'
                                cy='2rem'
                                r='1.2rem'
                                stroke='white'
                                strokeWidth='2'
                                fill='none'></circle>
                        </svg>
                        <i className='fab fa-lg fa-youtube youtube'></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
