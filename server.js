const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.use(morgan("tiny"));


async function sendMail(mailOptions) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    await transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Mail sent Successfully!");
            transporter.close();
        }
    });
}


app.post("/api/sendMail", (req, res) => {
    let mailOptions = {
        from: req.body.email,
        to: "abhijeetwankhade2001@gmail.com",
        subject: "Mail from Portfolio by " + req.body.name,
        text: req.body.message,
        // generateTextFromHTML: true,
        // html: "<b>test</b>",
    };

    sendMail(mailOptions)
        .then(function (response) {
            res.sendStatus(200);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(PORT, console.log(`app is live at ${PORT}`));
