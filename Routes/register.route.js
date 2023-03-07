const express = require("express");
const regroute = express.Router();
const createRegController = require("../Controller/register.controller");

regroute.post("/register", createRegController.createRegister);

module.exports = regroute;
