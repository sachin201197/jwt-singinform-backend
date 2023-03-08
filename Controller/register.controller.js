const register = require("../Models/register.model");
const createRegister = (req, res) => {
  try {
    const [username, password, confirmPassword] = register.registerUser(
      req.body.username,
      req.body.password,
      req.body.confirmpassword
    );
    const createReg = new register({
      username: username,
      password: password,
      confirmpassword: confirmPassword,
    })
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  } catch (err) {
    res.send({ Error: err.message });
  }
};

module.exports = {
  createRegister,
};
