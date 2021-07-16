import React from 'react';
import "../mySASS/_social.scss";

export default function SocialIconBar() {
    return (
        <div className='socialPane'>
            <div className='paneBorder'>
                <div className='socialArray'>
                    <div className='socialIcon '>
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

                    <div className='socialIcon '>
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

                    <div className='socialIcon '>
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

                    <div className='socialIcon '>
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
