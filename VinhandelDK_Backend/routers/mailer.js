import nodemailer from "nodemailer";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
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

async function sendConfirmationMail(req, res, next) {
  const info = await transporter.sendMail({
    from: '"Jens from Vinhandel DK" <vinhandeldk@outlook.dk>',
    to: "jonaskunert@hotmail.com",
    subject: "Confirmation of Purchase",
    html: "<p>We have recieved your order and are packing it right as we speak<p/>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

router.post("/mail/forgotpassword", sendForgotPasswordMail, (req, res) => {
  res.status(200).send({ message: "Email has been send to your account" });
});

router.post("/mail/purchase-confirmation", sendConfirmationMail, (req, res) => {
  res
    .status(200)
    .send({ message: "Email has been send with purchase details" });
});

export default router;
