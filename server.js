const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");

const logger = require("morgan");

require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

// Static files
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(logger("dev"));

// app.listen(process.env.PORT, () => {
//   console.log(`The server is running on port ${process.env.PORT}`);
// });
