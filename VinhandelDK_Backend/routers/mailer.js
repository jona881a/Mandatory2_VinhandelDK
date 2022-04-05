import nodemailer from "nodemailer";
import { Router } from "express";

const router = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "vinhandeldk@outlook.dk",
    pass: "Vinhandel_DK1234",
  },
  tls: { rejectUnauthorized: false },
});

async function sendForgotPasswordMail(req, res, next) {
  const info = await transporter.sendMail({
    from: '"Vinhandel passwordservice" <vinhandeldk@outlook.dk>',
    to: "jonaskunert@hotmail.com",
    subject: "Change of Password",
    html: "<p>Hello, we've recieved a request of changing the password on your vinhandel.dk account, follow this link to change the password. If this is not you you should ignore it<p/>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

router.post("/mail/forgotpassword", sendForgotPasswordMail, (req, res) => {
  res.status(200).send({ message: "Email has been send to your account" });
});

export default router;
