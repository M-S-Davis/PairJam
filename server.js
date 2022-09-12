const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");

const logger = require("morgan");
const mainRoutes = require("./routes/main");
const dashboardRoutes = require("./routes/dashboard");

// Load config
dotenv.config({ path: "./config/.env" });

// Passport config
// require("./config/passport")(passport);

// Set templating engine
app.set("view engine", "ejs");

// Static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use("/", mainRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}`);
});
