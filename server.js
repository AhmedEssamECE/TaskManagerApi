const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.MONGODB_URL.replace(
  "<db_password>",
  process.env.PASSWORD_MONGODB
);
mongoose.connect(DB).then((connection) => {
  console.log("DB connection successful");
});
