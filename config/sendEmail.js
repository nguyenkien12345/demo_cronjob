const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();

const sendMail = async (mail, title) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: mail,
        subject: `${title}`,
        text: `Hello email: ${mail}`,
        html: `<b>Nice to meet you ${mail}</b>`,
    };

    await transporter.sendMail(mailOptions, (err) => {
        if (err) {
            // return {
            //     message: `Fail to send email to ${mail}!`,
            //     status: false,
            //     err: err
            // };
            console.log(`Fail to send email to ${mail}!`);
        }
        else {
            // return {
            //     message: `Success to send email to ${mail}!`,
            //     status: true,
            // };
            console.log(`Success to send email to ${mail}!`);
        }
    });
}

module.exports = sendMail;
