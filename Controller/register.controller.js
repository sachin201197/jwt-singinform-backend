const register = require("../Models/register.model");
const createRegister = (req, res) => {
  const createReg = new register({
    username: req.body.username,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
  })
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

module.exports = {
  createRegister,
};
