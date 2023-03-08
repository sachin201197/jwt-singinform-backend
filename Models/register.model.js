const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = mongoose.Schema;

const register = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

register.statics.registerUser = async function (userName, password) {
  const exists = await this.findOne({ userName });
  if (exists) throw Error("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ userName, password: hash });

  return [user.username, user.password];
};

module.exports = mongoose.model("register", register);
