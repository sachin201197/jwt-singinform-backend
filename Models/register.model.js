const mongoose = require("mongoose");

const schema = mongoose.Schema;

const register = new schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
});

module.exports = mongoose.model("register", register);
