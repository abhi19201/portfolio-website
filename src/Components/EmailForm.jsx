import React,{useState} from "react";

export default function EmailForm() {
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener('resize', ()=>{setScreenSize(window.screen.width)});

    return (
        <div>
            <form method='post' class='emailForm' novalidate='novalidate'>
                <div
                    className='formHeading'
                    style={
                        screenSize > 1380
                            ? { alignSelf: "center" }
                            : { alignSelf: "flex-end" }
                    }>
                    <h1
                        onClick={() => {
                            console.log(screenSize);
                        }}
                        id='footer'>
                        &bull; Email Me &bull;
                    </h1>
                    <div class='underline'></div>
                </div>
                <div class='contact-emailForm-footer'>
                    <p>
                        <span class='emailForm-control-wrap your-first-name'>
                            <input
                                type='text'
                                name='your-first-name'
                                value=''
                                size='40'
                                class='emailForm-control text name-form '
                                aria-invalid='false'
                                placeholder='Your Name'
                            />
                        </span>
                    </p>
                    <p>
                        <span class='emailForm-control-wrap your-email_1'>
                            <input
                                type='email'
                                name='your-email_1'
                                value=''
                                size='40'
                                class='emailForm-control text validates-as-email email-form'
                                aria-invalid='false'
                                placeholder='Your Email'
                            />
                        </span>
                    </p>
                    <p>
                        <span class='emailForm-control-wrap your-message'>
                            <textarea
                                name='your-message'
                                cols='40'
                                rows='10'
                                class='emailForm-control textarea'
                                aria-invalid='false'
                                placeholder='Your Message'></textarea>
                        </span>
                    </p>
                    <div>
                        <input
                            type='submit'
                            value='Send'
                            class='emailForm-control submit'
                        />
                        <span class='ajax-loader'></span>
                    </div>
                </div>
            </form>
        </div>
    );
}
