const express = require("express");
const userLogin = require("../Controller/login.controller");

const userRoute = express.Router();

userRoute.post("/login", userLogin);

module.exports = {
  userRoute,
};
