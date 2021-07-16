import React from 'react';
import '../mySASS/_social.scss';
import './_footer.scss';
import FooterLayout from "../Components/FooterLayout.svg";
import EmailForm from "../Components/EmailForm";

function Footer(props){

    // const [screenSize, setScreenSize] = useState(window.screen.width);
    // window.addEventListener('resize', ()=>{setScreenSize(window.screen.width)});

    return (
        <div className='main' id='footer'>
            <footer>
                <img src={FooterLayout} alt='layout' />
                <div className='svgBorder2'></div>
                <div className='svgBorder3'></div>
                <EmailForm/>
                <div className='footer'></div>

                <div className='footer-bottom'>
                    <div className='copyright '>
                        <div>
                            2020 ©{" "}
                            <a href='https://www.iiitr.ac.in/'>
                                {" "}
                                IIITR Raichur{" "}
                            </a>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='footer-socials'>
                            <div className='socialIcon '>
                                <svg height='3rem' width='3rem'>
                                    <circle
                                        cx='1.5rem'
                                        cy='1.5rem'
                                        r='1.2rem'
                                        stroke='white'
                                        strokeWidth='2'
                                        fill='none'></circle>
                                </svg>
                                <i className='fab fa-instagram fa-lg instagram'></i>
                            </div>

                            <div className='socialIcon '>
                                <svg height='3rem' width='3rem'>
                                    <circle
                                        cx='1.5rem'
                                        cy='1.5rem'
                                        r='1.2rem'
                                        stroke='white'
                                        strokeWidth='2'
                                        fill='none'></circle>
                                </svg>
                                <i className='fab fa-lg fa-facebook-f facebook'></i>
                            </div>

                            <div className='socialIcon '>
                                <svg height='3rem' width='3rem'>
                                    <circle
                                        cx='1.5rem'
                                        cy='1.5rem'
                                        r='1.2rem'
                                        stroke='white'
                                        strokeWidth='2'
                                        fill='none'></circle>
                                </svg>
                                <i className='fab fa-lg fa-twitter twitter'></i>
                            </div>

                            <div className='socialIcon '>
                                <svg height='3rem' width='3rem'>
                                    <circle
                                        cx='1.5rem'
                                        cy='1.5rem'
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
            </footer>
        </div>
    );
};


export default Footer;

