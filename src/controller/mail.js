require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.create_options_user = (userEmail) => ({
  from: process.env.EX_RES_EMAIL,
  to: userEmail,
  subject: "Thanks for subscribing",
  text: "Thanks for signing up, Our research agents would contact you soon",
});

module.exports.create_options_developer = (name, email, message) => ({
  from: process.env.EX_RES_EMAIL,
  to: process.env.DEV_EMAIL,
  subject: "New User",
  text: `${name} ${email} ${message}`,
});

module.exports.transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EX_RES_EMAIL,
    pass: process.env.EMAIL_PW,
  },
});
