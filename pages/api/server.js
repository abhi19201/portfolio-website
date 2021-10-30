const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const sgMail = require("@sendgrid/mail");


export default (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(process.env.SENDGRID_API_KEY);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const body = JSON.parse(req.body)
        let mailOptions = {
            from: "abhijeetwankhade2001@gmail.com",
            to: "abhiwankhade192@gmail.com",
            subject: "Mail from Portfolio by " + body.name,
            text: body.htmlMessage,
            //generateTextFromHTML: true,
            html: body.htmlMessage,
        };


        sgMail
            .send(mailOptions)
            .then(() => {
                console.log("Email sent");
                res.status(200).send("Mailed SuccessFully");
                resolve();
            })
            .catch((error) => {
                console.error(error);
                res.json(error);
                res.status(405).end();
                return resolve();
            });
        
        
    })
    
}