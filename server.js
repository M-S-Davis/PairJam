const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const dashboardRoutes = require("./routes/dashboard");

// Load config
require("dotenv").config({ path: "./config/.env" });

// Connect to the database
connectDB();

// Passport config
require("./config/passport")(passport);

// Set templating engine
app.set("view engine", "ejs");

// Static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Sessions
app.use(
  session({
    secret: "peachy",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Setting routes
app.use("/", mainRoutes);
app.use("/dashboard", dashboardRoutes);

// Starting server
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}`);
});
