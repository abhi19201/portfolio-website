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
    const [errorAlert, setErrorAlert] = useState(false);
    const [errorCode, setErrorCode] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const handleError = () => {
        setErrorAlert(true);
    };

    const handleErrorClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setErrorAlert(false);
    };

    const alertSnackbar = () => {
        if (errorCode === "name") {
            return "Name Field cannot be Empty!";
        } else if (errorCode === "nameFormat") {
            return "Please enter valid Name!";
        } else if (errorCode === "email") {
            return "Email Field cannot be Empty!";
        } else if (errorCode === "emailFormat") {
            return "Please enter valid Email Id!";
        } else if (errorCode === "message") {
            return "Message Field cannot be Empty !";
        } else {
            return null;
        }
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
        e.preventDefault();
        var mailformat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        var nameFormat = /^[A-Za-z\s]+$/;

        if (name === "") {
            setErrorCode("name");
            handleError();
        } else if (!name.match(nameFormat)) {
            setErrorCode("nameFormat");
            handleError();
        } else if (email === "") {
            setErrorCode("email");
            handleError();
        } else if (!email.match(mailformat)) {
            setErrorCode("emailFormat");
            handleError();
        } else if (message === "") {
            setErrorCode("message");
            handleError();
        } else {
            var emailData = {
                name,
                email,
                message,
            };

            axios
                .post("api/sendMail", emailData)
                .then(function (response) {
                    if (response.status === 200) {
                        handleOpen();
                        console.log("Mail SuccessFull");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

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
                                required
                                name='your-first-name'
                                value={name}
                                size='40'
                                className='emailForm-control text name-form inputArea'
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
                                required
                                id='email'
                                name='your-email_1'
                                value={email}
                                size='40'
                                className='emailForm-control text validates-as-email email-form inputArea'
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
                                className='emailForm-control textarea inputArea'
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

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>
                    Email Sent Successfully!
                </Alert>
            </Snackbar>

            <Snackbar
                open={errorAlert}
                autoHideDuration={3000}
                onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity='warning'>
                    {alertSnackbar()}
                </Alert>
            </Snackbar>
        </div>
    );
}
