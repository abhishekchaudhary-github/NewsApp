"use strict";

const nodemailer = require("nodemailer");


const sendEmail = async (email,username,verificationToken) =>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'efrain.turcotte79@ethereal.email',
            pass: 'Y5SVJzp2jhYtXztbX4'
        }
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo" <code@ecode.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "email verification", // Subject line
        html: `<p>hi ${username} to verify your email click the link </p><a href=http://localhost:3000/user/verify-email?verificationToken=${verificationToken}&email=${email}>verify email</a>`, // html body
    });
}

module.exports= sendEmail