const mongoose = require("mongoose");

async function connectDb() {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://sachin:sac456hin@cluster0.w1qzjsp.mongodb.net/?w=majority"
    );
    console.log("Monog DB is connected");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDb;
