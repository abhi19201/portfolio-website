import React,{useState} from 'react';
import '../mySASS/_social.scss';
import './_footer.scss';
import {address, Contacts}  from '../Content/footerInfo';

function Footer(props){

    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener('resize', ()=>{setScreenSize(window.screen.width)});

    return (
        <div className="main" id="footer">
            <footer>
                <div className="footer">

                    {/* <div className="logoSpace footerItems">
                        <img src={Logo} alt="Logo"  className="logoF" />
                    </div> */}

                    <div className="address footerItems"  > 
                        <h3 className="footer-title" >Address</h3>
                        <div className="contentCards">
                            <div>
                                Temporary Campus:
                            </div>
                            <div>
                                {address}
                            </div>
                            {/* {screenSize>=960 
                            ?   <div className="map"  >
                                    <Map />
                                </div>
                            : null} */}
                            
                        </div>
                    </div>

                    <div className="footerItems"  > 
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="quickLinks" >

                            <li className="list" >
                                <li class="fas fa-chevron-right rightIcon"></li>
                                <a href="https://www.iiitr.ac.in/" >IIITR Website</a>
                            </li>
                            <li className="list" >
                                <li class="fas fa-chevron-right rightIcon"></li>
                                <a href="https://www.iiitr.ac.in/faculty.html" >Faculty Profiles</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="contact footerItems"  >
                        <h3 className="footer-title" >Conatct Us</h3>

                        {
                            Contacts.map((item)=>{
                                return(
                                    <div className="contentCards" >
                                        <div>{item.name}</div>
                                        <a  className="phoneNum" href={`mailto:${item.email}`} ><i class="fas fa-envelope" aria-hidden="true"></i> : {item.email}</a>
                                        <a className="phoneNum" href={`tel: ${item.phoneNum}`}  ><i class="fa fa-phone" aria-hidden="true"></i> : {item.phoneNum}</a>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                
                <div className="footer-bottom" >

                    <div className="copyright ">
                        <div >2020 © <a href="https://www.iiitr.ac.in/" > IIITR Raichur </a></div>
                    </div>

                    {/* <div className="col-md-6">
                        <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                            <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                            <li key="1" id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="https://www.iiitr.ac.in/">Support</a></li>
                            <li key="2" id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="https://www.iiitr.ac.in/">Contact Us</a></li>
                            <li  key="3" id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="https://www.iiitr.ac.in/">Email Us</a></li>
                            </ul>
                        </nav>
                    </div> */}

                    <div className="col-md-3">

                    <div className="footer-socials">

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-instagram fa-lg instagram" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-facebook-f facebook" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-twitter twitter" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-youtube youtube" ></i>
                            </div>

                    </div>
                    </div>

                </div>
            </footer>
        </div>
    )
};


export default Footer;

