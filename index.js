const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to node");
});
app.listen(8080, () => {
  console.log("Running on 8080");
});
