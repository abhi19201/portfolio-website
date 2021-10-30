const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

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


export default (req, res) => {
    return new Promise((resolve, reject) => {
        const body = JSON.parse(req.body)
        let mailOptions = {
            from: body.email,
            to: "abhiwankhade192@gmail.com",
            subject: "Mail from Portfolio by " + body.name,
            //text: "hello",
            generateTextFromHTML: true,
            html: body.htmlMessage,
        };

        sendMail(mailOptions)
            .then(function (response) {
                res.status(200).send("Mailed SuccessFully");
                resolve();
            })
            .catch(function (error) {
                console.log(error);
                return resolve();
            });
    })
    
}