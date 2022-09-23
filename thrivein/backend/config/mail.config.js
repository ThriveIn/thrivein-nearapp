import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const user = process.env.EMAIL_USER;
const transport = nodemailer.createTransport({
  host: "smtp.office365.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  auth: {
    user,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendEmail = (name, email, content) => {
  transport
    .sendMail({
      from: user,
      to: email,
      ...content,
    })
    .catch((err) => console.log(err));
};
// subject: "Please confirm your account",
//       html: `<h1>Email Confirmation</h1>
//           <h2>Hello ${name}</h2>
//           <p>Thank you for signing up. Please confirm your email by clicking on the following link</p>
//           <a href=http://localhost:3003/confirm/${confirmationCode}> Click here</a>
//           </div>`,

export default sendEmail;
