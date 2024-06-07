require("dotenv").config();
const User = require("../model/userModel");

const {
  transporter,
  create_options_user,
  create_options_developer,
} = require("./mail");

const successMessage =
  "Signed up successfully, We sent you a mail, it's probably in the spam";

const create_user = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const user = await User.signup(fullName, email, message);
    let option = create_options_user(email);
    await transporter.sendMail(option);
    if (user) res.status(200).json({ message: successMessage });
    option = create_options_developer(fullName, email, message);
    await transporter.sendMail(option);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message }); 
  }
};

module.exports = { create_user };
