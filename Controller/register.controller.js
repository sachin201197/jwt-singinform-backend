const register = require("../Models/register.model");
const createRegister = (req, res) => {
  const [username, password] = register.registerUser(
    req.body.username,
    req.body.password
  );
  const createReg = new register({
    username: username,
    password: password,
    confirmpassword: password,
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
