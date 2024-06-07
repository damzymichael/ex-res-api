const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (fullName, email, message) {
  if (!fullName || !email)
    throw Error("Full Name or Email empty, fill and retry");

  const exists = await this.findOne({ email });
  if (exists) throw Error("Email already in use, enter another email");

  const user = await this.create({ fullName, email, message });
  return user;
};

module.exports = mongoose.model("user", userSchema);
