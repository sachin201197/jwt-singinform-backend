const express = require("express");
const connectDB = require("./DBConfig/db");
const cors = require("cors");
const register = require("./Routes/register.route");
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/register", register);
app.get("/", (req, res) => {
  res.send("Welcome to node");
});
app.listen(8080, () => {
  console.log("Running on 8080");
});
