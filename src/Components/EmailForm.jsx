import React, { useState } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function EmailForm() {
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (e.target.id === "name") {
            setName(e.target.value);
        } else if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "message") {
            setMessage(e.target.value);
        } else {
            console.log("Error in Form Click!");
        }
    };

    const handleSubmit = async (e) => {
        handleOpen();
        e.preventDefault();

        var emailData = {
            name,
            email,
            message,
        };

        axios
            .post("https://ab-server19.herokuapp.com/api/sendMail", emailData)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("Mail SuccessFull");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <form method='post' className='emailForm' noValidate='novalidate'>
                <div
                    className='formHeading'
                    style={
                        screenSize > 1380
                            ? { alignSelf: "center" }
                            : { alignSelf: "flex-end" }
                    }>
                    <h1 id='footer'>&bull; Email Me &bull;</h1>
                    <div className='underline'></div>
                </div>
                <div className='contact-emailForm-footer'>
                    <p>
                        <span className='emailForm-control-wrap your-first-name'>
                            <input
                                type='text'
                                id='name'
                                name='your-first-name'
                                value={name}
                                size='40'
                                className='emailForm-control text name-form '
                                aria-invalid='false'
                                placeholder='Your Name'
                                onChange={handleClick}
                            />
                        </span>
                    </p>
                    <p>
                        <span className='emailForm-control-wrap your-email_1'>
                            <input
                                type='email'
                                id='email'
                                name='your-email_1'
                                value={email}
                                size='40'
                                className='emailForm-control text validates-as-email email-form'
                                aria-invalid='false'
                                placeholder='Your Email'
                                onChange={handleClick}
                            />
                        </span>
                    </p>
                    <p>
                        <span className='emailForm-control-wrap your-message'>
                            <textarea
                                name='your-message'
                                id='message'
                                cols='40'
                                rows='10'
                                className='emailForm-control textarea'
                                aria-invalid='false'
                                placeholder='Your Message'
                                value={message}
                                onChange={handleClick}></textarea>
                        </span>
                    </p>
                    <div>
                        <input
                            type='submit'
                            value='Send'
                            className='emailForm-control submit'
                            onClick={handleSubmit}
                        />
                        <span className='ajax-loader'></span>
                    </div>
                </div>
            </form>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>
                    Email Sent Successfully!
                </Alert>
            </Snackbar>
        </div>
    );
}
